

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

export default StudentDashboard;