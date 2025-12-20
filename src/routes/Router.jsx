import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../page/Home/All-Home/Home";
import About from "../page/About/About";
import Contact from "../page/Contact/Contact";
import AllLoan from "../page/All Loan/AllLoan";
import Error from "../page/Error/Error";

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
        }
      ]
    },
  ]);
  