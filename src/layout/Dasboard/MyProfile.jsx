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
        title: "Profile Updated!",
        showConfirmButton: false,
        timer: 1500,
        background: "var(--color-base-100)",
        color: "var(--color-base-content)",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Update failed",
        background: "var(--color-base-100)",
        color: "var(--color-base-content)",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-12 px-4 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-base-100 rounded-[2.5rem] shadow-2xl border border-base-300 overflow-hidden"
      >
        {/* Banner Section */}
        <div className="h-36 bg-gradient-to-br from-primary to-secondary relative">
          <div className="absolute -bottom-14 left-1/2 -translate-x-1/2">
            <div className="p-1.5 bg-base-100 rounded-full shadow-xl">
              <img
                src={user?.photoURL || "https://i.ibb.co/mJR9Qkv/user.png"}
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover border-4 border-base-200"
              />
            </div>
          </div>
        </div>

        <div className="pt-20 pb-10 px-8 text-center text-base-content">
          <h2 className="text-3xl font-black tracking-tight">
            {user?.displayName || "Anonymous User"}
          </h2>

          <div className="flex justify-center items-center gap-2 mt-4">
            <span
              className={`flex items-center gap-2 px-5 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest border ${
                isAdmin
                  ? "bg-error/10 text-error border-error/20"
                  : "bg-success/10 text-success border-success/20"
              }`}
            >
              <FaUserTag className="text-sm" />
              {isAdmin ? "System Admin" : "User"}
            </span>
          </div>

          {!isAdmin && (
            <div className="grid grid-cols-2 gap-3 mt-8">
              <div className="bg-base-200 p-3 rounded-2xl border border-base-300">
                <p className="text-[10px] font-black opacity-50 uppercase">
                  Active Loans
                </p>
                <p className="text-xl font-black text-primary">02</p>
              </div>
              <div className="bg-base-200 p-3 rounded-2xl border border-base-300">
                <p className="text-[10px] font-black opacity-50 uppercase">
                  Credit Score
                </p>
                <p className="text-xl font-black text-success">750</p>
              </div>
            </div>
          )}

          <div className="mt-8 space-y-3 text-left">
            {/* Info Cards */}
            {[
              {
                icon: <FaEnvelope />,
                label: "Email",
                val: user?.email,
                color: "text-primary",
              },
              {
                icon: <FaCalendarAlt />,
                label: "Joined",
                val: user?.metadata?.creationTime
                  ? new Date(user.metadata.creationTime).toLocaleDateString()
                  : "March 2026",
                color: "text-secondary",
              },
            ].map((info, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-base-200 rounded-2xl border border-base-300 group transition-all hover:bg-base-300"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-base-100 flex items-center justify-center ${info.color} shadow-sm group-hover:bg-primary group-hover:text-primary-content transition-all`}
                >
                  {info.icon}
                </div>
                <div>
                  <p className="text-[9px] font-black opacity-40 uppercase tracking-widest">
                    {info.label}
                  </p>
                  <p className="text-sm font-bold opacity-80">{info.val}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 mt-8">
            <button
              onClick={() => setIsEditModalOpen(true)}
              className="btn btn-ghost flex-1 py-4 bg-base-200 hover:bg-base-300 text-base-content rounded-2xl font-black text-xs uppercase tracking-widest"
            >
              Edit Profile
            </button>
            <button
              onClick={logOut}
              className="btn btn-error btn-outline flex-1 py-4 rounded-2xl font-black text-xs uppercase tracking-widest gap-2"
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>
      </motion.div>

      {/* Edit Profile Modal */}
      <AnimatePresence>
        {isEditModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-base-100 w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl border border-base-300"
            >
              <div className="flex justify-between items-center mb-6 text-base-content">
                <h3 className="text-xl font-black uppercase tracking-tight">
                  Edit Profile
                </h3>
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="opacity-40 hover:text-error hover:opacity-100 transition-all"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              <form onSubmit={handleUpdateProfile} className="space-y-4">
                <div className="form-control">
                  <label className="label uppercase text-[10px] font-black opacity-50 ml-2">
                    Display Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user?.displayName}
                    className="input input-bordered w-full rounded-2xl bg-base-200 font-bold focus:input-primary"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label uppercase text-[10px] font-black opacity-50 ml-2">
                    Profile Photo
                  </label>
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    className="file-input file-input-bordered w-full bg-base-200 rounded-2xl text-xs"
                  />
                  <p className="text-[9px] opacity-40 italic mt-2 ml-2">
                    Keep empty to remain unchanged
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={uploading}
                  className="btn btn-primary w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest mt-4 shadow-lg shadow-primary/20 disabled:bg-base-300"
                >
                  {uploading ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    "Save Changes"
                  )}
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
