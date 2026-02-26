import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Banner = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000",
      tag: "Verified Services",
      title: "সহজ মাইক্রোলোন, উজ্জ্বল ভবিষ্যৎ",
      description:
        "LoanLink এর সাথে আপনার আর্থিক প্রয়োজন মেটান দ্রুত এবং স্বচ্ছ প্রক্রিয়ায়। আমরা আপনার আস্থার সঙ্গী।",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=2000",
      tag: "Business Support",
      title: "ক্ষুদ্র উদ্যোক্তাদের বিশ্বস্ত সহযোগী",
      description:
        "আপনার ব্যবসার পরিধি বাড়াতে আমরা দিচ্ছি নমনীয় কিস্তিতে ঋণের সুবিধা।",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?auto=format&fit=crop&q=80&w=2000",
      tag: "Financial Growth",
      title: "আপনার জমানো স্বপ্ন সত্যি হোক",
      description:
        "স্বল্প সুদে এবং সহজ শর্তে ব্যক্তিগত লোন নিয়ে আপনার জীবনের বিশেষ মুহূর্তগুলো সাজিয়ে নিন আমাদের সাথে।",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
      tag: "Smart Investment",
      title: "স্মার্ট ফিন্যান্সিং এখন আপনার হাতের মুঠোয়",
      description:
        "LoanLink এর ডিজিটাল প্ল্যাটফর্মে দ্রুত আবেদন করুন এবং ২৪ ঘণ্টার মধ্যে আপনার ঋণের অনুমোদন বুঝে নিন।",
    },
  ];

  return (
    <section className="h-[420px] md:h-[520px] w-full relative overflow-hidden bg-slate-900">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect={"fade"}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent flex items-center">
                <div className="container mx-auto px-6 md:px-12">
                  <div className="max-w-2xl text-left">
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-md"
                    >
                      {slide.tag}
                    </motion.span>

                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight"
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      className="text-base md:text-lg text-slate-300 mb-8 max-w-lg leading-relaxed"
                    >
                      {slide.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex flex-wrap gap-3"
                    >
                      <Link to="/all-loans">
                        <button className="px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-lg active:scale-95">
                          লোন খুঁজুন
                        </button>
                      </Link>
                      <Link to="/about">
                        <button className="px-7 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg backdrop-blur-md border border-white/20 transition-all active:scale-95">
                          আরও জানুন
                        </button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #cbd5e1 !important;
          opacity: 0.6;
        }
        .swiper-pagination-bullet-active {
          background: #3b82f6 !important;
          opacity: 1;
          width: 24px !important;
          border-radius: 4px !important;
        }
      `}</style>
    </section>
  );
};

export default Banner;
