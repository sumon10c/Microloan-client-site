import axios from 'axios';
import React from 'react';



const axiosSecure = axios.create({
    baseURL:'https://microloan-approval-tracker-server.vercel.app/'
})

const Axios = () => {
    return axiosSecure
};

export default Axios;