// src/pages/auth/Login.jsx
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

export default function Login() {
  const { signInUser } = useAuth();
  const location = useLocation();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    signInUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        navigate(location.state ? location.state : "/");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#3d3a29] p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-[#3d3a29]">Login</h1>

        {/* Email & Password Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text text-[#3d3a29] font-semibold">
                Email
              </span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
              className="input input-bordered w-full focus:border-[#ecf53b] focus:outline-none"
            />
            {errors.email?.type === "required" && (
              <span className="text-red-500 text-sm">email is required</span>
            )}
          </div>

          <div>
            <label className="label">
              <span className="label-text text-[#3d3a29] font-semibold">
                Password
              </span>
            </label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              placeholder="Enter your password"
              className="input input-bordered w-full focus:border-[#ecf53b] focus:outline-none"
            />
            {errors.password?.type === "required" && (
              <span className="text-red-500 text-sm">Password is required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-red-500 text-sm">
                Password must be 6 characters or longer
              </span>
            )}
          </div>

          <button
            type="submit"
            className="btn w-full border-none bg-[#ecf53b] text-[#3d3a29] font-bold hover:bg-[#d4dc33]"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="divider text-[#3d3a29]">or continue with</div>

        {/* Social Login Buttons */}
        <div className="flex gap-4">
          <button className="btn flex-1 bg-[#3d3a29] hover:bg-[#504b33] text-white border-none">
            <FcGoogle className="text-2xl mr-2" /> Google
          </button>
          <button className="btn flex-1 bg-[#3d3a29] hover:bg-[#504b33] text-white border-none">
            <FaGithub className="text-2xl mr-2" /> GitHub
          </button>
        </div>

        <p className="text-center text-sm text-[#36321a] mt-2">
          Don’t have an account?{" "}
          <Link to="/auth/register" className="text-[#41421f] font-semibold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
