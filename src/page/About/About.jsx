import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaHandshake, FaShieldAlt, FaUsers } from "react-icons/fa";

const About = () => {
  const stats = [
    {
      id: 1,
      label: "Active Borrowers",
      value: "10K+",
      icon: <FaUsers className="text-blue-500" />,
    },
    {
      id: 2,
      label: "Loans Approved",
      value: "25M+",
      icon: <FaHandshake className="text-green-500" />,
    },
    {
      id: 3,
      label: "Secure Transactions",
      value: "100%",
      icon: <FaShieldAlt className="text-purple-500" />,
    },
    {
      id: 4,
      label: "Success Rate",
      value: "98%",
      icon: <FaChartLine className="text-orange-500" />,
    },
  ];
  return (
    <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6"
          >
            Empowering Dreams with{" "}
            <span className="text-blue-600">LoanLink</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            আমরা বিশ্বাস করি আর্থিক সহযোগিতা মানুষের জীবন বদলে দিতে পারে।
            LoanLink একটি আধুনিক মাইক্রোলোন প্ল্যাটফর্ম যা ক্ষুদ্র উদ্যোক্তা এবং
            সাধারণ মানুষের জন্য ঋণের প্রক্রিয়াকে করেছে সহজ, স্বচ্ছ এবং দ্রুত।
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm text-center border border-slate-100 dark:border-slate-700"
              >
                <div className="text-3xl flex justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                  {stat.value}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
              আমাদের লক্ষ্য ও উদ্দেশ্য
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              LoanLink এর মূল লক্ষ্য হলো মধ্যস্থতাকারীদের ঝামেলা কমিয়ে সরাসরি
              লোন অফিসার এবং আবেদনকারীর মধ্যে একটি শক্তিশালী বন্ধন তৈরি করা।
              আমরা চাই প্রযুক্তির মাধ্যমে আর্থিক সেবা সবার হাতের নাগালে পৌঁছে
              দিতে।
            </p>
            <ul className="space-y-4">
              {[
                "স্বল্প সুদে লোন সুবিধা",
                "দ্রুত অনুমোদন প্রক্রিয়া",
                "সম্পূর্ণ পেপারলেস অভিজ্ঞতা",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center space-x-3 text-slate-700 dark:text-slate-300"
                >
                  <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-blue-600 rounded-3xl h-64 md:h-96 overflow-hidden shadow-2xl flex items-center justify-center text-white text-4xl font-bold"
          >
            <img
              src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=1000"
              alt="Mission"
              className="w-full h-full object-cover opacity-80"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
