import { useQuery } from "@tanstack/react-query";
import React from "react";
import usehook from "../../Context/Hook/usehook";
import Axios from "../../Context/Hook/useAxiousSucere/Axios";
import {
  FaCheck,
  FaTimes,
  FaTrashAlt,
} from "react-icons/fa";
import Swal from "sweetalert2";

const MyLoans = () => {
  const { user } = usehook();
  const axiosSecure = Axios();

  const {
    data: loansApplication = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myLoans", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/loansApplication?email=${user.email}`
      );
      return res.data;
    },
  });

  // Admin Status Update Function
  const handleStatusUpdate = async (id, newStatus) => {
    try {
      const res = await axiosSecure.patch(`/loansApplication/${id}`, {
        status: newStatus,
      });
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          title: `Loan ${newStatus}!`,
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        refetch();
      }
    } catch (error) {
      Swal.fire("Error", "Something went wrong", "error");
    }
  };

// loan application detete function
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EF4444",
      cancelButtonColor: "#64748B",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.delete(`/loansApplication/${id}`);
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Application has been removed.", "success");
            refetch();
          }
        } catch (error) {
          Swal.fire("Error", "Failed to delete the application.", "error");
        }
      }
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  const isAdmin = user?.email === "admin@gmail.com";

  return (
    <div className="p-6 lg:p-10 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              {isAdmin ? "Admin: All Applications" : "My Loan Applications"}
            </h2>
            <p className="text-slate-500 font-medium">
              {isAdmin
                ? "Manage and review all user loan requests"
                : "Track and manage your requested loans"}
            </p>
          </div>
          <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100">
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest block">
              Total Count
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
                    Loan Info
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
                  
                  <th className="py-5 px-6 text-[11px] font-black text-slate-400 uppercase tracking-widest border-none text-center">
                    Actions
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
                            {(loan.purpose || "L").charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-bold text-slate-800">
                              {loan.purpose}
                            </p>
                            <p className="text-[10px] text-slate-400 font-medium">
                              {isAdmin
                                ? loan.Email || loan.email
                                : `ID: ${loan._id.slice(-8)}`}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="py-5 px-6 font-black text-slate-700">
                        ৳{Number(loan.amount).toLocaleString()}
                      </td>

                      <td className="py-5 px-6 text-slate-500 font-semibold text-sm">
                        {loan.duration}
                      </td>

                      <td className="py-5 px-6 text-slate-500 font-semibold text-sm">
                        {loan.appliedDate
                          ? new Date(loan.appliedDate).toLocaleDateString(
                              "en-GB"
                            )
                          : "N/A"}
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
                          {loan.status || "Pending"}
                        </span>
                      </td>

                      <td className="py-5 px-6">
                        <div className="flex justify-center gap-2">
                         
                          {isAdmin && (
                            <>
                              <button
                                disabled={loan.status !== "Pending"}
                                onClick={() =>
                                  handleStatusUpdate(loan._id, "Approved")
                                }
                                title="Approve Loan"
                                className="btn btn-sm btn-ghost text-green-600 bg-green-50 hover:bg-green-600 hover:text-white disabled:bg-slate-100"
                              >
                                <FaCheck />
                              </button>
                              <button
                                disabled={loan.status !== "Pending"}
                                onClick={() =>
                                  handleStatusUpdate(loan._id, "Rejected")
                                }
                                title="Reject Loan"
                                className="btn btn-sm btn-ghost text-red-600 bg-red-50 hover:bg-red-600 hover:text-white disabled:bg-slate-100"
                              >
                                <FaTimes />
                              </button>
                            </>
                          )}

                          {/*  Delete Button (Admin & User both) */}
                          <button
                            onClick={() => handleDelete(loan._id)}
                            title="Delete Application"
                            className="btn btn-sm btn-ghost text-slate-400 bg-slate-100 hover:bg-red-500 hover:text-white"
                          >
                            <FaTrashAlt />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="py-20 text-center">
                      <p className="text-slate-400 font-bold">
                        No Loan Applications Found
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLoans;
