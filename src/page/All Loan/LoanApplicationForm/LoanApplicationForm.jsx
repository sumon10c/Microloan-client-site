import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Axios from "../../../Context/Hook/useAxiousSucere/Axios";
import { useParams } from "react-router";

const LoanApplicationForm = () => {
  const { _id } = useParams();
  const axiosSecure = Axios();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const applicationSubmite = (data) => {
    const fullData = {
      ...data, // ইউজারের পূরণ করা সব ইনপুট ডাটা
      loanId: _id, // useParams() থেকে পাওয়া সেই নির্দিষ্ট লোনের ID
      status: "Pending", // আপনি এখানে সরাসরি "Pending" লিখে দিচ্ছেন
      appliedDate: new Date().toISOString(), // বর্তমান সময় ও তারিখ অটোমেটিক জেনারেট হচ্ছে
    };
    console.log("Database-এ যা যা যাচ্ছে:", fullData);

    console.log("loan applicaan name:", data);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Submit it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post("/loansApplication", fullData).then((res) => {
          console.log("after post", res.data);
          if (res.data.insertedId) {
            Swal.fire("Success!", "আবেদনটি জমা হয়েছে!", "success");
            reset(); // ফর্মটি খালি করার জন্য
          }
        });

        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
      }
    });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(applicationSubmite)}
        className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* 1st collam */}
        <div className="font-semibold ml-8">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              {...register("name")}
              className="input"
              placeholder="Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="Email"
              {...register("Email")}
              className="input"
              placeholder="Email"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Phone Number</label>
            <input
              type="number"
              {...register("Number")}
              className="input"
              placeholder="Phone Number"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">NID Number</label>
            <input
              type="number"
              {...register("NID")}
              className="input"
              placeholder="NID Number"
            />
          </fieldset>
        </div>
        {/* 2nd collam */}
        <div className="font-semibold ml-8">
          <fieldset className="fieldset">
            <label className="label">Loan Amount</label>
            <input
              type="number"
              {...register("amount")}
              className="input"
              placeholder="Loan Amount"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Reason/Purpose</label>
            <input
              type="text"
              {...register("purpose")}
              className="input"
              placeholder="Reason/Purpose"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Duration</label>
            <input
              type="text"
              {...register("duration")}
              className="input"
              placeholder="Duration"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Current Address</label>
            <input
              type="text"
              {...register("Address")}
              className="input"
              placeholder="Current Address"
            />
          </fieldset>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="md:col-span-2 bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default LoanApplicationForm;
