import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import AllClasses from "../pages/AllClasses/AllClasses";
import TechOn from "../pages/TechOn/TechOn";
import Login from "../pages/Authentications/Login";
import SignUp from "../pages/Authentications/SignUp";
import Dashboard from "../layout/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import TeacherRequest from "../pages/DashboardPages/Admin/TeacherRequest";
import Users from "../pages/DashboardPages/Admin/Users";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/", 
                element: <Home></Home>
            }, 
            {
                path: "all-classes",
                element: <AllClasses></AllClasses>
            },
            {
                path: "tech-on",
                element: <TechOn></TechOn>
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // admin
            {
                path: "teacher-request",
                element: <TeacherRequest></TeacherRequest>
            },
            {
                path: "users",
                element: <Users></Users>
            }
        ]
    },
    {
        path: "login",
        element: <Login></Login>
    },
    {
        path: "signup",
        element: <SignUp></SignUp>
    }

]);

export default router;
