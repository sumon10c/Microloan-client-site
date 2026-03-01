import React, { useEffect, useState } from "react";
import Axios from "../../Context/Hook/useAxiousSucere/Axios";
import LatestLoanCard from "./LatestLoanCard";

const LatestLoans = () => {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = Axios();

  useEffect(() => {
    axiosSecure
      .get("loans/latest")
      .then((res) => {
        setLoans(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching loans:", err);
        setLoading(false);
      });
  }, [axiosSecure]);

  if (loading) {
    return (
      <div className="min-h-[400px] flex justify-center items-center bg-base-100">
       
        <span className="loading loading-bars loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <section className="bg-base-100 py-16 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-base-content">
            আমাদের <span className="text-primary">সেরা লোন</span> অফারসমূহ
          </h1>
          <div className="h-1.5 w-24 bg-primary mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 opacity-70 max-w-lg mx-auto">
            আপনার স্বপ্ন পূরণে আমরা আছি পাশে। বেছে নিন আপনার প্রয়োজন অনুযায়ী
            সেরা লোনটি।
          </p>
        </div>

        {/* Loans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1250px] mx-auto">
          {loans.length > 0 ? (
            loans.map((loan) => <LatestLoanCard key={loan._id} loan={loan} />)
          ) : (
            <div className="col-span-full text-center py-20 opacity-50">
              কোন লোন অফার খুঁজে পাওয়া যায়নি।
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestLoans;
