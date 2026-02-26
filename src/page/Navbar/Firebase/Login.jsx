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
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="card bg-base-100 w-full max-w-md shadow-xl border border-gray-100">
        <div className="p-8 text-center">
          <h2 className="text-3xl font-bold text-primary">Welcome Back</h2>
          <p className="text-gray-500 mt-2">Log in to manage your microloans</p>
        </div>

        <form onSubmit={handleSubmit(handleLogin)} className="card-body pt-0">
          {/* Email Field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Email Address</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className={`input input-bordered w-full ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password Field - Fixed Version */}
          <div className="form-control w-full mt-2">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className={`input input-bordered w-full ${
                errors.password ? "border-red-500" : ""
              }`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <span className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="flex justify-between items-center mt-4">
            <label className="label cursor-pointer gap-2 p-0">
              <input
                type="checkbox"
                className="checkbox checkbox-xs checkbox-primary"
              />
              <span className="label-text">Remember me</span>
            </label>
            <button
              type="button"
              className="text-primary hover:underline text-sm font-medium bg-transparent border-none"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full mt-6 text-white"
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Login"
            )}
          </button>

          <div className="divider text-gray-400 text-xs mt-6">
            OR LOGIN WITH
          </div>

          <SocialLogin />

          <p className="text-center mt-6 text-sm">
            Don't have an account?
            <Link
              state={location.state}
              to="/register"
              className="text-primary font-bold ml-1 hover:underline"
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
