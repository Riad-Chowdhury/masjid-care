import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

export default function UserManagementForm() {
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const res = await axiosSecure.post("/users", data);

      if (res.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "User added successfully!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });

        reset(); // form reset
        navigate("/dashboard/userManagement");
      }
    } catch (error) {
      console.error(error);

      Swal.fire({
        title: "Error!",
        text: error.response?.data?.message || "Something went wrong!",
        icon: "error",
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-5">Add User</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4"
      >
        <div className="col-span-2">
          <label className="font-medium">Full Name</label>
          <input
            {...register("name")}
            className="w-full border p-2 rounded  border-blue-800 outline-blue-700"
            placeholder="Enter full name"
          />
        </div>

        <div>
          <label className="font-medium">Mobile Number</label>
          <input
            {...register("number")}
            className="w-full border p-2 rounded  border-blue-800 outline-blue-700"
            placeholder="01xxxxxxxxx"
          />
        </div>

        <div>
          <label className="font-medium">Image URL</label>
          <input
            {...register("image")}
            className="w-full border p-2 rounded  border-blue-800 outline-blue-700"
            placeholder="https://image.jpg"
          />
        </div>

        <div>
          <label className="font-medium">Address</label>
          <input
            type="text"
            {...register("defaultFee", { valueAsNumber: true })}
            className="w-full border p-2 rounded border-blue-800 outline-blue-700"
            placeholder="address"
          />
        </div>

        <div>
          <label className="font-medium">Default Monthly Fee (Optional)</label>
          <input
            type="number"
            {...register("defaultFee")}
            className="w-full border p-2 rounded  border-blue-800 outline-blue-700"
            placeholder="e.g. 100"
          />
        </div>

        <div className="col-span-2">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-300 w-full">
            Add User
          </button>
        </div>
      </form>
    </div>
  );
}
