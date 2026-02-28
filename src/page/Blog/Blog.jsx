import React from "react";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaClock,
  FaUserTie,
  FaShareAlt,
  FaBookmark,
} from "react-icons/fa";
import { Link } from "react-router";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "২০২৬ সালে মাইক্রোলোন পাওয়ার সহজ উপায়",
      description:
        "বর্তমান অর্থনৈতিক পরিস্থিতিতে ক্ষুদ্র ঋণের আবেদন প্রক্রিয়া এখন আরও সহজ। জানুন আপনার প্রয়োজনীয় ডকুমেন্টস এবং প্রসেসিং সময় সম্পর্কে।",
      image:
        "https://i.ibb.co.com/hF2XQ2VC/immo-wegmann-4-EId-Xvmb1-V4-unsplash.jpg",
      date: "২৬ ফেব্রুয়ারি, ২০২৬",
      readTime: "৬ মিনিট",
      category: "Finance Guide",
      author: "সুমন চক্রবর্তী",
      authorImg: "https://i.pravatar.cc/150?u=1",
    },
    {
      id: 2,
      title: "আপনার লোন কেন রিজেক্ট হতে পারে?",
      description:
        "অনেক সময় ছোট ভুলের কারণে লোন অ্যাপ্লিকেশন বাতিল হয়ে যায়। এই ব্লগে আমরা আলোচনা করেছি কিভাবে রিজেকশন এড়িয়ে সাকসেসফুলি লোন পাওয়া যায়।",
      image:
        "https://i.ibb.co.com/t1BBxBf/muhammad-hazim-muhammuddin-EMRRyq-C6i-FQ-unsplash.jpg",
      date: "২৪ ফেব্রুয়ারি, ২০২৬",
      readTime: "৮ মিনিট",
      category: "Education",
      author: "আনিস আহমেদ",
      authorImg: "https://i.pravatar.cc/150?u=2",
    },
    {
      id: 3,
      title: "ডিজিটাল ব্যাংকিং এর নতুন দিগন্ত",
      description:
        "আর্থিক লেনদেন এখন হাতের মুঠোয়। ডিজিটাল প্ল্যাটফর্ম ব্যবহার করে কিভাবে লোন লিঙ্ক আপনার কাজকে সহজ করে দিচ্ছে তার বিস্তারিত।",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
      date: "২২ ফেব্রুয়ারি, ২০২৬",
      readTime: "৫ মিনিট",
      category: "Technology",
      author: "রুবাইয়াত সারা",
      authorImg: "https://i.pravatar.cc/150?u=3",
    },
    {
      id: 4,
      title: "স্মার্ট ইনভেস্টমেন্ট: লোনের টাকা সঠিক ব্যবহার",
      description:
        "লোন নেওয়ার পর তা সঠিক জায়গায় ইনভেস্ট করা একটি আর্ট। আপনার ব্যবসার প্রবৃদ্ধি নিশ্চিত করতে কার্যকরী কিছু টিপস।",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      date: "২০ ফেব্রুয়ারি, ২০২৬",
      readTime: "১০ মিনিট",
      category: "Investment",
      author: "মাসুম বিল্লাহ",
      authorImg: "https://i.pravatar.cc/150?u=4",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Featured Header Section */}
      <div className="relative h-[400px] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover"
            alt="Background"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <span className="bg-blue-600 text-white px-4 py-1 rounded-sm text-xs font-bold uppercase tracking-widest mb-4 inline-block">
              Insight & Analysis
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              আর্থিক জ্ঞানের নতুন <br /> সীমানা অন্বেষণ করুন
            </h1>
            <p className="text-gray-300 text-lg md:text-xl border-l-4 border-blue-600 pl-6 italic">
              "সঠিক তথ্যই পারে আপনার আর্থিক সিদ্ধান্তকে বদলে দিতে।"
            </p>
          </motion.div>
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Feed */}
          <div className="lg:w-3/4 space-y-20">
            {blogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8 items-center group"
              >
                <div className="w-full md:w-2/5 overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="w-full md:w-3/5">
                  <div className="flex items-center gap-3 mb-3 text-blue-600 font-bold text-xs uppercase tracking-tighter">
                    <span>{blog.category}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-400 flex items-center gap-1 font-normal lowercase italic">
                      <FaClock /> {blog.readTime} read
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-2">
                    {blog.description}
                  </p>

                  {/* Author Meta */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={blog.authorImg}
                        className="w-10 h-10 rounded-full border-2 border-blue-100"
                        alt={blog.author}
                      />
                      <div>
                        <p className="text-sm font-bold text-slate-800 leading-none">
                          {blog.author}
                        </p>
                        <p className="text-[10px] text-gray-400 uppercase mt-1">
                          {blog.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 text-gray-400">
                      <FaBookmark className="hover:text-blue-600 cursor-pointer transition-colors" />
                      <FaShareAlt className="hover:text-blue-600 cursor-pointer transition-colors" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* 3. Sidebar (Trending Topics) */}
          <div className="lg:w-1/4">
            <div className="sticky top-28 space-y-12">
              <div>
                <h3 className="text-xs font-black uppercase tracking-[3px] text-slate-400 mb-6 border-b pb-2">
                  জনপ্রিয় টপিক
                </h3>
                <ul className="space-y-4">
                  {[
                    "#MicroFinance",
                    "#StartupLoan",
                    "#DebtFree",
                    "#InvestmentTip",
                    "#FinTech",
                  ].map((tag) => (
                    <li
                      key={tag}
                      className="text-slate-800 font-bold hover:text-blue-600 cursor-pointer transition-colors flex justify-between items-center"
                    >
                      <span>{tag}</span>
                      <span className="text-[10px] bg-slate-100 px-2 py-1 rounded">
                        24+
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-2">
                  পরামর্শ প্রয়োজন?
                </h4>
                <p className="text-sm text-gray-500 mb-4">
                  আমাদের অভিজ্ঞ টিমের সাথে কথা বলুন আপনার আর্থিক পরিকল্পনার
                  জন্য।
                </p>
                <Link to="/contact">
                  {" "}
                  <button className="text-blue-600 font-bold text-xs flex items-center gap-2 group">
                    কন্টাক্ট করুন{" "}
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
