import React from "react";

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "ব্যক্তিগত লোন",
      desc: "আপনার জরুরি প্রয়োজনে সহজ শর্তে পার্সোনাল লোন।",
      icon: "👤",
    },
    {
      id: 2,
      title: "ব্যবসা লোন",
      desc: "ক্ষুদ্র ও মাঝারি ব্যবসার প্রসারে বিশেষ লোন সুবিধা।",
      icon: "💼",
    },
    {
      id: 3,
      title: "শিক্ষা লোন",
      desc: "উচ্চশিক্ষার স্বপ্ন পূরণে শিক্ষার্থীদের জন্য বিশেষ লোন।",
      icon: "🎓",
    },
    {
        id: 4,
        icon: "🏥",
        title: "জরুরি চিকিৎসা সহায়তা",
        description:
          "যেকোনো মেডিকেল ইমার্জেন্সি বা চিকিৎসার প্রয়োজনে আমাদের দ্রুত লোন সুবিধা আপনার সেবায় নিয়োজিত।",
      },
      {
        id: 5,
        title: "কৃষি লোন",
        desc: "কৃষকদের চাষাবাদ ও কৃষি যন্ত্রপাতি ক্রয়ের জন্য বিশেষ আর্থিক সহায়তা।",
        icon: "🚜",
      },
      {
        id: 6,
        title: "গৃহ নির্মাণ লোন",
        desc: "আপনার স্বপ্নের বাড়ি তৈরি বা সংস্কারের জন্য সহজ কিস্তিতে দীর্ঘমেয়াদী লোন।",
        icon: "🏠",
      }
  ];

  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">আমাদের সেবা সমূহ</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.id}
              className="p-8 border border-base-300 rounded-2xl hover:border-primary transition-all"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="opacity-70 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
