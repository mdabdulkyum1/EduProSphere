import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import AllClasses from "../pages/AllClasses/AllClasses";
import TechOn from "../pages/TechOn/TechOn";
import Login from "../pages/Authentications/Login";
import SignUp from "../pages/Authentications/SignUp";
import Dashboard from "../layout/Dashboard/Dashboard";

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
        element: <Dashboard></Dashboard>
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
