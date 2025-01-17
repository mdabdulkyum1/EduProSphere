import { Outlet } from "react-router-dom";


const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text p-6">
      <div className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md">
        <Outlet />
      </div>
    </div>
  );
};

export default StudentDashboard;