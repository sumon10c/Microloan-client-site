import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import { motion } from "framer-motion";

const CardDetails = () => {
  const loan = useLoaderData();
  const navigate = useNavigate();

  const {
    _id,
    image,
    title,
    description,
    max_loan_amount,
    interest_rate,
    category,
    duration,
  } = loan;

  return (
    <div className="bg-[#F9FAFB] min-h-screen py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Navigation & Category */}
        <div className="flex justify-between items-center mb-10">
          <button 
            onClick={() => navigate(-1)} 
            className="text-sm font-bold text-slate-400 hover:text-primary transition-colors flex items-center gap-2"
          >
            <span>←</span> ফিরে যান
          </button>
          <span className="px-4 py-1.5 bg-blue-50 text-primary text-[11px] font-black uppercase tracking-widest rounded-full border border-blue-100">
            {category}
          </span>
        </div>

        {/* Main Section */}
        <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            
            {/* Image Side */}
            <div className="lg:w-1/2 p-4 md:p-8">
              <div className="rounded-[2rem] overflow-hidden h-full min-h-[350px] md:min-h-[450px]">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] mb-6">
                  {title}
                </h1>
                <p className="text-slate-500 text-lg leading-relaxed mb-10">
                  {description}
                </p>

                {/* Key Information Grid */}
                <div className="grid grid-cols-2 gap-y-10 mb-12 border-t border-slate-50 pt-10">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">বার্ষিক সুদের হার</p>
                    <p className="text-3xl font-black text-blue-600">{interest_rate}%</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">মেয়াদকাল</p>
                    <p className="text-3xl font-black text-slate-800">{duration}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">সর্বোচ্চ লোন লিমিট</p>
                    <p className="text-4xl font-black text-slate-900">
                      ৳{max_loan_amount?.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to={`/loanApplication/${_id}`} className="flex-1">
                    <button className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-5 rounded-2xl transition-all shadow-lg shadow-blue-100 active:scale-95">
                      এখনই আবেদন করুন
                    </button>
                  </Link>
                </div>

                <div className="mt-8 flex items-center gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Secured & Encrypted Transaction
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Requirements Section (Nemesis Content Upgrade) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <h4 className="font-bold text-slate-800 mb-3">যোগ্যতা</h4>
            <p className="text-sm text-slate-500 leading-relaxed">আবেদনকারীর বয়স ১৮-৬০ বছরের মধ্যে হতে হবে এবং নিয়মিত আয়ের উৎস থাকতে হবে।</p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <h4 className="font-bold text-slate-800 mb-3">প্রয়োজনীয় তথ্য</h4>
            <p className="text-sm text-slate-500 leading-relaxed">জাতীয় পরিচয়পত্র, আয়ের প্রমাণপত্র এবং ব্যাংক স্টেটমেন্ট স্ক্যান কপি সাথে রাখুন।</p>
          </div>
          <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-sm flex flex-col justify-between">
            <h4 className="font-bold mb-2">সহায়তা প্রয়োজন?</h4>
            <p className="text-sm text-slate-400">আমাদের কাস্টমার কেয়ার প্রতিনিধিরা আপনাকে গাইড করতে প্রস্তুত।</p>
            <Link to="/contact" className="text-blue-400 text-xs font-bold mt-4 underline underline-offset-4 tracking-widest">কন্টাক্ট করুন</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;