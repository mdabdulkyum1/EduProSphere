import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import AllClasses from "../pages/AllClasses/AllClasses";
import TechOn from "../pages/TechOn/TechOn";

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
    }
]);

export default router;
