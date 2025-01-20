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
import AllClass from './../pages/DashboardPages/Admin/AllClasses';
import MyProfile from "../pages/DashboardPages/Admin/MyProfile";
import AdminRoute from "./AdminRoute";
import TeacherRoute from "./TeacherRoute";
import AddClass from "../pages/DashboardPages/Teacher/AddClass";
import MyClass from './../pages/DashboardPages/Teacher/MyClasses';
import MyRequest from "../pages/DashboardPages/Student/MyRequest";
import ClassDetailsPage from "../pages/ClassDetailsPage/ClassDetailsPage";
import Payment from "../pages/Payments/Payment";
import MyEnrollments from "../pages/DashboardPages/Student/MyEnrollMents";
import MyClassDetails from "../pages/DashboardPages/Teacher/MyClassDetails";
import MyEnrollClassDetails from "../pages/DashboardPages/Student/MyEnrollClassDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

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
                element: <PrivateRoute><TechOn></TechOn></PrivateRoute>
            },
            {
                path: "class-details/:id",
                element: <PrivateRoute><ClassDetailsPage></ClassDetailsPage></PrivateRoute>
            },
            {
                path: "payment",
                element: <PrivateRoute><Payment></Payment></PrivateRoute>
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
                element: <PrivateRoute><AdminRoute><TeacherRequest></TeacherRequest></AdminRoute></PrivateRoute>
            },
            {
                path: "users",
                element: <PrivateRoute><AdminRoute><Users></Users></AdminRoute></PrivateRoute>
            },
            {
                path: "all-classes",
                element: <PrivateRoute><AdminRoute><AllClass></AllClass></AdminRoute></PrivateRoute>
            },
            // teacher routes
            {
                path: "add-class",
                element: <PrivateRoute><TeacherRoute><AddClass></AddClass></TeacherRoute></PrivateRoute>
            },
            {
                path: "my-classes",
                element: <PrivateRoute><TeacherRoute><MyClass></MyClass></TeacherRoute></PrivateRoute>
            },
            {
                path: "my-class/:id",
                element: <PrivateRoute><TeacherRoute><MyClassDetails></MyClassDetails></TeacherRoute></PrivateRoute>
            },
            // student routes
            {
                path: "my-request", 
                element: <PrivateRoute><MyRequest></MyRequest></PrivateRoute>
            },
            {
                path: "my-enroll-class",
                element: <PrivateRoute><MyEnrollments></MyEnrollments></PrivateRoute>
            },
            {
                path: "my-enroll-class/:id",
                element: <PrivateRoute><MyEnrollClassDetails></MyEnrollClassDetails></PrivateRoute>
            },
            //common routes
            {
                path: "profile",
                element: <MyProfile></MyProfile>
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
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>

    }

]);

export default router;
