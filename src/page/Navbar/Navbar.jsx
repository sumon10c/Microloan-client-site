import React from "react";
import { Link, NavLink } from "react-router";
import Logo from '../../assets/logo.png'

const Navbar = () => {
     const links = <>
     <li className="font-semibold text-gray-600 text-[16px] hover:text-blue-400"><NavLink to='/'>Home</NavLink></li>
     <li className="font-semibold text-gray-600 text-[16px] hover:text-blue-400"><NavLink to='/all-loans'>All Loans</NavLink></li>
     <li className="font-semibold text-gray-600 text-[16px] hover:text-blue-400"><NavLink to='/about'>About Us</NavLink></li>
     <li className="font-semibold text-gray-600 text-[16px] hover:text-blue-400"><NavLink to='/contact'>Contact</NavLink></li>
     </>
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <h1 className="font-bold text-3xl text-gray-700">MicroLoan</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn bg-primary hover:bg-blue-500 font-semibold text-[16px] text-white mr-[5px]"><Link to='/login'>Login</Link></button>
        <button className="btn bg-primary hover:bg-blue-500 font-semibold text-[16px] text-white"><Link to='/register'>Register</Link></button>
      </div>
    </div>
  );
};

export default Navbar;
