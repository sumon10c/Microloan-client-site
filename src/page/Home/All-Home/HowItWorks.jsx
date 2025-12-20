import React from "react";
import { motion } from "framer-motion";
import { FaUserPlus, FaSearchDollar, FaCheckCircle } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "অ্যাকাউন্ট তৈরি করুন",
      description:
        "খুব সহজেই আপনার নাম ও ইমেইল দিয়ে রেজিস্ট্রেশন করুন এবং আপনার প্রোফাইলটি আপডেট করুন।",
      icon: <FaUserPlus />,
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "লোন সিলেক্ট করুন",
      description:
        "আমাদের বিভিন্ন লোন ক্যাটাগরি থেকে আপনার প্রয়োজন অনুযায়ী সেরা লোনটি বেছে নিন।",
      icon: <FaSearchDollar />,
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "দ্রুত অনুমোদন পান",
      description:
        "আবেদন করার পর আমাদের ম্যানেজাররা আপনার তথ্য যাচাই করবে এবং দ্রুত লোন এপ্রুভ করবে।",
      icon: <FaCheckCircle />,
      color: "bg-purple-500",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4"
          >
            কিভাবে লোন পাবেন?
          </motion.h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-400 mt-4">
            মাত্র তিনটি সহজ ধাপে আপনার কাঙ্ক্ষিত লোনটি বুঝে নিন
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative p-8 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 text-center hover:shadow-xl transition-shadow group"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-white dark:bg-slate-700 text-blue-600 border-2 border-blue-600 font-bold flex items-center justify-center rounded-full shadow-md">
                {step.id}
              </div>

              <div
                className={`w-16 h-16 ${step.color} text-white rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 transform group-hover:rotate-6 transition-transform`}
              >
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
                {step.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-5 w-10 border-t-2 border-dashed border-slate-300 dark:border-slate-600 z-0"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
