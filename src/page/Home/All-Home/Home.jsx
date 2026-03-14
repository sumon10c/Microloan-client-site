import React from "react";
import Banner from "./Banner";
import HowItWorks from "./HowItWorks";
import CustomerFeedback from "./CustomerFeedback";
import FAQ from "./FAQ";
import LatestLoanCard from "../../latestLoan/LatestLoanCard";
import LatestLoans from "../../latestLoan/LatestLoans";
import WhyChooseUs from "./whyChooseUs";
import OurServices from "./OurServices";
import Milestones from "./Milestones";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LatestLoans></LatestLoans>
      <HowItWorks></HowItWorks>
      <FAQ></FAQ>
      <WhyChooseUs></WhyChooseUs>
      <Milestones></Milestones>
      <CustomerFeedback></CustomerFeedback>
      <OurServices></OurServices>
    </div>
  );
};

export default Home;
