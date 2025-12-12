import React from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router";
export default function AddPost() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure("/posts");
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    axiosSecure.post(`/posts`, data).then((response) => {
      toast("Post added successfully!");
      if (response.data.insertedId) {
        navigate("/aboutUs");
      }
    });

    reset();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-semibold mb-4">Add New Post</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Menu Name */}
        <div className="hidden">
          <label className="block mb-1 font-medium">Menu Name</label>
          <input
            type="text"
            value={user?.displayName}
            {...register("menuName", { required: true })}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter menu name"
          />
          {errors.menuName && (
            <span className="text-red-500 text-sm">Menu name is required</span>
          )}
        </div>

        {/* Image URL */}
        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input
            type="text"
            {...register("imgUrl", { required: true })}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter image URL"
          />
          {errors.imgUrl && (
            <span className="text-red-500 text-sm">Image URL is required</span>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            {...register("description", { required: true })}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter description"
          ></textarea>
          {errors.description && (
            <span className="text-red-500 text-sm">
              Description is required
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Add Post
        </button>
        <ToastContainer />
      </form>
    </div>
  );
}
