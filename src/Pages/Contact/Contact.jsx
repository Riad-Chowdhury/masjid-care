import { FaPhoneAlt, FaMapMarkerAlt, FaUser, FaTrashAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import user from "../../assets/user.png";

export default function Contact() {
  const axiosSecure = useAxiosSecure();

  const { data: contacts = [], refetch } = useQuery({
    queryKey: ["allData"],
    queryFn: async () => {
      const res = await axiosSecure.get("/contact");
      return res.data;
    },
  });

  // ✅ Delete Function
  const handleDelete = async (id) => {
    try {
      await axiosSecure.delete(`/contact/${id}`);
      refetch();
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* 🔍 Top Search Bar */}
      <div className="mb-6 flex items-center bg-white shadow rounded-lg p-2">
        <IoSearch className="text-gray-500 text-xl mr-2" />
        <input
          type="text"
          placeholder="Search contact..."
          className="w-full outline-none"
        />
        <div className="space-x-2 flex">
          <button className="flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition">
            <FaSearch />
            Search
          </button>
          <NavLink
            to={"/contactPage"}
            className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-lg shadow hover:bg-green-700 transition"
          >
            <FaPlus />
            Add
          </NavLink>
        </div>
      </div>

      {/* 📄 Contact Card */}
      {contacts.map((contact) => (
        <div
          key={contact._id}
          data-aos="fade-up"
          data-aos-duration="800"
          className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row mt-1 items-center gap-6 relative"
        >
          {/* ❌ Delete Icon */}
          <button
            onClick={() => handleDelete(contact._id)}
            className="absolute top-3 right-3 text-red-500 hover:text-red-700 transition"
            title="Delete"
          >
            <FaTrashAlt size={18} />
          </button>

          {/* 🖼️ Image */}
          <img
            src={contact.image ? contact.image : user}
            alt="Contact"
            className="w-32 h-32 rounded-full object-cover border"
          />

          {/* 👤 Details */}
          <div className="space-y-3 w-full">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <FaUser className="text-green-600" />
              <span>Name: {contact.name}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-700">
              <FaPhoneAlt className="text-green-600" />
              <span>Phone: {contact.phone}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-700">
              <FaMapMarkerAlt className="text-green-600" />
              <span>Address: {contact.address}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
