import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Axios from "../../../Context/Hook/useAxiousSucere/Axios";
import { useParams, useNavigate } from "react-router";
import usehook from "../../../Context/Hook/usehook";
import { AuthContex } from "../../../Context/AuthContex";
import { FaPaperPlane, FaInfoCircle, FaShieldAlt } from "react-icons/fa";

const LoanApplicationForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = usehook();
  const axiosSecure = Axios(AuthContex);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Pre-fill user data from Auth
  useEffect(() => {
    if (user) {
      reset({
        name: user?.displayName,
        Email: user?.email,
      });
    }
  }, [user, reset]);

  const applicationSubmite = async (data) => {
    const fullData = {
      ...data,
      loanId: id,
      status: "Pending",
      appliedDate: new Date().toISOString(),
    };

    const result = await Swal.fire({
      title: "Confirm Application?",
      text: "Are you sure all the information provided is correct?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, Submit Now",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      setLoading(true);
      try {
        const res = await axiosSecure.post("/loansApplication", fullData);
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your application has been submitted successfully.",
            timer: 3000,
          });
          reset();
          navigate('/dassBoard/myLoans');
        }
      } catch (error) {
        Swal.fire("Error", "Something went wrong. Please try again.", "error");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-slate-900 mb-3">Loan Application Form</h2>
          <p className="text-slate-500 font-medium tracking-tight">Please provide accurate information to process your request.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          {/* Form Top Banner */}
          <div className="bg-slate-900 p-6 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <FaShieldAlt className="text-xl text-blue-400" />
              <span className="text-sm font-bold tracking-widest uppercase">Secure Portal</span>
            </div>
            <span className="text-xs bg-white/10 px-3 py-1 rounded-full font-mono">LOAN-ID: {id?.slice(-8).toUpperCase()}</span>
          </div>

          <form onSubmit={handleSubmit(applicationSubmite)} className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-slate-800 border-b pb-2 tracking-tight">Personal Information</h3>
                
                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase mb-2">Full Name</label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className={`input input-bordered w-full bg-slate-50 focus:ring-2 focus:ring-blue-500/20 ${errors.name ? 'border-red-500' : 'border-slate-200'}`}
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase mb-2">Email Address</label>
                  <input
                    {...register("Email")}
                    readOnly
                    className="input input-bordered w-full bg-slate-100 text-slate-400 cursor-not-allowed border-slate-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase mb-2">Phone Number</label>
                  <input
                    type="tel"
                    {...register("Number", { required: "Phone number is required" })}
                    placeholder="01XXXXXXXXX"
                    className="input input-bordered w-full bg-slate-50 border-slate-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase mb-2">NID Number</label>
                  <input
                    type="number"
                    {...register("NID", { required: "NID is required" })}
                    placeholder="National ID Number"
                    className="input input-bordered w-full bg-slate-50 border-slate-200"
                  />
                </div>
              </div>

              {/* Loan Details */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-slate-800 border-b pb-2 tracking-tight">Loan Request Details</h3>
                
                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase mb-2">Requested Amount</label>
                  <input
                    type="number"
                    {...register("amount", { required: "Amount is required", min: 500 })}
                    placeholder="e.g. 50000"
                    className="input input-bordered w-full bg-slate-50 border-slate-200 font-bold text-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase mb-2">Loan Purpose</label>
                  <select 
                    {...register("purpose", { required: "Select a purpose" })}
                    className="select select-bordered w-full bg-slate-50 border-slate-200"
                  >
                    <option value="">Select Purpose</option>
                    <option value="Business">Business Expansion</option>
                    <option value="Education">Education</option>
                    <option value="Medical">Medical Emergency</option>
                    <option value="Personal">Personal Use</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase mb-2">Duration (Months)</label>
                  <input
                    type="text"
                    {...register("duration", { required: "Duration is required" })}
                    placeholder="e.g. 12 Months"
                    className="input input-bordered w-full bg-slate-50 border-slate-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase mb-2">Current Address</label>
                  <textarea
                    {...register("Address", { required: "Address is required" })}
                    className="textarea textarea-bordered w-full h-20 bg-slate-50 border-slate-200"
                    placeholder="Full living address"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Privacy Note */}
            <div className="mt-10 p-4 bg-slate-50 rounded-2xl border border-slate-100 flex gap-3">
              <input type="checkbox" required className="checkbox checkbox-primary checkbox-sm mt-1" />
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                I hereby declare that the information provided is true and accurate. I agree to the <strong>Terms of Service</strong> and <strong>Privacy Policy</strong>.
              </p>
            </div>

            {/* Action Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full mt-8 py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 shadow-lg ${
                loading ? "bg-slate-300 cursor-wait" : "bg-blue-600 hover:bg-blue-700 text-white active:scale-[0.98]"
              }`}
            >
              {loading ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                <>
                  Submit Application <FaPaperPlane className="text-sm" />
                </>
              )}
            </button>
          </form>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-slate-400">
           <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest"><FaInfoCircle /> 24/7 Support</div>
           <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest"><FaShieldAlt /> SSL Encrypted</div>
           <div className="text-[11px] font-bold uppercase tracking-widest italic">Nemesis Verified System</div>
        </div>
      </div>
    </div>
  );
};

export default LoanApplicationForm;