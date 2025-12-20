import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    Swal.fire({
      title: "Success!",
      text: "আপনার মেসেজটি সফলভাবে পাঠানো হয়েছে।",
      icon: "success",
      confirmButtonColor: "#2563eb",
    });
    reset();
  };
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
            আমাদের সাথে যোগাযোগ করুন
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            লোন সংক্রান্ত যেকোনো প্রয়োজনে আমাদের বিশেষজ্ঞ টিম আপনার পাশে আছে।
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center space-x-4">
              <div className="p-4 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-white">
                  ফোন করুন
                </h4>
                <p className="text-sm text-slate-500">+880 1234 567890</p>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center space-x-4">
              <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-white">
                  ইমেইল
                </h4>
                <p className="text-sm text-slate-500">support@loanlink.com</p>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center space-x-4">
              <div className="p-4 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-full">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-white">
                  অফিস
                </h4>
                <p className="text-sm text-slate-500">সেক্টর ৭, উত্তরা, ঢাকা</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-2 bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-700"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  আপনার নাম
                </label>
                <input
                  {...register("name", { required: "নাম প্রদান করা আবশ্যিক" })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 text-white bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition text-white "
                  placeholder="নাম প্রদান করা আবশ্যিক"
                />
                {errors.name && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-white  text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  ইমেইল এড্রেস
                </label>
                <input
                  {...register("email", {
                    required: "ইমেইল প্রয়োজন",
                    pattern: { value: /^\S+@\S+$/i, message: "সঠিক ইমেইল দিন" },
                  })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition text-white "
                  placeholder="সঠিক ইমেইল দিন"
                />
                {errors.email && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="md:col-span-2 text-white ">
                <label className="block text-sm font-medium  text-slate-700 dark:text-slate-300 mb-2">
                  বিষয়
                </label>
                <input
                  {...register("subject", { required: "বিষয় উল্লেখ করুন" })}
                  className="w-full  px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition text-white "
                  placeholder="লোন অনুমোদন বিষয়ক"
                />
              </div>

              <div className="md:col-span-2 ">
                <label className="text-white  block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  আপনার মেসেজ
                </label>
                <textarea
                  {...register("message", { required: "মেসেজ লিখুন" })}
                  rows="4"
                  className="w-full text-white  px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition"
                  placeholder="আপনার সমস্যা বা প্রশ্ন বিস্তারিত লিখুন..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="md:col-span-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center space-x-2 shadow-lg shadow-blue-200 dark:shadow-none"
              >
                <span>মেসেজ পাঠান</span>
                <FaPaperPlane />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
