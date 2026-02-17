import { useQuery } from '@tanstack/react-query';
import React from 'react';
import usehook from '../../Context/Hook/usehook';
import Axios from '../../Context/Hook/useAxiousSucere/Axios';

const MyLoans = () => {
    const {user}= usehook()
    const axiosSecure = Axios()

    const {data:loansApplication = []} = useQuery({
        queryKey:['myLoans',user?.email],
        queryFn:async ()=>{
             const res = await axiosSecure.get(`/loansApplication?email=${user.email}`);
             console.log('aii jy data:',res.data)
             return res.data
        }
    })

    return (
        <div>
            all of my loans:{loansApplication.length}
        </div>
    );
};

export default MyLoans;