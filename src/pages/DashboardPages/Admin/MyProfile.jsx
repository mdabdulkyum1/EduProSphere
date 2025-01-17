
const MyProfile = () => {
  const user = {
    name: "John Doe",
    role: "Admin",
    image: "https://via.placeholder.com/150",
    email: "john.doe@example.com",
    phone: "+1234567890",
  };

  return (
    <div className="p-6 bg-white dark:bg-dark-background rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">My Profile</h2>
      <div className="flex items-center space-x-6">
        <img
          src={user.image}
          alt={user.name}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h3 className="text-xl font-semibold">{user.name}</h3>
          <p className="text-sm text-gray-500">{user.role}</p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center space-x-4">
          <strong className="text-gray-700">Email:</strong>
          <p>{user.email}</p>
        </div>
        <div className="flex items-center space-x-4">
          <strong className="text-gray-700">Phone:</strong>
          <p>{user.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
