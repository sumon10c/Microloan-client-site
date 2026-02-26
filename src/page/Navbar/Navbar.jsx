import React from "react";
import usehook from "../../Context/Hook/usehook";
import { Link, NavLink } from "react-router";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = usehook();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };


  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-loans">All Loans</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      {user && (
        <>
          <li>
          <NavLink to='/dassBoard/myLoans'>My Loans</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (

    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 px-4 md:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium"
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="font-bold text-2xl md:text-3xl text-primary flex items-center gap-2"
        >
         
          <span>LoanLink</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 font-medium text-[16px]">
          {links}
        </ul>
      </div>

      <div className="navbar-end gap-3">
       
        <button className="btn btn-ghost btn-circle">
         
          <FaMoon />
        </button>

        {user ? (
          
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar border-2 border-primary"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Profile"
                  src={user?.photoURL || "https://i.ibb.co/mJR9Qkv/user.png"}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li className="px-4 py-2 font-bold text-primary">
                {user?.displayName || "User"}
              </li>
              <li>
                <Link to="/dashboard/profile">Profile Settings</Link>
              </li>
              <li>
                <button onClick={handleLogOut} className="text-red-500">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link
              to="/login"
              className="btn btn-outline btn-primary hidden md:flex"
            >
              Login
            </Link>
            <Link to="/register" className="btn btn-primary text-white">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
