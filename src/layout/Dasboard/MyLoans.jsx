import { useQuery } from "@tanstack/react-query";
import React from "react";
import usehook from "../../Context/Hook/usehook";
import Axios from "../../Context/Hook/useAxiousSucere/Axios";
import { FaCheck, FaTimes, FaTrashAlt } from "react-icons/fa";
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
          background: "var(--color-base-100)",
          color: "var(--color-base-content)",
        });
        refetch();
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Something went wrong",
        icon: "error",
        background: "var(--color-base-100)",
        color: "var(--color-base-content)",
      });
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EF4444",
      cancelButtonColor: "#64748B",
      confirmButtonText: "Yes, delete it!",
      background: "var(--color-base-100)",
      color: "var(--color-base-content)",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.delete(`/loansApplication/${id}`);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Application has been removed.",
              icon: "success",
              background: "var(--color-base-100)",
              color: "var(--color-base-content)",
            });
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
      <div className="flex justify-center items-center min-h-[400px] bg-base-100">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  const isAdmin = user?.email === "admin@gmail.com";

  return (
    <div className="p-4 lg:p-10 bg-base-200 min-h-screen text-base-content transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              {isAdmin ? "Admin: All Applications" : "My Loan Applications"}
            </h2>
            <p className="opacity-60 font-medium">
              {isAdmin
                ? "Manage and review all user loan requests"
                : "Track and manage your requested loans"}
            </p>
          </div>
          <div className="bg-base-100 px-6 py-3 rounded-2xl shadow-sm border border-base-300">
            <span className="text-[10px] font-black opacity-40 uppercase tracking-widest block">
              Total Count
            </span>
            <span className="text-2xl font-black text-primary">
              {loansApplication.length}
            </span>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-base-100 rounded-[2rem] shadow-xl border border-base-300 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table w-full border-separate border-spacing-y-0">
              <thead className="bg-base-300/30">
                <tr className="text-base-content/70">
                  <th className="py-5 px-6 text-[11px] font-black uppercase tracking-widest border-none">
                    Loan Info
                  </th>
                  <th className="py-5 px-6 text-[11px] font-black uppercase tracking-widest border-none">
                    Amount
                  </th>
                  <th className="py-5 px-6 text-[11px] font-black uppercase tracking-widest border-none">
                    Duration
                  </th>
                  <th className="py-5 px-6 text-[11px] font-black uppercase tracking-widest border-none">
                    Applied Date
                  </th>
                  <th className="py-5 px-6 text-[11px] font-black uppercase tracking-widest border-none">
                    Status
                  </th>
                  <th className="py-5 px-6 text-[11px] font-black uppercase tracking-widest border-none text-center">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-base-200">
                {loansApplication.length > 0 ? (
                  loansApplication.map((loan) => (
                    <tr
                      key={loan._id}
                      className="hover:bg-base-200/50 transition-colors group"
                    >
                      <td className="py-5 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-black">
                            {(loan.purpose || "L").charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-bold">{loan.purpose}</p>
                            <p className="text-[10px] opacity-50 font-medium uppercase">
                              {isAdmin
                                ? loan.Email || loan.email
                                : `ID: ${loan._id.slice(-8)}`}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="py-5 px-6 font-black">
                        ৳{Number(loan.amount).toLocaleString()}
                      </td>

                      <td className="py-5 px-6 opacity-70 font-semibold text-sm">
                        {loan.duration}
                      </td>

                      <td className="py-5 px-6 opacity-70 font-semibold text-sm">
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
                              ? "bg-warning/10 text-warning border-warning/20"
                              : loan.status === "Approved"
                              ? "bg-success/10 text-success border-success/20"
                              : "bg-error/10 text-error border-error/20"
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
                                className="btn btn-square btn-sm btn-ghost text-success hover:bg-success hover:text-white disabled:opacity-30"
                              >
                                <FaCheck />
                              </button>
                              <button
                                disabled={loan.status !== "Pending"}
                                onClick={() =>
                                  handleStatusUpdate(loan._id, "Rejected")
                                }
                                className="btn btn-square btn-sm btn-ghost text-error hover:bg-error hover:text-white disabled:opacity-30"
                              >
                                <FaTimes />
                              </button>
                            </>
                          )}
                          <button
                            onClick={() => handleDelete(loan._id)}
                            className="btn btn-square btn-sm btn-ghost opacity-40 hover:opacity-100 hover:bg-error hover:text-white transition-all"
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
                      <p className="opacity-30 text-lg font-bold">
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
