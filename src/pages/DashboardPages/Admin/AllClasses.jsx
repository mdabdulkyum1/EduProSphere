
const AllClasses = () => {
  const classes = [
    {
      id: 1,
      title: "Math 101",
      image: "https://via.placeholder.com/40",
      email: "teacher1@example.com",
      description: "An introductory class to basic mathematics.",
      status: "pending",
    },
    {
      id: 2,
      title: "History 202",
      image: "https://via.placeholder.com/40",
      email: "teacher2@example.com",
      description: "A deep dive into world history.",
      status: "pending",
    },
    {
      id: 3,
      title: "Chemistry 301",
      image: "https://via.placeholder.com/40",
      email: "teacher3@example.com",
      description: "Advanced chemistry concepts for college students.",
      status: "accepted",
    },
  ];

  const handleApprove = (id) => {
    // Handle the approve logic
    alert(`Class with ID ${id} approved`);
  };

  const handleReject = (id) => {
    // Handle the reject logic
    alert(`Class with ID ${id} rejected`);
  };

  const handleProgress = (id) => {
    // Handle the progress logic
    alert(`Viewing progress of class with ID ${id}`);
  };

  return (
    <div className="p-6 bg-white dark:bg-dark-background rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">All Classes</h2>
      <table className="min-w-full border-collapse border border-gray-200 dark:border-gray-700">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">Image</th>
            <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">Title</th>
            <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">Email</th>
            <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">Description</th>
            <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">Status</th>
            <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((classItem) => (
            <tr key={classItem.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
              <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">
                <img
                  src={classItem.image}
                  alt={classItem.title}
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">{classItem.title}</td>
              <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">{classItem.email}</td>
              <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">{classItem.description}</td>
              <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">
                <span
                  className={`px-2 py-1 rounded text-white ${
                    classItem.status === "accepted"
                      ? "bg-green-500"
                      : classItem.status === "rejected"
                      ? "bg-red-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {classItem.status}
                </span>
              </td>
              <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">
                {classItem.status === "pending" ? (
                  <>
                    <button
                      onClick={() => handleApprove(classItem.id)}
                      className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 mr-2"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(classItem.id)}
                      className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                    >
                      Reject
                    </button>
                  </>
                ) : classItem.status === "accepted" ? (
                  <button
                    onClick={() => handleProgress(classItem.id)}
                    className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                  >
                    Progress
                  </button>
                ) : (
                  <button
                    className="bg-gray-400 text-white px-4 py-1 rounded cursor-not-allowed"
                    disabled
                  >
                    Progress
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllClasses;
