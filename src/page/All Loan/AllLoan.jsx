import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LoanCard from "./LoanCard";
import Axios from "../../Context/Hook/useAxiousSucere/Axios";

const AllLoan = () => {
  const [loans, setLoans] = useState([]);
  const [filteredLoans, setFilteredLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const axiosSecure = Axios();

  useEffect(() => {
    axiosSecure
      .get("/loans")
      .then((res) => {
        setLoans(res.data);
        setFilteredLoans(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching loans:", err);
        setLoading(false);
      });
  }, [axiosSecure]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = loans.filter(
      (loan) =>
        loan.title.toLowerCase().includes(query.toLowerCase()) ||
        loan.category?.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredLoans(filtered);
  };

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
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black text-base-content tracking-tight mb-2">
              উপলব্ধ সকল লোন
            </h2>
            <p className="text-base-content opacity-60 font-medium">
              আপনার প্রয়োজন অনুযায়ী সেরা লোন প্যাকেজটি বেছে নিন
            </p>
          </div>

          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="লোনের নাম বা ক্যাটাগরি দিয়ে সার্চ করুন..."
              className="input input-bordered w-full pl-10 bg-base-200 focus:border-primary transition-all"
              value={searchQuery}
              onChange={handleSearch}
            />
            <span className="absolute left-3 top-3.5 opacity-50">🔍</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredLoans.length > 0 ? (
            filteredLoans.map((loan) => <LoanCard key={loan._id} loan={loan} />)
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="text-6xl mb-4">🔍❌</div>
              <h3 className="text-2xl font-bold opacity-50">
                দুঃখিত, এই নামে কোনো লোন পাওয়া যায়নি!
              </h3>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setFilteredLoans(loans);
                }}
                className="btn btn-link text-primary mt-2"
              >
                সব লোন আবার দেখুন
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AllLoan;
