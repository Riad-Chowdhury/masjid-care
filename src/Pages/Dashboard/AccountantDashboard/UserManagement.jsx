// import { useState } from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import { NavLink } from "react-router";
import { IoSearch } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import PropagateLoader from "react-spinners/PropagateLoader";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
export default function UserManagement() {
  const axiosSecure = useAxiosSecure();
  // Dummy Users Data
  const { data: users = [], refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  console.log(users);

  const handleDelete = async (id) => {
    console.log(id);

    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await axiosSecure.delete(`/users/${id}`);

      if (res.data.deletedCount > 0) {
        Swal.fire({
          title: "Deleted!",
          text: "Your item has been deleted.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });

        refetch();
      }
    } catch (error) {
      console.error("Delete failed", error);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong.",
        icon: "error",
      });
    }
  };

  // const handleViewDetails = (id) => {};

  // // Filter users by search

  return (
    <div className="overflow-x-auto p-4 bg-white shadow-lg  rounded-xl mt-10">
      <div className="mb-6 flex items-center bg-white shadow rounded-lg p-2">
        <IoSearch className="text-gray-500 text-xl mr-2" />
        <input
          type="text"
          placeholder="Search contact..."
          className="w-full outline-none"
        />
        <div className="space-x-2 flex">
          <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:text-yellow-300 transition">
            <FaSearch />
            Search
          </button>
        </div>
      </div>
      {/* Header + Search + Add Button */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-4">
        <h1 className="text-2xl font-bold">User Management</h1>
      </div>

      {/* Table */}
      <table className="table w-full">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>

            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id} className="hover">
                {/* Image */}
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={user.image} alt={user.name} />
                    </div>
                  </div>
                </td>

                {/* Name */}
                <td className="font-semibold">{user.name}</td>

                {/* Contact */}
                <td>{user.number}</td>

                {/* Actions */}
                <td className="flex gap-2">
                  <NavLink to={`/dashboard/userManagementDetails/${user._id}`}>
                    <button
                      className="btn btn-sm btn-info btn-outline"
                      // onClick={() => handleViewDetails(user.id)}
                    >
                      <FaEye />
                    </button>
                  </NavLink>
                  <button
                    className="btn btn-sm btn-error btn-outline"
                    onClick={() => handleDelete(user._id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4  text-gray-500">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
