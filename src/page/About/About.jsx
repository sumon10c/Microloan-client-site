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
    <div className="bg-base-100 text-base-content transition-colors duration-300 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-black mb-8 leading-tight"
          >
            Empowering Dreams with{" "}
            <span className="text-primary italic">LoanLink</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg opacity-70 max-w-2xl mx-auto leading-relaxed"
          >
            আমরা বিশ্বাস করি আর্থিক সহযোগিতা মানুষের জীবন বদলে দিতে পারে।
            LoanLink একটি আধুনিক মাইক্রোলোন প্ল্যাটফর্ম যা ক্ষুদ্র উদ্যোক্তা এবং
            সাধারণ মানুষের জন্য ঋণের প্রক্রিয়াকে করেছে সহজ, স্বচ্ছ এবং দ্রুত।
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                whileHover={{ y: -10 }}
                className="p-8 bg-base-100 rounded-3xl shadow-sm text-center border border-base-300 transition-all duration-300"
              >
                <div className="text-4xl flex justify-center mb-5">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-black mb-2">{stat.value}</h3>
                <p className="opacity-60 font-medium uppercase text-xs tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-black">
              আমাদের লক্ষ্য ও উদ্দেশ্য
            </h2>
            <p className="opacity-70 leading-loose text-lg">
              LoanLink এর মূল লক্ষ্য হলো মধ্যস্থতাকারীদের ঝামেলা কমিয়ে সরাসরি
              লোন অফিসার এবং আবেদনকারীর মধ্যে একটি শক্তিশালী বন্ধন তৈরি করা।
              আমরা চাই প্রযুক্তির মাধ্যমে আর্থিক সেবা সবার হাতের নাগালে পৌঁছে
              দিতে।
            </p>
            <ul className="space-y-5">
              {[
                "স্বল্প সুদে লোন সুবিধা",
                "দ্রুত অনুমোদন প্রক্রিয়া",
                "সম্পূর্ণ পেপারলেস অভিজ্ঞতা",
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-4 font-bold">
                  <span className="h-3 w-3 bg-primary rounded-full shadow-[0_0_10px_var(--color-primary)]"></span>
                  <span className="opacity-90">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-2xl group-hover:bg-primary/30 transition-all"></div>
            <div className="relative rounded-[2.5rem] h-80 md:h-[450px] overflow-hidden shadow-2xl border-4 border-base-100">
              <img
                src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=1000"
                alt="Mission"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
