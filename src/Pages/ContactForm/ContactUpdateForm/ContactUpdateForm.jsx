import { useForm } from "react-hook-form";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

export default function ContactUpdateForm() {
  const axiosSecure = useAxiosSecure();
  const { _id, name, phone, address, image } = useLoaderData();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [preview, setPreview] = useState("");

  const onSubmit = (data) => {
    axiosSecure.put(`/contact/${_id}`, data).then((res) => {
      if (res.data.modifiedCount) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/contact");
      }
    });
  };

  // image preview
  //   const handleImageChange = (e) => {
  //     const file = e.target.files[0];
  //     if (file) {
  //       setPreview(URL.createObjectURL(file));
  //     }
  //   };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-semibold text-center mb-5">Update Form</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Image Upload */}
        <div className="flex flex-col items-center gap-3">
          <input
            {...register("image")}
            placeholder="image URL"
            defaultValue={image}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Name */}
        <input
          {...register("name")}
          placeholder="Enter Name"
          defaultValue={name}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* Phone */}
        <input
          {...register("phone")}
          placeholder="Enter Phone"
          defaultValue={phone}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* Address */}
        <input
          {...register("address")}
          placeholder="Enter Address"
          defaultValue={address}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Update
        </button>
      </form>
    </div>
  );
}
