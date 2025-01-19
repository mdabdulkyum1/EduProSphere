import { useQuery } from '@tanstack/react-query';

import { Link } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/AxiosSecure/useAxiosSecure';
import useAuth from '../../../hooks/GetAuthInfo/useAuth';

const MyEnrollments = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();
  
  // Fetch enrolled classes
  const { data: enrolledClasses = [], isLoading } = useQuery({
    queryKey: ['enrolled-classes'],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/enrolled-classes/${user?.email}`);
      return data;
    },
  });

  if (isLoading) {
    return <div className="text-center text-lg text-primary">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text py-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Enrolled Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {enrolledClasses.map((classItem) => (
          <div
            key={classItem._id}
            className="bg-white dark:bg-dark-background border border-light-border dark:border-dark-border rounded-lg shadow-md p-4"
          >
            <img
              src={classItem.classImage}
              alt={classItem.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{classItem.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              <strong>Posted by:</strong> {classItem.instructorName}
            </p>
            <Link to={`/dashboard/my-enroll-class/${classItem._id}`}>
              <button className="btn bg-primary text-white w-full py-2 rounded hover:bg-secondary transition">
                Continue
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEnrollments;
