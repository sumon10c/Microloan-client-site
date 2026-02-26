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
    <div className="group h-full">
      <div className="card bg-base-100 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden">
        {/* Image Section with Overlay */}
        <figure className="relative h-48 overflow-hidden">
          <img 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
            src={image} 
            alt={title} 
          />
          <div className="absolute top-4 left-4">
            <span className="badge badge-primary font-bold py-3 shadow-md">{category}</span>
          </div>
        </figure>

        {/* Content Section */}
        <div className="card-body p-6 flex flex-col flex-grow">
          <h2 className="card-title text-xl font-bold text-gray-800 line-clamp-1">
            {title}
          </h2>
          
          <div className="flex items-center gap-4 my-3 text-sm font-medium">
            <div className="flex items-center gap-1 text-blue-600 bg-blue-50 px-2 py-1 rounded">
              <FaDollarSign className="text-xs" />
              <span>Max: {max_loan_amount}</span>
            </div>
            <div className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded">
              <FaPercentage className="text-xs" />
              <span>Rate: {interest_rate}%</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
            {description}
          </p>

          <div className="card-actions justify-end mt-auto pt-4 border-t border-gray-50">
            <Link to={`/cardDetails/${_id}`} className="w-full">
              <button className="btn btn-primary w-full text-white font-bold gap-2 group">
                বিস্তারিত দেখুন
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCard;