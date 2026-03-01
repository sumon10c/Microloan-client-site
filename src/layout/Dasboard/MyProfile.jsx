import React from "react";
import usehook from "../../Context/Hook/usehook";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaSignOutAlt,
  FaCalendarAlt,
  FaShieldAlt,
  FaUserTag,
  FaFileInvoiceDollar,
} from "react-icons/fa";

const MyProfile = () => {
  const { user, logOut } = usehook();
  const isAdmin = user?.email === "admin@gmail.com";

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-slate-50 py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden"
      >
        <div className="h-36 bg-gradient-to-br from-primary to-blue-700 relative">
          <div className="absolute -bottom-14 left-1/2 -translate-x-1/2">
            <div className="p-1.5 bg-white rounded-full shadow-xl">
              <img
                src={user?.photoURL || "https://i.ibb.co/mJR9Qkv/user.png"}
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover border-4 border-slate-50"
              />
            </div>
          </div>
        </div>

        <div className="pt-20 pb-10 px-8 text-center">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">
            {user?.displayName || "Anonymous User"}
          </h2>

          <div className="flex justify-center items-center gap-2 mt-4">
            <span
              className={`flex items-center gap-2 px-5 py-1.5 rounded-full text-[11px] font-black uppercase tracking-[0.15em] border ${
                isAdmin
                  ? "bg-red-50 text-red-600 border-red-100"
                  : "bg-emerald-50 text-emerald-600 border-emerald-100"
              }`}
            >
              <FaUserTag className="text-sm" />
              {isAdmin ? "System Admin" : "User"}
            </span>
          </div>

          {!isAdmin && (
            <div className="grid grid-cols-2 gap-3 mt-8">
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                <p className="text-[10px] font-black text-slate-400 uppercase">
                  Active Loans
                </p>
                <p className="text-xl font-black text-primary">02</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                <p className="text-[10px] font-black text-slate-400 uppercase">
                  Credit Score
                </p>
                <p className="text-xl font-black text-emerald-500">750</p>
              </div>
            </div>
          )}

          <div className="mt-8 space-y-3">
            {/* Email Card */}
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group transition-all hover:bg-white hover:shadow-md">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                <FaEnvelope />
              </div>
              <div className="text-left">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                  Email
                </p>
                <p className="text-sm font-bold text-slate-700">
                  {user?.email}
                </p>
              </div>
            </div>

            {/* Date Card */}
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group transition-all hover:bg-white hover:shadow-md">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-indigo-600 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <FaCalendarAlt />
              </div>
              <div className="text-left">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                  Joined
                </p>
                <p className="text-sm font-bold text-slate-700">
                  {user?.metadata?.creationTime
                    ? new Date(user.metadata.creationTime).toLocaleDateString()
                    : "March 2026"}
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-8">
            <button className="flex-1 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all rounded-2xl font-black text-sm uppercase tracking-widest">
              Edit Profile
            </button>
            <button
              onClick={logOut}
              className="flex-1 py-4 bg-red-50 hover:bg-red-500 text-red-500 hover:text-white transition-all rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2"
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MyProfile;
