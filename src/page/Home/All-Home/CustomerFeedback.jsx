import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const CustomerFeedback = () => {
  const feedbacks = [
    {
      id: 1,
      name: "রাহুল আহমেদ",
      role: "ক্ষুদ্র উদ্যোক্তা",
      comment:
        "LoanLink-এর মাধ্যমে আমি খুব দ্রুত লোন পেয়েছি। তাদের প্রসেসিং অনেক স্বচ্ছ এবং সহজ। আমার ব্যবসার প্রসারে এটি অনেক সাহায্য করেছে।",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=rahul",
    },
    {
      id: 2,
      name: "জান্নাতুল ফেরদৌস",
      role: "ফ্রিল্যান্সার",
      comment:
        "একজন ফ্রিল্যান্সার হিসেবে লোন পাওয়া অনেক কঠিন ছিল, কিন্তু লোনলিঙ্ক আমার National ID ভেরিফিকেশন করে দ্রুত লোন এপ্রুভ করেছে।",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=jannat",
    },
    {
      id: 3,
      name: "আরিফুর রহমান",
      role: "দোকানদার",
      comment:
        "এদের EMI সিস্টেমটা খুব দারুণ। কিস্তি পরিশোধ করা খুব সহজ এবং ড্যাশবোর্ড থেকে সবকিছু ট্র্যাক করা যায়।",
      rating: 4,
      image: "https://i.pravatar.cc/150?u=arif",
    },
  ];
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white"
          >
            আমাদের গ্রাহকদের মতামত
          </motion.h2>
          <p className="text-slate-500 mt-3 italic">
            হাজারো সন্তুষ্ট গ্রাহক আমাদের সাথে আছেন
          </p>
        </div>

        
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="pb-12"
        >
          {feedbacks.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
                <FaQuoteLeft className="absolute -top-2 -right-2 text-6xl text-blue-500/10" />

                <div className="flex text-yellow-400 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-6 italic">
                  "{item.comment}"
                </p>

                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full border-2 border-blue-500"
                  />
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CustomerFeedback;
