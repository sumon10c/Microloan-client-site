import React from "react";

const Register = () => {
  return (
    <div className="hero bg-base-200 min-h-screen py-10">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center mb-4">Register Now!</h1>
            
            <form className="fieldset">
              {/* Name Field */}
              <label className="label">Name</label>
              <input type="text" name="name" className="input input-bordered w-full" placeholder="Your Name" required />

              {/* Photo URL Field */}
              <label className="label">Photo URL</label>
              <input type="text" name="photo" className="input input-bordered w-full" placeholder="https://image-link.com" required />

              {/* Email Field */}
              <label className="label">Email</label>
              <input type="email" name="email" className="input input-bordered w-full" placeholder="Email" required />

              {/* Role Dropdown Field (রিকয়ারমেন্ট অনুযায়ী) */}
              <label className="label">Select Role</label>
              <select name="role" className="select select-bordered w-full" required defaultValue="">
                <option value="" disabled>Choose your role</option>
                <option value="borrower">Borrower</option>
                <option value="manager">Manager</option>
              </select>

              {/* Password Field */}
              <label className="label">Password</label>
              <input 
                type="password" 
                name="password" 
                className="input input-bordered w-full" 
                placeholder="Password" 
                required 
              />
              <p className="text-[10px] text-gray-500 mt-1">
                Must have 6+ chars, 1 uppercase, 1 lowercase.
              </p>

              <button className="btn btn-neutral mt-6 w-full text-white">Register</button>
            </form>

            <p className="text-center mt-4 text-sm">
              Already have an account? <a href="/login" className="link link-primary font-bold">Login</a>
            </p>
          </div>
        </div>
      </div>


      
    </div>
  );
};

export default Register;