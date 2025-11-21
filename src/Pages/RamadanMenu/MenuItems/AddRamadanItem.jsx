import React from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

export default function AddRamadanItem() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const axiosSecure = useAxiosSecure("/ramadanSchedule");
  const onSubmit = (data) => {
    console.log("Ramadan Item:", data);
    reset();
    axiosSecure.post("/ramadanSchedule", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Time And Date Added",
          showConfirmButton: false,
          timer: 1500,
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          color: "#ffffff",
        });
      }
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Add Ramadan Schedule
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Date */}
        <div>
          <label className="block mb-1 font-medium">Date</label>
          <input
            type="date"
            {...register("date", { required: true })}
            className="w-full p-2 border rounded-lg cursor-pointer"
          />
          {errors.date && (
            <span className="text-red-500 text-sm">Date is required</span>
          )}
        </div>

        {/* Suhoor Time */}
        <div>
          <label className="block mb-1 font-medium">Sehri Time</label>
          <input
            type="time"
            {...register("sehri", { required: true })}
            className="w-full p-2 border rounded-lg"
          />
          {errors.sehri && (
            <span className="text-red-500 text-sm">Sehri time is required</span>
          )}
        </div>

        {/* Iftar Time */}
        <div>
          <label className="block mb-1 font-medium">Iftar Time</label>
          <input
            type="time"
            {...register("iftar", { required: true })}
            className="w-full p-2 border rounded-lg"
          />
          {errors.iftar && (
            <span className="text-red-500 text-sm">Iftar time is required</span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
        >
          Add Schedule
        </button>
      </form>
    </div>
  );
}
