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
      text: "আপনার মেসেজটি সফলভাবে পাঠানো হয়েছে।",
      icon: "success",
      confirmButtonColor: "var(--color-primary)",
      background: "var(--color-base-100)",
      color: "var(--color-base-content)",
    });
    reset();
  };

  return (
    <div className="min-h-screen bg-base-200 text-base-content py-16 px-6 transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            আমাদের সাথে <span className="text-primary">যোগাযোগ</span> করুন
          </h1>
          <p className="opacity-70 max-w-lg mx-auto leading-relaxed">
            লোন সংক্রান্ত যেকোনো প্রয়োজনে আমাদের বিশেষজ্ঞ টিম আপনার পাশে আছে।
            আমরা দ্রুত আপনার প্রশ্নের উত্তর দিতে প্রতিশ্রুতিবদ্ধ।
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {[
              {
                icon: <FaPhoneAlt />,
                label: "ফোন করুন",
                val: "+880 1234 567890",
                color: "bg-blue-500/10 text-blue-500",
              },
              {
                icon: <FaEnvelope />,
                label: "ইমেইল",
                val: "support@loanlink.com",
                color: "bg-emerald-500/10 text-emerald-500",
              },
              {
                icon: <FaMapMarkerAlt />,
                label: "অফিস",
                val: "সেক্টর ৭, উত্তরা, ঢাকা",
                color: "bg-purple-500/10 text-purple-500",
              },
            ].map((info, index) => (
              <div
                key={index}
                className="p-6 bg-base-100 rounded-3xl shadow-sm border border-base-300 flex items-center space-x-5 hover:shadow-md transition-shadow"
              >
                <div className={`p-4 ${info.color} rounded-2xl text-xl`}>
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{info.label}</h4>
                  <p className="text-sm opacity-60 font-medium">{info.val}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-2 bg-base-100 p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-base-300"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Name Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">আপনার নাম</span>
                </label>
                <input
                  {...register("name", { required: "নাম প্রদান করা আবশ্যিক" })}
                  className={`input input-bordered w-full rounded-xl bg-base-200 focus:input-primary transition-all ${
                    errors.name ? "input-error" : ""
                  }`}
                  placeholder="আপনার পূর্ণ নাম লিখুন"
                />
                {errors.name && (
                  <span className="text-error text-xs mt-1 font-medium">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Email Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">ইমেইল এড্রেস</span>
                </label>
                <input
                  {...register("email", {
                    required: "ইমেইল প্রয়োজন",
                    pattern: { value: /^\S+@\S+$/i, message: "সঠিক ইমেইল দিন" },
                  })}
                  className={`input input-bordered w-full rounded-xl bg-base-200 focus:input-primary transition-all ${
                    errors.email ? "input-error" : ""
                  }`}
                  placeholder="example@mail.com"
                />
                {errors.email && (
                  <span className="text-error text-xs mt-1 font-medium">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Subject Input */}
              <div className="md:col-span-2 form-control">
                <label className="label">
                  <span className="label-text font-bold">বিষয়</span>
                </label>
                <input
                  {...register("subject", { required: "বিষয় উল্লেখ করুন" })}
                  className={`input input-bordered w-full rounded-xl bg-base-200 focus:input-primary transition-all ${
                    errors.subject ? "input-error" : ""
                  }`}
                  placeholder="যেমন: লোন অনুমোদন বিষয়ক"
                />
                {errors.subject && (
                  <span className="text-error text-xs mt-1 font-medium">
                    {errors.subject.message}
                  </span>
                )}
              </div>

              {/* Message Input */}
              <div className="md:col-span-2 form-control">
                <label className="label">
                  <span className="label-text font-bold">আপনার মেসেজ</span>
                </label>
                <textarea
                  {...register("message", { required: "মেসেজ লিখুন" })}
                  rows="4"
                  className={`textarea textarea-bordered w-full rounded-xl bg-base-200 focus:textarea-primary transition-all h-32 ${
                    errors.message ? "textarea-error" : ""
                  }`}
                  placeholder="আপনার সমস্যা বা প্রশ্ন বিস্তারিত লিখুন..."
                ></textarea>
                {errors.message && (
                  <span className="text-error text-xs mt-1 font-medium">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="md:col-span-2 btn btn-primary btn-lg rounded-2xl w-full normal-case text-lg shadow-lg shadow-primary/20 flex items-center gap-3 mt-4"
              >
                <span>মেসেজ পাঠান</span>
                <FaPaperPlane className="text-sm" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
