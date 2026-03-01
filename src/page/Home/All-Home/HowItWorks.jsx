import React from "react";
import { motion } from "framer-motion";
import { FaUserPlus, FaSearchDollar, FaCheckCircle } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "অ্যাকাউন্ট তৈরি করুন",
      description:
        "খুব সহজেই আপনার নাম ও ইমেইল দিয়ে রেজিস্ট্রেশন করুন এবং আপনার প্রোফাইলটি আপডেট করুন।",
      icon: <FaUserPlus />,
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "লোন সিলেক্ট করুন",
      description:
        "আমাদের বিভিন্ন লোন ক্যাটাগরি থেকে আপনার প্রয়োজন অনুযায়ী সেরা লোনটি বেছে নিন।",
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
    <section className="py-20 bg-base-100 text-base-content transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            কিভাবে লোন পাবেন?
          </motion.h2>
          <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="opacity-70 mt-4 max-w-md mx-auto">
            মাত্র তিনটি সহজ ধাপে আপনার কাঙ্ক্ষিত লোনটি বুঝে নিন
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative p-8 bg-base-200 rounded-[2.5rem] border border-base-300 text-center hover:shadow-2xl hover:shadow-primary/10 transition-all group"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-base-100 text-primary border-2 border-primary font-black flex items-center justify-center rounded-full shadow-lg">
                {step.id}
              </div>

              {/* Icon Container */}
              <div
                className={`w-20 h-20 ${step.color} text-white rounded-3xl flex items-center justify-center text-4xl mx-auto mb-8 shadow-lg transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}
              >
                {step.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="opacity-70 leading-relaxed font-medium">
                {step.description}
              </p>

              {/* Dashed Connector Line (Only for Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 border-t-2 border-dashed border-base-300 z-0 opacity-50"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
