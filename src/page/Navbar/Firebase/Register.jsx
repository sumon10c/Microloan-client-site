import React from "react";
import { useForm } from "react-hook-form";
import usehook from "../../../Context/Hook/usehook";
import SocialLogin from "../../../Context/Hook/SocialLogin/SocialLogin";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import Axios from "../../../Context/Hook/useAxiousSucere/Axios";

const Register = () => {
  const { registerUser, loading } = usehook();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = Axios();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const saveUserToDb = async (name, email, photo) => {
    const userInfo = {
      name: name,
      Email: email,
      photo: photo,
      role: "User",
      createdAt: new Date().toISOString(),
    };

    try {
      await axiosSecure.put("/users", userInfo);
    } catch (err) {
      console.error("DB Save Error:", err.message);
    }
  };

  const handleRegister = async (data) => {
    try {
      const profilePhoto = data.photo[0];
      const formData = new FormData();
      formData.append("image", profilePhoto);

      const imgApi = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_image_host
      }`;
      const res = await axios.post(imgApi, formData);
      const photoURL = res.data.data.display_url;

      await registerUser(data.email, data.password, data.name, photoURL);
      await saveUserToDb(data.name, data.email, photoURL);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registration Successful",
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(() => {
        navigate(location?.state || "/");
        window.location.reload();
      }, 1000);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.message,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 text-base-content px-4 py-10 transition-colors duration-300">
      <div className="card bg-base-200 w-full max-w-md shadow-2xl border border-base-300">
        <div className="p-8 text-center border-b border-base-300 mb-4">
          <h2 className="text-4xl font-extrabold text-primary">
            Create Account
          </h2>
          <p className="opacity-70 mt-2">Join us to manage your microloans</p>
        </div>

        <form
          onSubmit={handleSubmit(handleRegister)}
          className="card-body pt-0 space-y-4"
        >
          {/* Full Name */}
          <div className="form-control w-full">
            <label className="mb-2 block">
              <span className="text-sm font-bold uppercase tracking-wide">
                Full Name
              </span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full bg-base-100 text-base-content focus:border-primary border-gray-600"
              placeholder="Sumon Chakrabarty"
            />
            {errors.name && (
              <span className="text-red-500 text-xs mt-1">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Profile Photo */}
          <div className="form-control w-full">
            <label className="mb-2 block">
              <span className="text-sm font-bold uppercase tracking-wide">
                Profile Photo
              </span>
            </label>
            <input
              type="file"
              {...register("photo", { required: "Photo is required" })}
              className="file-input file-input-bordered w-full bg-base-100 text-base-content border-gray-600"
            />
            {errors.photo && (
              <span className="text-red-500 text-xs mt-1">
                {errors.photo.message}
              </span>
            )}
          </div>

          {/* Email Address */}
          <div className="form-control w-full">
            <label className="mb-2 block">
              <span className="text-sm font-bold uppercase tracking-wide">
                Email Address
              </span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="input input-bordered w-full bg-base-100 text-base-content focus:border-primary border-gray-600"
              placeholder="example@mail.com"
            />
            {errors.email && (
              <span className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="form-control w-full">
            <label className="mb-2 block">
              <span className="text-sm font-bold uppercase tracking-wide">
                Password
              </span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Must be 6+ characters" },
              })}
              className="input input-bordered w-full bg-base-100 text-base-content focus:border-primary border-gray-600"
              placeholder="••••••••"
            />
            {errors.password && (
              <span className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full mt-4 text-white font-bold text-lg border-none"
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Register Now"
            )}
          </button>

          <div className="divider opacity-50 text-xs uppercase">
            Or Connect With
          </div>

          <div className="flex justify-center">
            <SocialLogin />
          </div>

          <p className="text-center mt-6 text-sm">
            Already have an account?{" "}
            <Link
              state={location.state}
              to="/login"
              className="text-primary font-bold ml-1 hover:underline underline-offset-4"
            >
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
