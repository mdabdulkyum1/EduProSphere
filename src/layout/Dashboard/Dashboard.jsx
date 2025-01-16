import {  useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/GetAuthInfo/useAuth";
import useRole from "../../hooks/GetRole/useRole";

const Dashboard = () => {
  const { user } = useAuth(); 
  const {role} = useRole();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      {/* Sidebar */}
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-64 bg-primary text-white p-6">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
          <ul>
            {role === "student" && (
              <>
                <li>
                  <button onClick={() => navigate("/dashboard/my-enroll-class")}>
                    My Enroll Class
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate("/dashboard/profile")}>Profile</button>
                </li>
              </>
            )}
            {role === "teacher" && (
              <>
                <li>
                  <button onClick={() => navigate("/dashboard/my-classes")}>My Classes</button>
                </li>
                <li>
                  <button onClick={() => navigate("/dashboard/add-class")}>Add Class</button>
                </li>
                <li>
                  <button onClick={() => navigate("/dashboard/profile")}>Profile</button>
                </li>
              </>
            )}
            {role === "admin" && (
              <>
                <li>
                  <button onClick={() => navigate("/dashboard/teacher-request")}>Teacher Request</button>
                </li>
                <li>
                  <button onClick={() => navigate("/dashboard/users")}>Users</button>
                </li>
                <li>
                  <button onClick={() => navigate("/dashboard/all-classes")}>All Classes</button>
                </li>
                <li>
                  <button onClick={() => navigate("/dashboard/profile")}>Profile</button>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow p-6">
          <h2 className="text-3xl font-bold mb-6">Welcome, {user?.displayName} <span className="text-primary">{role}</span></h2>
          <div className="space-y-8">
            {role === "student" && (
              <>
                {/* Student Specific Pages */}
                <StudentDashboard />
              </>
            )}
            {role === "teacher" && (
              <>
                {/* Teacher Specific Pages */}
                <TeacherDashboard />
              </>
            )}
            {role === "admin" && (
              <>
                {/* Admin Specific Pages */}
                <AdminDashboard />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

const StudentDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">My Enrolled Classes</h3>
        {/* Display Enrolled Classes */}
      </div>
      <div className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">My Profile</h3>
        {/* Display Profile */}
      </div>
    </div>
  );
};

const TeacherDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">My Classes</h3>
        {/* Display Teacher's Classes */}
      </div>
      <div className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Add New Class</h3>
        {/* Add New Class Form */}
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Teacher Requests</h3>
        {/* Display Teacher Requests */}
      </div>
      <div className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Manage Users</h3>
        {/* Display Users List */}
      </div>
    </div>
  );
};
