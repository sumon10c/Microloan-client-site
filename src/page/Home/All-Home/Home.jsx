import React from 'react';
import Banner from './Banner';
import HowItWorks from './HowItWorks';
import CustomerFeedback from './CustomerFeedback';
import FAQ from './FAQ';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <FAQ></FAQ>
            <CustomerFeedback></CustomerFeedback>

        </div>
    );
};

export default Home;