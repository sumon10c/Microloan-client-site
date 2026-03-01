import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LoanCard from "./LoanCard";
import Axios from "../../Context/Hook/useAxiousSucere/Axios";

const AllLoan = () => {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = Axios();

  useEffect(() => {
    axiosSecure
      .get("/loans") // স্লাশ (/) চেক করে নিন আপনার API রাউট অনুযায়ী
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
      <div className="min-h-[60vh] flex flex-col justify-center items-center bg-base-100">
        <span className="loading loading-bars loading-lg text-primary"></span>
        <p className="mt-4 text-xs font-black uppercase tracking-widest opacity-40">
          Loading Loans...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-base-100 min-h-screen py-10 transition-colors duration-300">
      <div className="max-w-[1240px] mx-auto px-4">
        {/* Section Header (Optional but Recommended) */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl font-black text-base-content tracking-tight mb-2">
            উপলব্ধ সকল লোন
          </h2>
          <p className="text-base-content opacity-60 font-medium">
            আপনার প্রয়োজন অনুযায়ী সেরা লোন প্যাকেজটি বেছে নিন
          </p>
        </div>

        {/* Grid Layout with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {loans.length > 0 ? (
            loans.map((loan) => <LoanCard key={loan._id} loan={loan} />)
          ) : (
            <div className="col-span-full py-20 text-center opacity-30">
              <h3 className="text-2xl font-bold">
                No Loans Available Right Now
              </h3>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AllLoan;
