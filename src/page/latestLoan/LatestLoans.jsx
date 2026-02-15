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
    <div>
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold text-gray-800">
          আমাদের <span className="text-green-600">সেরা লোন</span> অফারসমূহ
        </h1>
        <div className="h-1 w-20 bg-green-500 mx-auto mt-3"></div>
      </div>
      <div className="px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-[1200px] mx-auto my-5">
        {loans.map((loan) => (
          //
          <LatestLoanCard key={loan._id} loan={loan}></LatestLoanCard>
        ))}
      </div>
    </div>
  );
};

export default LatestLoans;
