import React from "react";
import { useForm } from "react-hook-form";
import usehook from "../../../Context/Hook/usehook";
import SocialLogin from "../../../Context/Hook/SocialLogin/SocialLogin";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router";

const Register = () => {
  const { registerUser } = usehook();
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegister = (data) => {
    // console.log(data)
    const profilePhoto = data.photo[0];
    const formData = new FormData();
    formData.append("image", profilePhoto);

    const imgApi = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_image_host
    }`;

    axios.post(imgApi, formData).then((res) => {
      console.log("after post image", res.data);
    });
    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log("🔥 Firebase Error:", error.code, error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen py-10">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center mb-4">
              Register Now!
            </h1>

            <form onSubmit={handleSubmit(handleRegister)} className="fieldset">
              {/* Name Field */}
              <label className="label">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="input input-bordered w-full"
                placeholder="Your Name"
              />
              {errors.name?.type === "required" && (
                <p className="text-red-500">Name is required</p>
              )}

              {/* Photo Field */}
              <label className="label">Photo </label>
              <input
                type="file"
                {...register("photo", { required: true })}
                className="file-input input-bordered w-full"
                placeholder="Your Photo"
              />
              {errors.photo?.type === "required" && (
                <p className="text-red-500">Photo is required</p>
              )}

              {/* Email Field */}
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input input-bordered w-full"
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500">Email is required</p>
              )}

              {/* Role Dropdown Field (রিকয়ারমেন্ট অনুযায়ী) */}
              {/* <label className="label">Select Role</label>
              <select
                name="role"
                className="select select-bordered w-full"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Choose your role
                </option>
                <option value="borrower">Borrower</option>
                <option value="manager">Manager</option>
              </select> */}

              {/* Password Field */}
              <label className="label">Password</label>
              <input
                type="password"
                {...register("password", { required: true, minLength: 6 })}
                className="input input-bordered w-full"
                placeholder="Password"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">Must have 6+ chars</p>
              )}
              {/* <p className="text-[10px] text-gray-500 mt-1">
                  , 1 uppercase, 1 lowercase.
                </p> */}

              <button className="btn btn-neutral mt-6 w-full text-white">
                Register
              </button>
            </form>
            <p className="text-sm">
              All ready have an account{" "}
              <span className="text-blue-600">
                <Link state={location.state} to="/login">
                  Login
                </Link>
              </span>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
