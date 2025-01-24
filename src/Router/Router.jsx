import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Update from "../Pages/Update";
import DashBoard from "../Pages/DashBoard";
import AddItem from "../Pages/Seller/AddItem";
import Card from "../Pages/Card";
import Dashboard from "../Layoout/Dashboard";
import ManageUsers from "../Pages/Adim/ManageUsers";
import ManageCategory from "../Pages/Adim/ManageCategory";
import AdminRoute from "./AdminRoute";
import CategoryDetails from "../Pages/CategoryDetails";
import Payment from "../users/Payment";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/shop',
            element:<Shop></Shop>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
          path:'/update',
          element:<Update></Update>
        },
        {
          path:'/dashboard',
          element:<DashBoard></DashBoard>
        },
        {
          path:'/additem',
          element:<AddItem></AddItem>
        },
        {
          path:'/categorydetails/:category',
          element:<CategoryDetails></CategoryDetails>
        },
        
       
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'cart',
          element:<Card></Card>
        },
        {
          path:'/dashboard/payment',
          element:<Payment></Payment>
        },
        // admin routes
        {
          path:'manageusers',
          element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        },
        {
          path:"managecategory",
          element:<AdminRoute><ManageCategory></ManageCategory></AdminRoute>
        }
      ]
    }
  ]);