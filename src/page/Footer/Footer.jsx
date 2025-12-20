import React from "react";
import { FaFacebook, FaGithub, FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4">LoanLink</h2>
            <p className="text-sm leading-relaxed">
              Empowering small businesses and individuals through transparent,
              fast, and secure microloan solutions.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/all-loans" className="hover:text-blue-400 transition">
                  Browse Loans
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-400 transition">
                  About Our Mission
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400 transition">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Loan Agreement
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition"
              >
                <FaXTwitter size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-blue-700 transition"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition"
              >
                <FaGithubAlt size={20} />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-10 border-slate-800" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs">
          <p>
            © {new Date().getFullYear()} LoanLink Microfinance. All rights
            reserved.
          </p>
          <p className="mt-2 md:mt-0 italic text-slate-500 text-sm">
            Hello Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
