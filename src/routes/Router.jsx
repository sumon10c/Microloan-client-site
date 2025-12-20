import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../page/Home/All-Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      Component:RootLayout,
      children:[
        {
            index:true,
            Component:Home
        }
      ]
    },
  ]);
  