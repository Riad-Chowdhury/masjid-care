import { useState } from "react";
import { MoreVertical, Edit, Trash } from "lucide-react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

export default function AboutCard({ post, refetch }) {
  const { _id, menuName, imgUrl, description, createdAt } = post;
  const { user } = useAuth();
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  const toggleLike = () => {
    if (!liked) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
    setLiked(!liked);
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This post will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      await axiosSecure.delete(`/posts/${id}`).then((res) => {
        console.log(res.data);

        if (res.data.deletedCount) {
          Swal.fire({
            title: "Deleted!",
            text: "Post deleted successfully.",
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
          });
        }
        refetch();
      });
    } catch (error) {
      console.error("Delete failed", error);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong!",
        icon: "error",
      });
    }
  };

  return (
    <div className="max-w-md mx-auto  p-5  rounded-xl shadow-md bg-white relative">
      <div className="flex items-center gap-4 mb-4   ">
        <img
          className="w-10 h-10 rounded-full border-2 border-blue-400 object-cover cursor-pointer"
          src={user.photoURL}
        />
        <div className="">
          {/* Name */}
          <h3 className="text-xl font-semibold mt-3">{menuName}</h3>

          {/* Description */}
          <p className="text-gray-600 mt-1">{description}</p>

          {/* Date */}
          <p className="text-sm text-gray-400 mt-1">{createdAt}</p>
        </div>
      </div>
      {/* Image */}
      <img
        src={imgUrl}
        alt="Card"
        className="w-full h-48 object-cover rounded-xl"
      />

      {/* Like Button */}
      <div className="flex items-center justify-between mt-3">
        <button
          onClick={toggleLike}
          className={`py-2 px-4 rounded-lg font-medium bg-blue-500 text-white ${
            liked ? "bg-red-500" : "bg-blue-500"
          }`}
        >
          Like
        </button>
        <span className="text-gray-700 font-medium">Likes: {likeCount}</span>
      </div>

      {/* 3-Dot Menu */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100"
      >
        <MoreVertical size={20} />
      </button>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-10 right-3 bg-white shadow-md rounded-lg p-2 space-y-2">
          <button className="flex items-center gap-2 hover:text-blue-500">
            <Edit size={18} /> Edit
          </button>
          <button
            onClick={() => handleDelete(_id)}
            className="flex items-center gap-2 hover:text-red-500"
          >
            <Trash size={18} /> Delete
          </button>
        </div>
      )}
    </div>
  );
}
