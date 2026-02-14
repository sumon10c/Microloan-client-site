// import React, { useEffect, useState } from 'react';
// import Axios from '../../../Context/Hook/useAxiousSucere/Axios';
// import { useParams } from 'react-router';


// const CardDetails = () => {

//     const [loans, setLoans] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const axiosSecure = Axios();
//     const {id}=useParams()


//     useEffect(()=>{
        
     
//         axiosSecure.get(`/loans/${id}`)
//         .then(res=>{
//             setLoans(res.data);
//         setLoading(false);
//         })
//         .catch((err) => {
//             console.error("Error:", err);
//             setLoading(false);
//           });

//     }),[id,axiosSecure]
//     if (loading) {
//         return (
//           <div className="min-h-screen flex justify-center items-center">
//             <span className="loading loading-bars loading-lg text-green-600"></span>
//           </div>
//         );
//       }

//     return (
//         <div>
//             <p>This is card details page</p>
//         </div>
//     );
// };

// export default CardDetails;


// import React, { useEffect, useState } from 'react';
// import Axios from '../../../Context/Hook/useAxiousSucere/Axios';
// import { useParams } from 'react-router';

// const CardDetails = () => {
//     // যেহেতু ১টা লোন আসবে, তাই শুরুতে null রাখা ভালো
//     const [loan, setLoan] = useState(null); 
//     const [loading, setLoading] = useState(true);
//     const axiosSecure = Axios();
//     const { id } = useParams();
//     console.log("Loan ID:", id);

//     useEffect(() => {
//         setLoading(true); // আইডি চেঞ্জ হলে আবার লোডিং শুরু হবে
        
//         // ভুল সংশোধন: অবশ্যই ব্যাকটিক (`) ব্যবহার করতে হবে
//         axiosSecure.get(`/loans/${id}`) 
//             .then(res => {
//                 setLoan(res.data);
//                 setLoading(false);
//             })
//             .catch((err) => {
//                 console.error("Error:", err);
//                 setLoading(false);
//             });

//     }, [id, axiosSecure]); // useEffect এর ব্র্যাকেট এখানে শেষ হবে

//     // লোডিং অবস্থা
//     if (loading) {
//         return (
//             <div className="min-h-screen flex justify-center items-center">
//                 <span className="loading loading-bars loading-lg text-green-600"></span>
//             </div>
//         );
//     }

//     // যদি ডাটা না পাওয়া যায়
//     if (!loan) {
//         return <div className="text-center mt-10">No data found!</div>;
//     }

//     return (
//         <div className="max-w-4xl mx-auto my-10 p-5 border rounded-lg shadow-lg bg-white">
//             <h2 className="text-2xl font-bold mb-4 text-green-700">Loan Details</h2>
//             <hr className="mb-5" />
            
//             <div className="space-y-3">
//                 <p><strong>Loan ID:</strong> {loan._id}</p>
//                 <p><strong>Category:</strong> {loan.title}</p>
//                 <p><strong>Amount:</strong> ${loan.amount}</p>
//                 <p><strong>Description:</strong> {loan.description || "No description available"}</p>
//                 {/* আপনার ডাটাবেসে যে ফিল্ডগুলো আছে সেগুলো এখানে বসান */}
//             </div>

//             <button className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
//                 Apply Now
//             </button>
//         </div>
//     );
// };

// export default CardDetails;









import React from 'react';
import { useLoaderData } from 'react-router';

const CardDetails = () => {
    // লোডার থেকে ডাটাটি সরাসরি এখানে চলে আসবে
    const loan = useLoaderData(); 

    return (
        <div className="max-w-4xl mx-auto my-10 p-5 border rounded-lg shadow-lg bg-white">
            <h2 className="text-2xl font-bold mb-4 text-green-700">Loan Details</h2>
            <hr className="mb-5" />
            
            <div className="space-y-3">
                <p><strong>Loan ID:</strong> {loan._id}</p>
                <p><strong>Title:</strong> {loan.title}</p>
                <p><strong>Amount:</strong> ${loan.max_loan_amount}</p>
                <p><strong>Description:</strong> {loan.description}</p>
            </div>

            <button className="mt-6 px-4 py-2 bg-green-600 text-white rounded">
                Apply Now
            </button>
        </div>
    );
};

export default CardDetails;