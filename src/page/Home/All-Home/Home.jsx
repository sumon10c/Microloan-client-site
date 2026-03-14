import React from "react";
import Banner from "./Banner";
import HowItWorks from "./HowItWorks";
import CustomerFeedback from "./CustomerFeedback";
import FAQ from "./FAQ";
import LatestLoanCard from "../../latestLoan/LatestLoanCard";
import LatestLoans from "../../latestLoan/LatestLoans";
import WhyChooseUs from "./whyChooseUs";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LatestLoans></LatestLoans>
      <HowItWorks></HowItWorks>
      <FAQ></FAQ>
      <WhyChooseUs></WhyChooseUs>
      <CustomerFeedback></CustomerFeedback>
    </div>
  );
};

export default Home;
