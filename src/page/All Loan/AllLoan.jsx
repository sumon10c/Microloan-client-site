import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { data, Link } from "react-router";
import { FaArrowRight, FaMoneyBillWave } from "react-icons/fa";
import LoanCard from "./LoanCard";
import Axios from "../../Context/Hook/useAxiousSucere/Axios";

const AllLoan = () => {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = Axios();

  useEffect(() => {
    // fetch("https://microloan-approval-tracker-server.vercel.app")
    axiosSecure
      .get("loans", data)
      .then((res) => {
        console.log(res.data);
        setLoans(res.data);
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
      {loans.map((loan) => (
        <LoanCard key={loan._id} loan={loan}></LoanCard>
      ))}
    </div>
  );
};

export default AllLoan;
