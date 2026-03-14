import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: "⚡",
      title: "দ্রুত অনুমোদন",
      description:
        "আমাদের ডিজিটাল প্রক্রিয়ার মাধ্যমে মাত্র ২৪ ঘণ্টার মধ্যে আপনার লোন অনুমোদন পান।",
    },
    {
      id: 2,
      icon: "🛡️",
      title: "নিরাপদ ও গোপনীয়",
      description:
        "আপনার ব্যক্তিগত তথ্যের সুরক্ষায় আমরা সর্বোচ্চ স্তরের এনক্রিপশন ব্যবহার করি।",
    },
    {
      id: 3,
      icon: "📉",
      title: "স্বল্প সুদের হার",
      description:
        "সহজ কিস্তি এবং বাজারের সবচেয়ে প্রতিযোগিতামূলক সুদের হারে লোন সুবিধা।",
    },
    {
      id: 4,
      icon: "🤝",
      title: "২৪/৭ সহায়তা",
      description:
        "যেকোনো প্রয়োজনে আমাদের অভিজ্ঞ টিম আপনার সেবায় সবসময় নিয়োজিত।",
    },
   
  ];

  return (
    <section className="py-20 bg-base-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-primary tracking-wide uppercase">
            কেন আমাদের বেছে নেবেন
          </h2>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-base-content sm:text-5xl">
            আপনার ভবিষ্যতের জন্য সঠিক লোন
          </p>
          <div className="mt-4 max-w-2xl mx-auto h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-base-300"
            >
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4 bg-base-200 w-20 h-20 flex items-center justify-center rounded-full shadow-inner">
                  {feature.icon}
                </div>
                <h3 className="card-title text-xl font-bold text-base-content italic">
                  {feature.title}
                </h3>
                <p className="text-sm opacity-70 mt-2 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
