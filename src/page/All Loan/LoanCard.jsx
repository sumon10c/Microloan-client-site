import React from "react";
import { Link } from "react-router";

const LoanCard = ({ loan }) => {
  console.log("Current Loan ID:", loan._id);
  const {
    _id,
    image,
    title,
    description,
    max_loan_amount,
    interest_rate,
    category,
  } = loan;
  return (
    <div className="">
      <div className="card bg-blue-50 w-96 shadow-sm">
        <figure>
          <img className="card-img" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{title}</h2>

          <h2 className="card-title font-semibold">Category : {category}</h2>
          <div className="flex items-center justify-between">
            <p>Max loan amount :{max_loan_amount}</p>
            <p>Interest rate :{interest_rate}</p>
          </div>
          <p>{description}</p>
          <div className="card-actions justify-end">
           <Link to={`/cardDetails/${_id}`}> <button className="btn btn-primary">বিস্তারিত দেখুন</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCard;
