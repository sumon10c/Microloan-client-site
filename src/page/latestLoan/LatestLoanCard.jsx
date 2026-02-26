import React from "react";
import { Link } from "react-router";
import { FaMoneyBillWave, FaChartLine, FaArrowRight } from "react-icons/fa";

const LatestLoanCard = ({ loan }) => {
  const {
    _id,
    image,
    title,
    description,
    max_loan_amount,
    interest_rate,
    category,
  } = loan;

  return (
    <div className="h-full flex justify-center">
      <div className="card bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 w-full max-w-[380px] group flex flex-col">
        {/* Image Section with Badge */}
        <figure className="relative h-56 overflow-hidden">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            src={image}
            alt={title}
          />
          <div className="absolute top-3 right-3">
            <span className="badge badge-secondary bg-blue-600 border-none text-white font-medium p-3 shadow-lg">
              {category}
            </span>
          </div>
          {/* গ্রাডিয়েন্ট ওভারলে যা টেক্সটকে হাইলাইট করবে */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </figure>

        {/* Content Section */}
        <div className="card-body p-5 flex flex-col flex-grow">
          <h2 className="card-title font-extrabold text-gray-800 text-xl mb-1 group-hover:text-primary transition-colors">
            {title}
          </h2>

          {/* Loan Info Grid */}
          <div className="grid grid-cols-2 gap-2 my-4 bg-slate-50 p-3 rounded-xl">
            <div className="flex flex-col items-start gap-1">
              <span className="text-[10px] uppercase font-bold text-gray-400 flex items-center gap-1">
                <FaMoneyBillWave className="text-blue-500" /> Max Amount
              </span>
              <span className="text-sm font-bold text-gray-700">
                ${max_loan_amount}
              </span>
            </div>
            <div className="flex flex-col items-start gap-1 border-l border-gray-200 pl-3">
              <span className="text-[10px] uppercase font-bold text-gray-400 flex items-center gap-1">
                <FaChartLine className="text-green-500" /> Interest
              </span>
              <span className="text-sm font-bold text-gray-700">
                {interest_rate}%
              </span>
            </div>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4 flex-grow italic">
            "{description}"
          </p>

          {/* Action Button */}
          <div className="card-actions mt-auto">
            <Link to={`/cardDetails/${_id}`} className="w-full">
              <button className="btn btn-primary w-full text-white font-bold rounded-lg group/btn shadow-md hover:shadow-blue-200">
                বিস্তারিত দেখুন
                <FaArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestLoanCard;
