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
        "LoanLink-এর মাধ্যমে আমি খুব দ্রুত লোন পেয়েছি। তাদের প্রসেসিং অনেক স্বচ্ছ এবং সহজ। আমার ব্যবসার প্রসারে এটি অনেক সাহায্য করেছে।",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=rahul",
    },
    {
      id: 2,
      name: "জান্নাতুল ফেরদৌস",
      role: "ফ্রিল্যান্সার",
      comment:
        "একজন ফ্রিল্যান্সার হিসেবে লোন পাওয়া অনেক কঠিন ছিল, কিন্তু লোনলিঙ্ক আমার National ID ভেরিফিকেশন করে দ্রুত লোন এপ্রুভ করেছে।",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=jannat",
    },
    {
      id: 3,
      name: "আরিফুর রহমান",
      role: "দোকানদার",
      comment:
        "এদের EMI সিস্টেমটা খুব দারুণ। কিস্তি পরিশোধ করা খুব সহজ এবং ড্যাশবোর্ড থেকে সবকিছু ট্র্যাক করা যায়।",
      rating: 4,
      image: "https://i.pravatar.cc/150?u=arif",
    },
  ];

  return (
    <section className="py-20 bg-base-200 text-base-content transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold"
          >
            আমাদের গ্রাহকদের মতামত
          </motion.h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mt-4"></div>
          <p className="opacity-70 mt-4 italic">
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
          autoplay={{ delay: 3500 }}
          className="pb-16"
        >
          {feedbacks.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-base-100 p-8 rounded-[2.5rem] border border-base-300 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group h-full">
                {/* Decorative Quote Icon */}
                <FaQuoteLeft className="absolute -top-4 -right-4 text-7xl text-primary/5 group-hover:text-primary/10 transition-colors" />

                {/* Rating Stars */}
                <div className="flex text-warning mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < item.rating ? "text-warning" : "text-base-300"
                      }
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="opacity-80 mb-8 italic leading-relaxed min-h-[80px]">
                  "{item.comment}"
                </p>

                {/* User Info */}
                <div className="flex items-center space-x-4 border-t border-base-300 pt-6">
                  <div className="avatar">
                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={item.image} alt={item.name} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-xs opacity-60 font-medium uppercase tracking-wider mt-1">
                      {item.role}
                    </p>
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
