import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../page/Navbar/Navbar';
import Footer from '../page/Footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;