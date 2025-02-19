import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../../../hooks/AxiosSecure/useAxiosSecure";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Registering chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();

  const { data: stats, isLoading, isError } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/home-stats");
      return data;
    },
  });

  if (isLoading) return <div className="text-center text-lg font-semibold text-primary">Loading...</div>;
  if (isError) return <div className="text-center text-lg text-red-500 font-semibold">Error loading data</div>;

  // Chart data and options
  const chartData = {
    labels: ['Total Users', 'Total Classes', 'Total Enrollments'],
    datasets: [
      {
        label: 'Statistics',
        data: [stats.totalUsers, stats.totalClass, stats.totalEnrollments],
        backgroundColor: ['#0073B1', '#F4B400', '#2867B2'],
        borderRadius: 5,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Ensures the chart adapts without distortion
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Admin Dashboard Statistics',
      },
    },
  };

  return (
    <div className="p-6 bg-light-background dark:bg-dark-background shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-light-text dark:text-dark-text mb-4">Dashboard Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-primary text-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Total Users</h3>
          <p className="text-3xl font-bold">{stats.totalUsers}</p>
        </div>
        <div className="p-4 bg-secondary text-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Total Classes</h3>
          <p className="text-3xl font-bold">{stats.totalClass}</p>
        </div>
        <div className="p-4 bg-accent  rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Total Enrollments</h3>
          <p className="text-3xl font-bold">{stats.totalEnrollments}</p>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="dark:text-white mt-6 w-full h-72 sm:h-96 md:h-80 lg:h-96">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default AdminHome;
