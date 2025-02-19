import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Dummy data for the chart
const data = {
  labels: ["Class A", "Class B", "Class C", "Class D"],
  datasets: [
    {
      label: "Students Enrolled",
      data: [40, 35, 50, 30],
      backgroundColor: "#4B86B4", // Bar color
      borderRadius: 5,
    },
  ],
};

// Chart options (make it responsive)
const options = {
  responsive: true,
  maintainAspectRatio: false, // Ensures responsiveness
  plugins: {
    legend: { display: true, position: "top" },
    tooltip: { enabled: true },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: "#334E58" }, // X-axis label color
    },
    y: {
      grid: { color: "#E1E9EE" },
      ticks: { color: "#334E58" }, // Y-axis label color
    },
  },
};

const TeacherHome = () => {
  return (
    <div className="p-6 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Teacher Dashboard</h1>
      <p className="text-lg">
        Welcome to your dashboard! Here you can manage your classes, view student progress, and more.
      </p>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">My Classes</h2>
          <p>View and manage your assigned classes.</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Assignments</h2>
          <p>Create and review student assignments.</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Messages</h2>
          <p>Communicate with students and other teachers.</p>
        </div>
      </div>

      {/* Responsive Bar Chart */}
      <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Student Enrollment Overview</h2>
        <div className="w-full h-64 md:h-80">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default TeacherHome;
