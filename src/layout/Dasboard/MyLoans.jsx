import { useQuery } from "@tanstack/react-query";
import React from "react";
import usehook from "../../Context/Hook/usehook";
import Axios from "../../Context/Hook/useAxiousSucere/Axios";
import { FaCalendarAlt, FaMoneyBillWave, FaClock } from "react-icons/fa";

const MyLoans = () => {
  const { user } = usehook();
  const axiosSecure = Axios();

  const { data: loansApplication = [], isLoading } = useQuery({
    queryKey: ["myLoans", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/loansApplication?email=${user.email}`
      );
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-10 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              My Loan Applications
            </h2>
            <p className="text-slate-500 font-medium">
              Track and manage your requested loans
            </p>
          </div>
          <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100">
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest block">
              Total Applications
            </span>
            <span className="text-2xl font-black text-blue-600">
              {loansApplication.length}
            </span>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table w-full border-separate border-spacing-y-0">
              <thead className="bg-slate-50">
                <tr>
                  <th className="py-5 px-6 text-[11px] font-black text-slate-400 uppercase tracking-widest border-none">
                    Loan Purpose
                  </th>
                  <th className="py-5 px-6 text-[11px] font-black text-slate-400 uppercase tracking-widest border-none">
                    Amount
                  </th>
                  <th className="py-5 px-6 text-[11px] font-black text-slate-400 uppercase tracking-widest border-none">
                    Duration
                  </th>
                  <th className="py-5 px-6 text-[11px] font-black text-slate-400 uppercase tracking-widest border-none">
                    Applied Date
                  </th>
                  <th className="py-5 px-6 text-[11px] font-black text-slate-400 uppercase tracking-widest border-none">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-50">
                {loansApplication.length > 0 ? (
                  loansApplication.map((loan) => (
                    <tr
                      key={loan._id}
                      className="hover:bg-blue-50/30 transition-colors group"
                    >
                      <td className="py-5 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                            {loan.purpose?.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-bold text-slate-800">
                              {loan.purpose}
                            </p>
                            <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tighter">
                              ID: {loan._id.slice(-8)}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="py-5 px-6 font-black text-slate-700">
                        <div className="flex items-center gap-1">
                          <span className="text-blue-600 font-bold">৳</span>
                          {Number(loan.amount).toLocaleString()}
                        </div>
                      </td>

                      <td className="py-5 px-6">
                        <div className="flex items-center gap-2 text-slate-500 font-semibold text-sm">
                          <FaClock className="text-slate-300" /> {loan.duration}
                        </div>
                      </td>

                      <td className="py-5 px-6">
                        <div className="flex items-center gap-2 text-slate-500 font-semibold text-sm">
                          <FaCalendarAlt className="text-slate-300" />
                          {loan.appliedDate
                            ? new Date(loan.appliedDate).toLocaleDateString(
                                "en-GB"
                              )
                            : "N/A"}
                        </div>
                      </td>

                      <td className="py-5 px-6">
                        <span
                          className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                            loan.status === "Pending"
                              ? "bg-amber-50 text-amber-600 border-amber-100"
                              : loan.status === "Approved"
                              ? "bg-green-50 text-green-600 border-green-100"
                              : "bg-red-50 text-red-600 border-red-100"
                          }`}
                        >
                          {loan.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="py-20 text-center">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                          <FaMoneyBillWave className="text-slate-200 text-2xl" />
                        </div>
                        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
                          No Loan Applications Found
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Tip */}
        <p className="mt-8 text-center text-[10px] font-bold text-slate-400 uppercase tracking-[2px]">
          © LoanLink Secure Dashboard • Internal Use Only
        </p>
      </div>
    </div>
  );
};

export default MyLoans;
