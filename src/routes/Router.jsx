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
          path:'/cardDetails',
          element:<PrivateRoute><CardDetails></CardDetails></PrivateRoute>
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
  