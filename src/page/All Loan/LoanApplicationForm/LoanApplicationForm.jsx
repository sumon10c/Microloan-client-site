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

  const isAdmin = user?.email === "admin@gmail.com";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Pre-fill user data
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
      text: "সব তথ্য কি সঠিক? সাবমিট করার পর পরিবর্তন করা যাবে না।",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "var(--p)", // DaisyUI Primary Color
      cancelButtonColor: "var(--er)", // DaisyUI Error Color
      confirmButtonText: "Yes, Submit Now",
      background: "var(--b1)",
      color: "var(--bc)",
    });

    if (result.isConfirmed) {
      setLoading(true);
      try {
        const res = await axiosSecure.post("/loansApplication", fullData);
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "আবেদনটি সফলভাবে জমা হয়েছে।",
            background: "var(--b1)",
            color: "var(--bc)",
          });
          reset();
          navigate("/dassBoard/myLoans");
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "কিছু ভুল হয়েছে, আবার চেষ্টা করুন।",
          background: "var(--b1)",
          color: "var(--bc)",
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-base-200 py-16 px-4 text-base-content transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-3 tracking-tight">
            Loan Application Form
          </h2>
          <p className="opacity-60 font-medium italic">
            সঠিক তথ্য প্রদান করে আপনার ঋণের আবেদন সম্পন্ন করুন।
          </p>
        </div>

        <div className="bg-base-100 rounded-3xl shadow-2xl overflow-hidden border border-base-300">
          {/* Form Top Banner */}
          <div className="bg-neutral p-6 flex items-center justify-between text-neutral-content">
            <div className="flex items-center gap-3">
              <FaShieldAlt className="text-xl text-primary" />
              <span className="text-sm font-black tracking-widest uppercase">
                Secure Portal
              </span>
            </div>
            <span className="text-xs bg-white/10 px-4 py-1.5 rounded-full font-mono border border-white/5">
              LOAN-ID: {id?.slice(-8).toUpperCase()}
            </span>
          </div>

          <form
            onSubmit={handleSubmit(applicationSubmite)}
            className="p-8 md:p-12 space-y-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-black border-l-4 border-primary pl-3 uppercase tracking-wider">
                  Personal Info
                </h3>

                <div className="form-control">
                  <label className="label uppercase text-[10px] font-black opacity-50">
                    Full Name
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className={`input input-bordered w-full bg-base-200 font-bold ${
                      errors.name ? "border-error" : ""
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <span className="text-error text-[10px] mt-1 font-bold">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label uppercase text-[10px] font-black opacity-50">
                    Email Address
                  </label>
                  <input
                    {...register("Email")}
                    readOnly
                    className="input input-bordered w-full bg-base-300 opacity-60 cursor-not-allowed italic font-bold"
                  />
                </div>

                <div className="form-control">
                  <label className="label uppercase text-[10px] font-black opacity-50">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    {...register("Number", { required: "Required" })}
                    placeholder="01XXXXXXXXX"
                    className="input input-bordered w-full bg-base-200 font-bold"
                  />
                </div>

                <div className="form-control">
                  <label className="label uppercase text-[10px] font-black opacity-50">
                    NID Number
                  </label>
                  <input
                    type="number"
                    {...register("NID", { required: "Required" })}
                    placeholder="National ID"
                    className="input input-bordered w-full bg-base-200 font-bold"
                  />
                </div>
              </div>

              {/* Loan Details */}
              <div className="space-y-6">
                <h3 className="text-lg font-black border-l-4 border-secondary pl-3 uppercase tracking-wider">
                  Loan Details
                </h3>

                <div className="form-control">
                  <label className="label uppercase text-[10px] font-black opacity-50">
                    Requested Amount
                  </label>
                  <input
                    type="number"
                    {...register("amount", { required: true, min: 500 })}
                    placeholder="e.g. 50000"
                    className="input input-bordered w-full bg-base-200 font-black text-primary"
                  />
                </div>

                <div className="form-control">
                  <label className="label uppercase text-[10px] font-black opacity-50">
                    Loan Purpose
                  </label>
                  <select
                    {...register("purpose", { required: true })}
                    className="select select-bordered w-full bg-base-200 font-bold"
                  >
                    <option value="">Select Purpose</option>
                    <option value="Business">Business Expansion</option>
                    <option value="Education">Education</option>
                    <option value="Medical">Medical Emergency</option>
                    <option value="Personal">Personal Use</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label uppercase text-[10px] font-black opacity-50">
                    Duration (Months)
                  </label>
                  <input
                    {...register("duration", { required: true })}
                    placeholder="e.g. 12"
                    className="input input-bordered w-full bg-base-200 font-bold"
                  />
                </div>

                <div className="form-control">
                  <label className="label uppercase text-[10px] font-black opacity-50">
                    Current Address
                  </label>
                  <textarea
                    {...register("Address", { required: true })}
                    className="textarea textarea-bordered w-full h-20 bg-base-200 font-bold leading-tight"
                    placeholder="Full living address"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Privacy Note */}
            <div className="p-5 bg-base-200 rounded-2xl border border-base-300 flex gap-4 items-start group">
              <input
                type="checkbox"
                required
                className="checkbox checkbox-primary checkbox-sm mt-1 border-2"
              />
              <p className="text-[11px] opacity-60 leading-relaxed font-bold">
                I hereby declare that the information provided is true and
                accurate. I agree to the{" "}
                <span className="text-primary">Terms of Service</span> and
                <span className="text-primary"> Privacy Policy</span>.
              </p>
            </div>

            {/* Action Button */}
            <button
              type="submit"
              disabled={loading || isAdmin}
              className={`btn btn-block py-4 h-auto rounded-2xl font-black text-lg shadow-xl shadow-primary/20 ${
                isAdmin ? "btn-disabled" : "btn-primary"
              }`}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : isAdmin ? (
                "ADMIN ACCOUNT RESTRICTED"
              ) : (
                <>
                  Submit Application <FaPaperPlane className="text-sm" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Trust Indicators */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-40">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em]">
            <FaInfoCircle /> 24/7 Support
          </div>
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em]">
            <FaShieldAlt /> SSL Encrypted
          </div>
          <div className="text-[10px] font-black uppercase tracking-[0.2em] italic">
            Nemesis Verified System
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanApplicationForm;
