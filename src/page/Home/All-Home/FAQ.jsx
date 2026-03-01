import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const faqs = [
    {
      id: 1,
      q: "লোন পাওয়ার জন্য কী কী ডকুমেন্টস প্রয়োজন?",
      a: "সাধারণত আপনার NID কার্ডের কপি, আয়ের উৎস এবং বর্তমান ঠিকানার প্রমাণপত্র প্রয়োজন হয়।",
    },
    {
      id: 2,
      q: "লোন এপ্রুভ হতে কত সময় লাগে?",
      a: "আবেদন করার পর আমাদের সিস্টেম ও অফিসাররা তথ্য যাচাই করে ২৪ থেকে ৪৮ ঘণ্টার মধ্যে ফলাফল জানিয়ে দেয়।",
    },
    {
      id: 3,
      q: "কিভাবে লোন পরিশোধ (EMI) করতে হয়?",
      a: "আপনি আপনার ড্যাশবোর্ড থেকে অনলাইন পেমেন্ট গেটওয়ে ব্যবহার করে কিস্তি পরিশোধ করতে পারবেন।",
    },
  ];

  return (
    <section className="py-20 bg-base-100 text-base-content transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          সচরাচর জিজ্ঞাসা (FAQ)
        </h2>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-base-300 rounded-2xl overflow-hidden bg-base-200 transition-all shadow-sm"
            >
              {/* FAQ Question (Button) */}
              <button
                onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
                className="w-full flex justify-between items-center p-5 text-left transition-colors hover:bg-base-300/50"
              >
                <span className="font-bold text-lg md:text-xl pr-4 leading-tight">
                  {faq.q}
                </span>
                <div
                  className={`p-2 rounded-full bg-base-100 shadow-inner transition-transform duration-300 ${
                    activeId === faq.id
                      ? "rotate-180 text-primary"
                      : "text-base-content/50"
                  }`}
                >
                  <FaChevronDown />
                </div>
              </button>

              {/* FAQ Answer (Animated) */}
              <AnimatePresence>
                {activeId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-5 pb-6 text-base-content/70">
                      <div className="pt-4 border-t border-base-300/50 leading-relaxed italic">
                        {faq.a}
                      </div>
                    </div>
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
