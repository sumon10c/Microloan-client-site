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

    console.log(" Attempting to save user to DB...", userInfo);

    try {
      const response = await axiosSecure.put("/users", userInfo);
      console.log(" User saved successfully to DB:", response.data);
    } catch (err) {
      console.error(" DB Save Error:", err.response?.data || err.message);
    }
  };

  const handleRegister = async (data) => {
    try {
      console.log(" Registration started for:", data.email);
      
      const profilePhoto = data.photo[0];
      const formData = new FormData();
      formData.append("image", profilePhoto);

      
      console.log(" Uploading image to ImgBB...");
      const imgApi = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`;
      const res = await axios.post(imgApi, formData);
      const photoURL = res.data.data.display_url;
      console.log(" Image uploaded! URL:", photoURL);

      
      console.log(" Registering user in Firebase...");
      await registerUser(data.email, data.password, data.name, photoURL);
      console.log(" Firebase registration complete.");

      
      await saveUserToDb(data.name, data.email, photoURL);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registration Successful",
        showConfirmButton: false,
        timer: 1500,
      });

      console.log(" Waiting 1s before redirect and reload...");
      setTimeout(() => {
        navigate(location?.state || "/");
        window.location.reload();
      }, 1000);

    } catch (error) {
      console.error(" Global Registration Error:", error);
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.message,
      });
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="card bg-base-100 w-full max-w-md shadow-xl border border-gray-100">
        <div className="p-8 text-center">
          <h2 className="text-3xl font-bold text-primary">Create Account</h2>
          <p className="text-gray-500 mt-2">Join us to manage your microloans</p>
        </div>

        <form onSubmit={handleSubmit(handleRegister)} className="card-body pt-0">
          {/* Full Name */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Full Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className={`input input-bordered w-full ${errors.name ? "border-red-500" : ""}`}
              placeholder="Enter your name"
            />
            {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
          </div>

          {/* Photo */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Profile Photo</span>
            </label>
            <input
              type="file"
              {...register("photo", { required: "Photo is required" })}
              className={`file-input file-input-bordered w-full ${errors.photo ? "border-red-500" : ""}`}
            />
            {errors.photo && <span className="text-red-500 text-xs mt-1">{errors.photo.message}</span>}
          </div>

          {/* Email */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Email Address</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className={`input input-bordered w-full ${errors.email ? "border-red-500" : ""}`}
              placeholder="Enter your email"
            />
            {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
          </div>

          {/* Password */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Must be 6+ chars" },
                pattern: {
                  value: /(?=.*[a-z])(?=.*[A-Z])/,
                  message: "Uppercase & Lowercase needed",
                },
              })}
              className={`input input-bordered w-full ${errors.password ? "border-red-500" : ""}`}
              placeholder="Enter password"
            />
            {errors.password && <span className="text-red-500 text-xs mt-1">{errors.password.message}</span>}
          </div>

          <button type="submit" disabled={loading} className="btn btn-primary w-full mt-6 text-white">
            {loading ? <span className="loading loading-spinner"></span> : "Register"}
          </button>

          <div className="divider text-gray-400 text-xs mt-6">OR REGISTER WITH</div>
          <SocialLogin />
          <p className="text-center mt-6 text-sm">
            Already have an account?{" "}
            <Link state={location.state} to="/login" className="text-primary font-bold ml-1 hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;