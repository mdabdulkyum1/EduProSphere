
const MyClass = () => {
  const classes = [
    {
      id: 1,
      title: "React Basics",
      name: "John Doe",
      email: "johndoe@example.com",
      price: "$50",
      description: "Learn React from scratch.",
      image: "https://via.placeholder.com/150",
      status: "pending",
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      name: "Jane Smith",
      email: "janesmith@example.com",
      price: "$60",
      description: "Deep dive into JavaScript.",
      image: "https://via.placeholder.com/150",
      status: "pending",
    },
  ];

  return (
    <div className="p-6 bg-white dark:bg-dark-background rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">My Classes</h2>

      {/* Displaying classes */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls) => (
              <tr key={cls.id} className="border-b">
                <td className="px-4 py-2">{cls.title}</td>
                <td className="px-4 py-2">{cls.name}</td>
                <td className="px-4 py-2">{cls.email}</td>
                <td className="px-4 py-2">{cls.price}</td>
                <td className="px-4 py-2">{cls.description}</td>
                <td className="px-4 py-2">{cls.status}</td>
                <td className="px-4 py-2 flex space-x-2">
                  <button
                    className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600"
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                  <button
                    className="bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600"
                    disabled={cls.status === "pending"}
                  >
                    See Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
