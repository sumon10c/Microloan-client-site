import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../page/Home/All-Home/Home";
import About from "../page/About/About";
import Contact from "../page/Contact/Contact";
import AllLoan from "../page/All Loan/AllLoan";
import Error from "../page/Error/Error";
import Login from "../page/Navbar/Firebase/Login";
import Register from "../page/Navbar/Firebase/Register";
import CardDetails from "../page/All Loan/Loan-card/CardDetails";
import AuthLayout from "../Authication/AuthLayout";
import PrivateRoute from "./PrivateRoute";
import axios from "axios";
import LoanApplicationForm from "../page/All Loan/LoanApplicationForm/LoanApplicationForm";

export const router = createBrowserRouter([
    {
      path: "/",
      Component:RootLayout,
      errorElement:<Error></Error>,
      children:[
        {
            index:true,
            Component:Home
        },
        {
            path:'/all-loans',
            Component:AllLoan
        },
        {
          path:'/about',
          Component:About
        },
        {
          path:'/contact',
          Component:Contact
        },
        
        {
          path:'/cardDetails/:id',
          element:<PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
          loader: async ({ params }) => {
            const response = await fetch(`https://microloan-approval-tracker-server.vercel.app/loans/${params.id}`);
            if (!response.ok) throw new Error("Data not found");
            return response.json();
          }
        
        },
        {
          path:'/loanApplication/:id',
          Component:LoanApplicationForm
        }
      ]
    },
    {
      path:'/',
      Component:AuthLayout,
      children:[
        {
          path:'/login',
          Component: Login
        },
        {
          path:'/register',
          Component: Register
        },
      ]
    }
  ]);
  