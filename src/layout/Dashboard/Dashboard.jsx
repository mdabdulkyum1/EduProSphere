import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  FaHome, 
  FaUser, 
  FaBook, 
  FaChalkboardTeacher, 
  FaPlusCircle, 
  FaUsers, 
  FaListAlt, 
  FaSignOutAlt, 
  FaBars, 
  FaTimes,
  FaClipboardList  
} from "react-icons/fa";
import useAuth from "../../hooks/GetAuthInfo/useAuth";
import useRole from "../../hooks/GetRole/useRole";
import Loading from "../../components/shared/Loading/Loading";
import StudentDashboard from "../StudentDashboard/StudentDashboard";
import TeacherDashboard from "../TeacherDashboard/TeacherDashboard";
import AdminDashboard from "../AdminDashboard/AdminDashboard";

const Dashboard = () => {
  const { user, logOut } = useAuth();
  const { role, roleLoading } = useRole();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (roleLoading) {
    return <Loading message="Loading Role Data" />;
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 w-64 h-screen bg-primary text-white p-6 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:translate-x-0`}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button
            className="text-white text-2xl lg:hidden"
            onClick={toggleSidebar}
          >
            <FaTimes />
          </button>
        </div>
        <ul className="space-y-4">
          <li>
            <NavLink to="/dashboard" className="flex items-center space-x-2 hover:text-accent">
              <FaHome /> <span>Home</span>
            </NavLink>
          </li>
          {role === "student" && (
            <>
              <li>
                <NavLink
                  to="/dashboard/my-enroll-class"
                  className="flex items-center space-x-2 hover:text-accent"
                >
                  <FaBook /> <span>My Enroll Class</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/profile"
                  className="flex items-center space-x-2 hover:text-accent"
                >
                  <FaUser /> <span>Profile</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/my-request"
                  className="flex items-center space-x-2 hover:text-accent"
                >
                  <FaClipboardList /> <span>My Request</span>
                </NavLink>
              </li>
            </>
          )}
          {role === "teacher" && (
            <>
                <li>
                <NavLink
                  to="/dashboard/add-class"
                  className="flex items-center space-x-2 hover:text-accent"
                >
                  <FaPlusCircle /> <span>Add Class</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/my-classes"
                  className="flex items-center space-x-2 hover:text-accent"
                >
                  <FaChalkboardTeacher /> <span>My Classes</span>
                </NavLink>
              </li>
              
              <li>
                <NavLink
                  to="/dashboard/profile"
                  className="flex items-center space-x-2 hover:text-accent"
                >
                  <FaUser /> <span>Profile</span>
                </NavLink>
              </li>
            </>
          )}
          
          {role === "admin" && (
            <>
              <li>
                <NavLink
                  to="/dashboard/teacher-request"
                  className="flex items-center space-x-2 hover:text-accent"
                >
                  <FaUsers /> <span>Teacher Request</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/users"
                  className="flex items-center space-x-2 hover:text-accent"
                >
                  <FaUsers /> <span>Users</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/all-classes"
                  className="flex items-center space-x-2 hover:text-accent"
                >
                  <FaListAlt /> <span>All Classes</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/profile"
                  className="flex items-center space-x-2 hover:text-accent"
                >
                  <FaUser /> <span>Profile</span>
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/" className="flex items-center space-x-2 hover:text-accent">
              <FaHome /> <span>Home</span>
            </NavLink>
          </li>
        </ul>
        <button
          onClick={logOut}
          className="flex items-center space-x-2 text-red-500 hover:text-red-700 mt-8"
        >
          <FaSignOutAlt /> <span>Logout</span>
        </button>
      </div>

      {/* Hamburger Menu for Small Screens */}
      <button
        className="fixed top-4 left-4 z-50 text-primary text-2xl lg:hidden"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>

      {/* Main Content */}
      <div className="flex-grow p-6 lg:ml-64">
        <h2 className="text-3xl font-bold mt-6 md:mt-0 mb-6">
          Welcome, {user?.displayName} <span className="text-primary">{role || "N/A"}</span>
        </h2>
        <div className="space-y-8">
          {role === "student" && <StudentDashboard />}
          {role === "teacher" && <TeacherDashboard />}
          {role === "admin" && <AdminDashboard />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
