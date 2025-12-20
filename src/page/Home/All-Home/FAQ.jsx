import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
    const [activeId, setActiveId] = useState(null);

  const faqs = [
    { id: 1, q: "লোন পাওয়ার জন্য কী কী ডকুমেন্টস প্রয়োজন?", a: "সাধারণত আপনার NID কার্ডের কপি, আয়ের উৎস এবং বর্তমান ঠিকানার প্রমাণপত্র প্রয়োজন হয়।" },
    { id: 2, q: "লোন এপ্রুভ হতে কত সময় লাগে?", a: "আবেদন করার পর আমাদের সিস্টেম ও অফিসাররা তথ্য যাচাই করে ২৪ থেকে ৪৮ ঘণ্টার মধ্যে ফলাফল জানিয়ে দেয়।" },
    { id: 3, q: "কিভাবে লোন পরিশোধ (EMI) করতে হয়?", a: "আপনি আপনার ড্যাশবোর্ড থেকে অনলাইন পেমেন্ট গেটওয়ে ব্যবহার করে কিস্তি পরিশোধ করতে পারবেন।" }
  ];
    return (
        <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-12">সচরাচর জিজ্ঞাসা (FAQ)</h2>
          
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
                  className="w-full flex justify-between items-center p-5 bg-slate-50 dark:bg-slate-800 text-left"
                >
                  <span className="font-semibold text-slate-800 dark:text-white">{faq.q}</span>
                  <FaChevronDown className={`transition-transform ${activeId === faq.id ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {activeId === faq.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-white dark:bg-slate-800 px-5 pb-5 text-slate-600 dark:text-slate-400"
                    >
                      <p className="pt-2 border-t border-slate-100 dark:border-slate-700">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default FAQ;