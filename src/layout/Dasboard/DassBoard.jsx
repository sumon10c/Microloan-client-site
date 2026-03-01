import React from "react";
import { CiUser } from "react-icons/ci";
import { FaHandsHelping, FaListUl } from "react-icons/fa";
import { NavLink, Outlet, Link } from "react-router";
import usehook from "../../Context/Hook/usehook";

const DassBoard = () => {
  const { user } = usehook();
  const isAdmin = user?.email === "admin@gmail.com"; 


  const navLinkStyles = ({ isActive }) =>
    `flex items-center gap-4 py-3 px-4 rounded-2xl transition-all duration-300 font-bold ${
      isActive
        ? "bg-primary text-white shadow-lg shadow-primary/30 scale-[1.02]"
        : "text-slate-600 hover:bg-slate-100"
    }`;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-slate-50 min-h-screen">
        {/* Navbar */}
        <nav className="navbar w-full bg-white border-b border-slate-200 px-4">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="my-1.5 inline-block size-6"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>
          <div className="px-4 font-black text-xl tracking-tight text-slate-800">
            Dash-<span className="text-primary">Board</span>
          </div>
        </nav>

        {/* Page content here */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>

      <div className="drawer-side z-40">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        {/* Sidebar content */}
        <div className="flex min-h-full flex-col bg-white border-r border-slate-100 w-64 lg:w-72 p-4">
          {/* Sidebar Header */}
          <div className="p-4 mb-6">
            <h1 className="text-2xl font-black text-slate-800 ">
              Loan<span className="text-primary">Link</span>
            </h1>
          </div>

          <ul className="menu w-full p-0 gap-2">
            {/* Homepage Link */}
            <li>
              <NavLink to="/" className={navLinkStyles}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                <span>Homepage</span>
              </NavLink>
            </li>

            
            <li>
              <NavLink
                to={isAdmin ? "/dassBoard/myLoans" : "/dassBoard/myLoans"}
                className={navLinkStyles}
              >
                {isAdmin ? (
                  <FaListUl className="size-5" /> 
                ) : (
                  <FaHandsHelping className="size-5" /> 
                )}
                <span>{isAdmin ? "All Loans" : "My Loans"}</span>
              </NavLink>
            </li>

            {/* My Profile Link */}
            <li>
              <NavLink to="/dassBoard/myProfile" className={navLinkStyles}>
                <CiUser className="size-5 stroke-[1px]" />
                <span>My Profile</span>
              </NavLink>
            </li>

            <div className="my-4 border-t border-slate-100 mx-4"></div>

            {/* Settings Link */}
            <li>
              <button className="flex items-center gap-4 py-3 px-4 rounded-2xl text-slate-400 font-bold hover:bg-slate-50 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path d="M20 7h-9"></path>
                  <path d="M14 17H5"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
                <span>Settings</span>
              </button>
            </li>
          </ul>

          {/* Sidebar Footer */}
          <div className="mt-auto p-4 bg-slate-50 rounded-[2rem] border border-slate-100 flex flex-col items-center">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Role: {isAdmin ? "System Admin" : "Active User"}
            </p>
            <div className="mt-2 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-bold text-slate-500 uppercase">
                Live
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DassBoard;
