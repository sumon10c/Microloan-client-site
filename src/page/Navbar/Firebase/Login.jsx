import React from "react";
import { useForm } from "react-hook-form";
import usehook from "../../../Context/Hook/usehook";
import SocialLogin from "../../../Context/Hook/SocialLogin/SocialLogin";

const Login = () => {
  const { signInUser} = usehook();
  const { register, handleSubmit } = useForm();

  // Email & Password Login
  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        console.log("Login Success:", result.user);
      })
      .catch((error) => {
        console.log(" Firebase Error:", error.code, error.message);
      });
  };



  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <form onSubmit={handleSubmit(handleLogin)} className="card-body">
          <fieldset className="fieldset space-y-2">
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input input-bordered"
              placeholder="Email"
            />

            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="input input-bordered"
              placeholder="Password"
            />

            <div className="text-right">
              <a className="link link-hover text-sm">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-neutral mt-3">
              Login
            </button>
            
            <SocialLogin></SocialLogin>

          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
