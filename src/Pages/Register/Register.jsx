import { useForm } from "react-hook-form";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

export default function Register() {
  const location = useLocation();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, setUser, updateUserProfile } = useAuth();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        updateUserProfile({
          displayName: data.name,
          photoURL: data.image,
        })
          .then(() => {
            setUser({
              ...res.user,
              displayName: data.name,
              photoURL: data.image,
            });
          })
          .catch((error) => {
            console.log(error);
            setUser(res.user);
          });

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#3d3a29]">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8 m-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#3d3a29]">
          Create Account
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#3d3a29]">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name")}
              className="input input-bordered focus:outline-none border-[#3d3a29]/30"
              required
            />
          </div>

          {/* Image URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#3d3a29]">Image URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter image URL"
              {...register("image")}
              className="input input-bordered focus:outline-none border-[#3d3a29]/30"
            />
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#3d3a29]">User Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
              className="input input-bordered focus:outline-none border-[#3d3a29]/30"
            />
            {errors.email?.type === "required" && (
              <span className="text-red-500 text-sm">Email is required</span>
            )}
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#3d3a29]">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              {...register("password", { minLength: 6 })}
              className="input input-bordered focus:outline-none border-[#3d3a29]/30"
              required
            />
            {errors.password?.type === "minLength" && (
              <span className="text-red-500 text-sm">
                Password must be at least 6 characters
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full mt-4 border-none text-[#3d3a29] font-bold bg-[#ecf53b] hover:bg-[#d9e23a]"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="divider text-[#3d3a29]">Or continue with</div>

        {/* Social Login */}
        <div className="flex gap-4 justify-center">
          <button className="btn bg-[#3d3a29] hover:bg-[#292717] text-white">
            <FaGoogle className="text-xl" />
            <span>Google</span>
          </button>
          <button className="btn bg-[#3d3a29] hover:bg-[#292717] text-white">
            <FaGithub className="text-xl" />
            <span>GitHub</span>
          </button>
        </div>

        <p className="text-center text-sm mt-6 text-[#3d3a29]">
          Already have an account?{" "}
          <Link to="/auth/login" className="font-semibold underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
