import React from "react";
import { useForm } from "react-hook-form";
import usehook from "../../../Context/Hook/usehook";

const Login = () => {
  const { signInUser, googleSignIn } = usehook();
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

  // Google Login
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log(" Google Login Success:", result.user);
      })
      .catch((error) => {
        console.log(" Google Login Error:", error.code, error.message);
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

            {/* Google Login */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn bg-white text-black border border-gray-300"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                viewBox="0 0 512 512"
                className="mr-2"
              >
                <path
                  fill="#EA4335"
                  d="M113 309l-18 67-65 1C11 341 0 299 0 256c0-42 11-81 30-115l58 11 26 60c-6 18-9 37-9 44 0 8 3 27 9 44z"
                />
                <path
                  fill="#34A853"
                  d="M512 256c0 18-3 36-7 52-16 65-60 119-121 149l-59-48c36-21 61-56 69-101H256v-52h256z"
                />
                <path
                  fill="#4A90E2"
                  d="M384 457c-35 22-77 35-128 35-97 0-180-55-223-135l83-68c22 60 80 103 140 103 25 0 49-6 69-16l59 81z"
                />
                <path fill="#FBBC05" d="M512 256H256v-52h256v52z" />
              </svg>
              Login with Google
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
