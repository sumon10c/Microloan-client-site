import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Axios from "../../../Context/Hook/useAxiousSucere/Axios";
import { useParams } from "react-router";
import usehook from "../../../Context/Hook/usehook";
import { AuthContex } from "../../../Context/AuthContex";

const LoanApplicationForm = () => {
  const { id } = useParams();

  const { user } = usehook();
  const axiosSecure = Axios(AuthContex);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (user) {
      reset({
        name: user?.displayName,
        Email: user?.email,
      });
    }
  }, [user, reset]);

  const applicationSubmite = (data) => {
    const fullData = {
      ...data,
      loanId: id,
      status: "Pending",
      appliedDate: new Date().toISOString(),
    };

    Swal.fire({
      title: "Are you sure?",
      text: "আপনি কি আবেদনটি জমা দিতে চান?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Submit!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post("/loansApplication", fullData).then((res) => {
          if (res.data.insertedId) {
            Swal.fire("Success!", "আবেদনটি সফলভাবে জমা হয়েছে!", "success");
            reset(); 
          }
        });
      }
    });
  };

  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
        Apply for Loan
      </h2>
      <form
        onSubmit={handleSubmit(applicationSubmite)}
        className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-10 shadow-xl rounded-2xl"
      >
        {/* Column 1 */}
        <div className="space-y-4">
          <div>
            <label className="label font-bold">Name</label>
            <input
              {...register("name")}
              className="input input-bordered w-full"
              // readOnly
            />
          </div>
          <div>
            <label className="label font-bold">Email</label>
            <input
              {...register("Email")}
              className="input input-bordered w-full"
              readOnly
            />
          </div>
          <div>
            <label className="label font-bold">Phone Number</label>
            <input
              type="number"
              {...register("Number")}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label font-bold">NID Number</label>
            <input
              type="number"
              {...register("NID")}
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-4">
          <div>
            <label className="label font-bold">Requested Amount</label>
            <input
              type="number"
              {...register("amount")}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label font-bold">Reason/Purpose</label>
            <input
              type="text"
              {...register("purpose")}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label font-bold">Duration (Years/Months)</label>
            <input
              type="text"
              {...register("duration")}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label font-bold">Current Address</label>
            <input
              type="text"
              {...register("Address")}
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="md:col-span-2 bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg mt-4"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default LoanApplicationForm;
