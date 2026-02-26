import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaArrowRight, FaSearch, FaEnvelope } from 'react-icons/fa';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const blogs = [
    {
      id: 1,
      title: "কিভাবে সঠিক লোন নির্বাচন করবেন?",
      description: "লোন নেওয়ার আগে যে বিষয়গুলো খেয়াল রাখা জরুরি, তা নিয়ে বিস্তারিত আলোচনা। আপনার আর্থিক সামর্থ্য বুঝে লোন নিন। এটি আপনার ক্রেডিট স্কোর উন্নত করতেও সাহায্য করবে।",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
      date: "২৫ ফেব্রুয়ারি, ২০২৬",
      readTime: "৫ মিনিট",
      category: "Finance Tips",
      author: "সুমন রহমান"
    },
    {
      id: 2,
      title: "ক্ষুদ্র ঋণের মাধ্যমে ব্যবসার পরিধি বাড়ানোর উপায়",
      description: "ক্ষুদ্র উদ্যোক্তারা কিভাবে লোন ব্যবহার করে তাদের ব্যবসাকে বড় করতে পারেন, তার একটি পূর্ণাঙ্গ গাইডলাইন। সঠিক ইনভেন্টরি ম্যানেজমেন্ট এবং মার্কেটিং-এ বিনিয়োগ করার উপায় জানুন।",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      date: "২০ ফেব্রুয়ারি, ২০২৬",
      readTime: "৭ মিনিট",
      category: "Business",
      author: "আনিস আহমেদ"
    },
    {
      id: 3,
      title: "অনলাইন লোনের নিরাপত্তা নিশ্চিত করবেন যেভাবে",
      description: "ডিজিটাল যুগে অনলাইন লোন নেওয়ার সময় সাইবার নিরাপত্তা এবং আপনার তথ্যের সুরক্ষা নিশ্চিত করা অত্যন্ত গুরুত্বপূর্ণ। টু-ফ্যাক্টর অথেন্টিকেশন এবং এনক্রিপশন সম্পর্কে বিস্তারিত পড়ুন।",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
      date: "১৫ ফেব্রুয়ারি, ২০২৬",
      readTime: "৪ মিনিট",
      category: "Security",
      author: "রুবাইয়াত সারা"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* 1. Hero & Search Section */}
      <div className="bg-primary pt-20 pb-32">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            আর্থিক সফলতার ব্লগ
          </motion.h1>
          <p className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg">
            লোন লিঙ্কের মাধ্যমে আপনার আর্থিক জ্ঞান বৃদ্ধি করুন এবং সঠিক সময়ে সঠিক সিদ্ধান্ত নিন।
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <input 
              type="text" 
              placeholder="ব্লগ সার্চ করুন..."
              className="w-full py-4 px-6 rounded-full shadow-2xl focus:outline-none text-slate-700"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded-full hover:bg-blue-600 transition-all">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Featured Stats (Nemesis Upgrade) */}
      <div className="container mx-auto px-6 -mt-16 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "ব্লগ পোস্ট", count: "৫০+" },
            { label: "সাপ্তাহিক পাঠক", count: "৫০০০+" },
            { label: "এক্সপার্ট লেখক", count: "১২ জন" },
            { label: "পজিটিভ রিভিউ", count: "৯৮%" }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 text-center">
              <h3 className="text-2xl font-bold text-primary">{stat.count}</h3>
              <p className="text-slate-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Main Content Grid */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Blog Posts */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 h-fit">
            {blogs.map((blog) => (
              <motion.div
                key={blog.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-duration-700" />
                  <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md text-primary text-[10px] font-black px-3 py-1 rounded-lg uppercase">
                    {blog.category}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-slate-800 mb-3 leading-snug group-hover:text-primary transition-colors cursor-pointer">
                    {blog.title}
                  </h2>
                  <p className="text-slate-500 text-sm line-clamp-3 mb-6 leading-relaxed">
                    {blog.description}
                  </p>
                  <div className="flex items-center justify-between border-t border-slate-50 pt-4">
                    <span className="text-xs font-bold text-slate-400">লিখেছেন: {blog.author}</span>
                    <button className="text-primary font-black text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                      পড়ুন <FaArrowRight />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            {/* Newsletter */}
            <div className="bg-blue-600 rounded-3xl p-8 text-white relative overflow-hidden">
              <FaEnvelope className="absolute -bottom-4 -right-4 text-8xl opacity-10 rotate-12" />
              <h3 className="text-2xl font-bold mb-4">নিউজলেটার সাবস্ক্রাইব করুন</h3>
              <p className="text-blue-100 text-sm mb-6">নতুন ব্লগের আপডেট সরাসরি আপনার ইনবক্সে পেতে সাবস্ক্রাইব করে রাখুন।</p>
              <input type="email" placeholder="আপনার ইমেইল..." className="w-full p-3 rounded-xl bg-white/20 border border-white/30 placeholder:text-blue-100 mb-4 focus:outline-none" />
              <button className="w-full py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg">সাবস্ক্রাইব করুন</button>
            </div>

            {/* Popular Topics */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold mb-6 border-b pb-2">জনপ্রিয় ক্যাটাগরি</h3>
              <div className="flex flex-wrap gap-2">
                {["ব্যবসা", "পার্সোনাল লোন", "নিরাপত্তা", "আর্থিক টিপস", "ব্যাংকিং"].map(cat => (
                  <span key={cat} className="px-4 py-2 bg-slate-100 text-slate-600 text-xs rounded-full hover:bg-primary hover:text-white cursor-pointer transition-all">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Blog;