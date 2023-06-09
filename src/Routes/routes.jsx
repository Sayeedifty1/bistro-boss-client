import {
    createBrowserRouter,

} from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import MyCart from "../Pages/Dashboard/MyCart";
import Payment from "../Pages/Dashboard/Payment/payment";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/menu",
                element: <Menu></Menu>
            },
            {
                path: "/order/:category",
                element: <Order></Order>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>, 
        children: [
          {
            path: 'userhome',
            element: <UserHome></UserHome>
          },
          {
            path: 'mycart', 
            element: <MyCart></MyCart>
          },
          {
            path:"payment",
            element: <Payment></Payment>
          },
          // admin routes
          {
            path: 'adminhome',
            element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
          },
          {
            path: 'allusers', 
            element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
          },
          {
            path:'additem',
            element: <AdminRoute><AddItem></AddItem></AdminRoute>
          },
          {
            path:'manageitems',
            element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
          }

        ]
      }
        ]);

export default router;