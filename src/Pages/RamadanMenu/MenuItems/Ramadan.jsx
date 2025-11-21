import React from "react";
import { RiPlayListAddLine } from "react-icons/ri";
import { Link } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";

export default function Ramadan() {
  const axiosSecure = useAxiosSecure();
  const { data: list = [], refetch } = useQuery({
    queryKey: ["AllList"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/ramadanSchedule`);
      return res.data;
    },
  });

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This item will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/ramadanSchedule/${id}`);

        if (res.data.deletedCount) {
          Swal.fire({
            title: "Deleted!",
            text: "Item has been removed successfully.",
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
          });

          refetch(); // reload table
        }
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="max-w-4xl mx-auto flex items-center justify-between px-4">
          <h2 className="text-2xl font-semibold text-center mb-6">
            রমজান সময়সূচি
          </h2>
          <div className="flex items-center space-x-7">
            <Link to={"/addRamadanItem"}>
              <RiPlayListAddLine className="hover:text-amber-300" size={20} />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main
        data-aos="fade-up"
        className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-xl"
      >
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-green-700 text-yellow-300">
              <th className="border px-4 py-2 text-left">#</th>

              <th className="border px-4 py-2 text-left">তারিখ / Date</th>
              <th className="border px-4 py-2 text-left">সেহরি / Suhoor</th>
              <th className="border px-4 py-2 text-left">ইফতার / Iftar</th>
              <th className="border px-4 py-2 text-left">✖</th>
            </tr>
          </thead>
          <tbody>
            {list?.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-green-100" : "bg-green-50"}
              >
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{item.date}</td>
                <td className="border px-4 py-2">{item.sehri}</td>
                <td className="border px-4 py-2">{item.iftar}</td>
                <td
                  onClick={() => handleDelete(item._id)} // <-- arrow function
                  className="border px-4 py-2 cursor-pointer text-center"
                >
                  <MdDelete
                    className="text-red-600 hover:text-red-800"
                    size={20}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
