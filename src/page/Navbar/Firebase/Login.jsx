import React from "react";
import { useForm } from "react-hook-form";
import usehook from "../../../Context/Hook/usehook";
import SocialLogin from "../../../Context/Hook/SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUser, loading } = usehook();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state || "/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid Email or Password!",
        });
      });
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-base-100 text-base-content px-4 py-10 transition-colors duration-300">
     
      <div className="card bg-base-200 w-full max-w-md shadow-2xl border border-base-300">
        <div className="p-8 text-center border-b border-base-300 mb-4">
          <h2 className="text-4xl font-extrabold text-primary">Welcome Back</h2>
          <p className="opacity-70 mt-2">Log in to manage your microloans</p>
        </div>

        <form
          onSubmit={handleSubmit(handleLogin)}
          className="card-body pt-0 space-y-4"
        >
          {/* Email Field */}
          <div className="form-control w-full">
            <label className="mb-2 block">
              <span className="text-sm font-bold uppercase tracking-wide">
                Email Address
              </span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className={`input input-bordered w-full bg-base-100 text-base-content border-gray-600 focus:border-primary ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="admin@gmail.com"
            />
            {errors.email && (
              <span className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password Field */}
          <div className="form-control w-full">
            <label className="mb-2 block">
              <span className="text-sm font-bold uppercase tracking-wide">
                Password
              </span>
            </label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className={`input input-bordered w-full bg-base-100 text-base-content border-gray-600 focus:border-primary ${
                errors.password ? "border-red-500" : ""
              }`}
              placeholder="••••••••"
            />
            {errors.password && (
              <span className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="flex justify-between items-center mt-2">
            <label className="label cursor-pointer gap-2 p-0">
              <input
                type="checkbox"
                className="checkbox checkbox-xs checkbox-primary border-gray-500"
              />
              <span className="label-text text-sm">Remember me</span>
            </label>
            <button
              type="button"
              className="text-primary hover:underline text-sm font-bold bg-transparent border-none"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full mt-4 text-white font-bold text-lg border-none"
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Login Now"
            )}
          </button>

          <div className="divider opacity-50 text-xs uppercase">
            Or Continue With
          </div>

          <div className="flex justify-center">
            <SocialLogin />
          </div>

          <p className="text-center mt-6 text-sm">
            Don't have an account?
            <Link
              state={location.state}
              to="/register"
              className="text-primary font-bold ml-1 hover:underline underline-offset-4"
            >
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
