import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
    return (
      <div className="min-h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text p-6">
        <div className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
          <Outlet />
        </div>
      </div>
    );
  };
  
  export default AdminDashboard;
  