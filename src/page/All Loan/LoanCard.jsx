import React from "react";
import { Link } from "react-router";
import { FaArrowRight, FaDollarSign, FaPercentage } from "react-icons/fa";

const LoanCard = ({ loan }) => {
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
    <div className="group h-full transition-all duration-300">
      <div className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500 h-full flex flex-col overflow-hidden">
        {/* Image Section with Overlay */}
        <figure className="relative h-52 overflow-hidden bg-base-300">
          <img
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            src={image}
            alt={title}
            loading="lazy"
          />
          <div className="absolute top-4 left-4 z-10">
            <span className="badge badge-primary font-black py-3 px-4 shadow-lg uppercase text-[10px] tracking-widest border-none">
              {category}
            </span>
          </div>
          {/* Overlay gradient for better text contrast if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-base-900/20 to-transparent"></div>
        </figure>

        {/* Content Section */}
        <div className="card-body p-6 flex flex-col flex-grow text-base-content">
          <h2 className="card-title text-xl font-black mb-1 line-clamp-1 group-hover:text-primary transition-colors">
            {title}
          </h2>

          <div className="flex flex-wrap items-center gap-3 my-4">
            {/* Amount Tag */}
            <div className="flex items-center gap-1.5 text-primary bg-primary/10 px-3 py-1.5 rounded-xl text-xs font-black border border-primary/10">
              <FaDollarSign className="text-[10px]" />
              <span>Max: {max_loan_amount}</span>
            </div>
            {/* Rate Tag */}
            <div className="flex items-center gap-1.5 text-success bg-success/10 px-3 py-1.5 rounded-xl text-xs font-black border border-success/10">
              <FaPercentage className="text-[10px]" />
              <span>Rate: {interest_rate}%</span>
            </div>
          </div>

          <p className="opacity-70 text-sm mb-6 line-clamp-3 leading-relaxed font-medium">
            {description}
          </p>

          <div className="card-actions justify-end mt-auto pt-5 border-t border-base-200">
            <Link to={`/cardDetails/${_id}`} className="w-full">
              <button className="btn btn-primary w-full text-primary-content font-black uppercase tracking-widest text-xs gap-3 group/btn shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                বিস্তারিত দেখুন
                <FaArrowRight className="group-hover/btn:translate-x-1.5 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCard;
