
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

export default TeacherDashboard;