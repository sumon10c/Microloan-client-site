import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const CardDetails = () => {
  const loan = useLoaderData();
  const navigate = useNavigate();

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
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 min-h-[500px]">
        <div className="lg:w-1/2 relative group overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute top-6 left-6 bg-green-600 text-white px-5 py-2 rounded-2xl text-xs font-bold uppercase tracking-widest shadow-lg">
            {category}
          </div>
        </div>

        <div className="lg:w-1/2 p-8 lg:p-14 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
          <div className="mb-6">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight">
              {title}
            </h2>
            <div className="w-20 h-2 bg-green-500 rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-10 border-t border-b border-gray-200 py-8">
            <div>
              <p className="text-sm uppercase text-gray-400 font-bold mb-2 tracking-widest">
                Interest Rate
              </p>
              <p className="text-3xl font-black text-gray-800">
                {interest_rate}%{" "}
                <span className="text-sm font-normal text-gray-400">/Year</span>
              </p>
            </div>
            <div>
              <p className="text-sm uppercase text-gray-400 font-bold mb-2 tracking-widest">
                Max Amount
              </p>
              <p className="text-3xl font-black text-green-600">
                ${max_loan_amount?.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate(`/apply/${_id}`)}
              className="flex-1  bg-primary hover:bg-blue-500 text-white font-bold py-5 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-green-200 transform active:scale-95 flex items-center justify-center gap-3 text-lg"
            >
              Apply Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>

            <button
              onClick={() => navigate(-1)}
              className="px-8 py-5 border-2 border-gray-200 text-gray-600 font-bold rounded-2xl hover:bg-gray-100 transition-all active:scale-95"
            >
              Back
            </button>
          </div>

          <p className="mt-8 text-xs text-gray-300 font-mono tracking-tighter">
            Transaction Secured • Loan ID: {_id}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
