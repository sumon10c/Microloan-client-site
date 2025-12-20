import React from 'react';
import Banner from './Banner';
import HowItWorks from './HowItWorks';
import CustomerFeedback from './CustomerFeedback';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <CustomerFeedback></CustomerFeedback>
        </div>
    );
};

export default Home;