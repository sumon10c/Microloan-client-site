import React, { useState } from "react";
import usehook from "../../Context/Hook/usehook";
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2";
import axios from "axios";
import {
  FaEnvelope,
  FaSignOutAlt,
  FaCalendarAlt,
  FaUserTag,
  FaTimes,
} from "react-icons/fa";

const MyProfile = () => {
  const { user, logOut, updateUserProfile } = usehook();
  const isAdmin = user?.email === "admin@gmail.com";


  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [uploading, setUploading] = useState(false);

 
  const img_hosting_key = import.meta.env.VITE_image_host;
  const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setUploading(true);

    const form = e.target;
    const name = form.name.value;
    const imageFile = form.photo.files[0];

    try {
      let photoURL = user?.photoURL;

     
      if (imageFile) {
        const formData = new FormData();
        formData.append("image", imageFile);

        const res = await axios.post(img_hosting_api, formData, {
          headers: { "content-type": "multipart/form-data" },
        });

        if (res.data.success) {
          photoURL = res.data.data.display_url;
        }
      }

      
      await updateUserProfile(name, photoURL);

      setIsEditModalOpen(false);
      Swal.fire({
        icon: "success",
        title: "Profile Updated Successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire("Error", "Update failed, try again!", "error");
    } finally {
      setUploading(false);
    }
  };

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
            <button
              onClick={() => setIsEditModalOpen(true)}
              className="flex-1 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all rounded-2xl font-black text-sm uppercase tracking-widest"
            >
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

      {/* Edit Profile Modal */}
      <AnimatePresence>
        {isEditModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight">
                  Edit Profile
                </h3>
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="text-slate-400 hover:text-red-500 transition-colors"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              <form onSubmit={handleUpdateProfile} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-2">
                    Display Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user?.displayName}
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-primary font-bold text-slate-700"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-2">
                    Profile Photo
                  </label>
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    className="file-input file-input-bordered w-full bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold text-slate-500"
                  />
                  <p className="text-[9px] text-slate-400 italic ml-2">
                    Keep empty to remain unchanged
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={uploading}
                  className="w-full py-4 bg-primary text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg shadow-primary/20 hover:bg-blue-700 transition-all mt-4 disabled:bg-slate-300"
                >
                  {uploading ? "Updating..." : "Save Changes"}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MyProfile;
