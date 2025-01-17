const Users = () => {
    const users = [
      {
        id: 1,
        name: "John Doe",
        email: "johndoe@example.com",
        role: "user",
        image: "https://via.placeholder.com/40",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "janesmith@example.com",
        role: "admin",
        image: "https://via.placeholder.com/40",
      },
      {
        id: 3,
        name: "Alice Johnson",
        email: "alicej@example.com",
        role: "user",
        image: "https://via.placeholder.com/40",
      },
    ];
  
    return (
      <div className="p-6 bg-white dark:bg-dark-background rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Users</h2>
        <table className="min-w-full border-collapse border border-gray-200 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">Image</th>
              <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">Email</th>
              <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">
                  <img src={user.image} alt={user.name} className="w-10 h-10 rounded-full" />
                </td>
                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">{user.name}</td>
                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">{user.email}</td>
                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">
                  {user.role === "admin" ? (
                    <button
                      className="bg-gray-400 text-white px-4 py-1 rounded cursor-not-allowed"
                      disabled
                    >
                      Admin
                    </button>
                  ) : (
                    <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                      Make Admin
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
  
  export default Users;
  