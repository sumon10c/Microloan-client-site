import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

const Error = () => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center px-6">
      <div className="text-center">
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="flex justify-center mb-8"
        >
          <div className="p-6 bg-red-100 dark:bg-red-900/20 rounded-full">
            <FaExclamationTriangle className="text-red-500 text-6xl md:text-8xl" />
          </div>
        </motion.div>

        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-7xl md:text-9xl font-black text-slate-300 dark:text-slate-800"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mt-4 mb-6"
        >
          দুঃখিত! পেজটি পাওয়া যায়নি
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-10"
        >
          আপনি যে লিঙ্কটি খুঁজছেন তা সম্ভবত সরিয়ে ফেলা হয়েছে অথবা আপনি ভুল ইউআরএল টাইপ করেছেন।
        </motion.p>

      
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-blue-200 dark:shadow-none transition-all transform hover:scale-105"
          >
            <FaHome />
            <span>হোম পেজে ফিরে যান</span>
          </Link>
        </motion.div>
      </div>
    </div>
    );
};

export default Error;