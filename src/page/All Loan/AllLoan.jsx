import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaArrowRight, FaMoneyBillWave } from "react-icons/fa";
import LoanCard from "./LoanCard";

const AllLoan = () => {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // আপনার ব্যাকএন্ড ইউআরএল দিন
    // fetch("https://microloan-approval-tracker-server.vercel.app")
    fetch("http://localhost:3000/loans")
      .then((res) => res.json())
      .then((data) => {
        setLoans(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching loans:", err));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-lg text-green-600"></span>
      </div>
    );
  }

  return (
    <div className="px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-[1200px] mx-auto my-5">
      {
        loans.map((loan)=><LoanCard key={loan._id} loan={loan}></LoanCard>)
      }
    </div>
  );
};

export default AllLoan;
