import React from "react";

const Milestones = () => {
  const achievements = [
    { id: 1, count: "৫০,০০০+", label: "সন্তুষ্ট গ্রাহক", icon: "👨‍👩‍👧‍👦" },
    { id: 2, count: "১০০ কোটি+", label: "লোন বিতরণ", icon: "💰" },
    { id: 3, count: "৯৮%", label: "সফলতা হার", icon: "📈" },
    { id: 4, count: "৫০+", label: "ব্যাংকিং পার্টনার", icon: "🏦" },
  ];

  return (
    <section className="py-20 bg-base-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            আমাদের পথচলা ও সাফল্য
          </h2>
          <p className="opacity-70 max-w-2xl mx-auto">
            বিগত কয়েক বছর ধরে আমরা মানুষের স্বপ্ন পূরণে বিশ্বস্ততার সাথে আর্থিক
            সেবা প্রদান করে আসছি।
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="bg-base-100 p-8 rounded-2xl shadow-lg border border-base-300 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <div className="text-3xl font-black text-primary mb-2">
                {item.count}
              </div>
              <div className="text-sm font-medium opacity-80">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
