import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 relative">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Mission */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-white tracking-tighter">
              Loan<span className="text-blue-500">Link</span>
            </h2>
            <p className="text-sm leading-relaxed">
              স্বচ্ছ, দ্রুত এবং নিরাপদ মাইক্রোলোন সমাধানের মাধ্যমে ক্ষুদ্র উদ্যোক্তা এবং ব্যক্তিদের আর্থিক ক্ষমতায়ন নিশ্চিত করাই আমাদের লক্ষ্য।
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebook />, link: "#", color: "hover:bg-blue-600" },
                { icon: <FaXTwitter />, link: "#", color: "hover:bg-slate-700" },
                { icon: <FaLinkedin />, link: "#", color: "hover:bg-blue-700" },
                { icon: <FaGithub />, link: "#", color: "hover:bg-slate-700" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className={`p-2.5 bg-slate-800 rounded-lg text-white transition-all duration-300 ${social.color} hover:-translate-y-1`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="/all-loans" className="hover:text-blue-400 transition-colors">ব্রাউজ লোন</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition-colors">আমাদের সম্পর্কে</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition-colors">সাপোর্ট সেন্টার</a></li>
              <li><a href="/blog" className="hover:text-blue-400 transition-colors">আর্থিক ব্লগ</a></li>
            </ul>
          </div>

          {/* Contact Info (Upgrade) */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-500 mt-1" />
                <span>বনানী, ঢাকা-১২১৩, বাংলাদেশ</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-500" />
                <span>+৮৮০ ১২৩৪-৫৬৭৮৯০</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500" />
                <span>support@loanlink.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours / Trust Factor */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg uppercase tracking-wider">Business Hours</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span>শনিবার - বৃহস্পতিবার</span>
                <span className="text-white font-bold">১০:০০ - ১৮:০০</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span>শুক্রবার</span>
                <span className="text-red-400">বন্ধ</span>
              </li>
              <li className="mt-4">
                <span className="bg-blue-500/10 text-blue-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter border border-blue-500/20">
                  Government Registered
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Back to Top Floating Button */}
        <button 
          onClick={scrollToTop}
          className="absolute right-6 -top-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-all active:scale-95 group"
        >
          <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
        </button>

        <hr className="my-10 border-slate-800" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[11px] font-bold uppercase tracking-widest text-slate-500">
          <p>© {new Date().getFullYear()} LoanLink Microfinance. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;