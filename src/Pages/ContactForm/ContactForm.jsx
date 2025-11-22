import { useForm } from "react-hook-form";
import { FaPhoneAlt, FaUser, FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const axiosSecure = useAxiosSecure();
  const onSubmit = (data) => {
    axiosSecure.post("/contact", data).then((response) => {
      if (response.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
    reset();
  };

  return (
    <div className="max-w-md mx-auto p-5 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4 text-center"> Contact</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        {/* Name */}
        <div className="relative">
          <FaUser className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Your Name"
            {...register("name", { required: "Name is required" })}
            className="w-full pl-10 p-2 border rounded-md"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Phone Number */}
        <div className="relative">
          <FaPhoneAlt className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Phone Number"
            {...register("phone", { required: "Phone number is required" })}
            className="w-full pl-10 p-2 border rounded-md"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Address */}
        <div className="relative">
          <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
          <textarea
            placeholder="Your Address"
            {...register("address", { required: "Address is required" })}
            className="w-full pl-10 p-2 border rounded-md"
          ></textarea>
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>

        {/* Image Upload */}
        <div>
          <label className="block mb-1 font-medium">Upload Image</label>
          <input
            type="text"
            {...register("image")}
            className="w-full border p-2 rounded-md"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
