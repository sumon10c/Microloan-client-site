import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router";

const Banner = () => {
    return (
        <div 
        className="relative h-[600px] md:h-[700px] bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000')" }} 
      >
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70 flex items-center justify-center text-center">
          <div className="container mx-auto px-6">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg"
            >
              আপনার স্বপ্ন পূরণের যাত্রা <br /> শুরু হোক LoanLink এর সাথে
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mb-10 drop-shadow"
            >
              দ্রুত এবং সহজ প্রক্রিয়ায় মাইক্রোলোন পান। আজই আপনার আবেদন জমা দিন এবং আপনার প্রয়োজন মেটান।
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 100 }}
            >
              <Link to="/all-loans"> 
                <button className="bg-primary hover:bg-blue-500 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  লোন খুঁজুন
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    );
};

export default Banner;