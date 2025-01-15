import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function Layout() {
  return (
    <div className="bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text min-h-screen">
    <div className="container mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  </div>
  
  );
}

export default Layout;
