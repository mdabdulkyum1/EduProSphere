
import { useQuery } from '@tanstack/react-query';
import useAuth from './../../../hooks/GetAuthInfo/useAuth';
import useAxiosSecure from './../../../hooks/AxiosSecure/useAxiosSecure';
import  Swal  from 'sweetalert2';



const AllClasses = () => {
  
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();

  const {data: classes = [], isLoading, refetch } = useQuery({
     queryKey: ["all-classes", user?.email],
     enabled: !!user?.email, 
     queryFn: async ()=> {
          const {data} = await axiosSecure.get('/class-request');
          return data;
     }
  });

  if (isLoading) {
    return (
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-primary text-white">
          <tr>
            <th className="p-3 border border-light-border dark:border-dark-border">Image</th>
            <th className="p-3 border border-light-border dark:border-dark-border">Name</th>
            <th className="p-3 border border-light-border dark:border-dark-border">Title</th>
            <th className="p-3 border border-light-border dark:border-dark-border">Category</th>
            <th className="p-3 border border-light-border dark:border-dark-border">Status</th>
            <th className="p-3 border border-light-border dark:border-dark-border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(5)].map((_, index) => (
            <tr key={index}>
              <td className="p-3 border border-light-border dark:border-dark-border">
                <div className="h-4 w-20 bg-gray-300 dark:bg-gray-700 animate-pulse rounded"></div>
              </td>
              <td className="p-3 border border-light-border dark:border-dark-border">
                <div className="h-4 w-16 bg-gray-300 dark:bg-gray-700 animate-pulse rounded"></div>
              </td>
              <td className="p-3 border border-light-border dark:border-dark-border">
                <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 animate-pulse rounded"></div>
              </td>
              <td className="p-3 border border-light-border dark:border-dark-border">
                <div className="h-4 w-16 bg-gray-300 dark:bg-gray-700 animate-pulse rounded"></div>
              </td>
              <td className="p-3 border border-light-border dark:border-dark-border">
                <div className="h-4 w-16 bg-gray-300 dark:bg-gray-700 animate-pulse rounded"></div>
              </td>
              <td className="p-3 border border-light-border dark:border-dark-border">
                <div className="h-4 w-12 bg-gray-300 dark:bg-gray-700 animate-pulse rounded"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  const handelApprove = (id, status ) => {
    const newStatus = {
      id,
      status
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2e7",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Approve!"
    }).then( async (result) => {
      if (result.isConfirmed) {
        
      try{
        const {data} = await axiosSecure.patch(`/class-approve`, newStatus);
        if(data?.modifiedCount > 0 ){
           Swal.fire({
          title: "accepted!",
          icon: "success"
        });
            refetch();
        }
    }catch(err){
      console.error(err);
    }
      }
    });

  } 

  const handelReject = (id, status ) => {
    const newStatus = {
      id,
      status,
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Reject!"
    }).then( async (result) => {
      if (result.isConfirmed) {
        
      try{
        const {data} = await axiosSecure.patch(`/class-reject`, newStatus);
        if(data?.modifiedCount > 0 ){
           Swal.fire({
           title: "rejected!",
           icon: "info"
        });
            refetch();
        }
    }catch(err){
      console.error(err);
    }
      }
    });

  } 

  const handleProgress = (id) => {
    // Handle the progress logic
    alert(`Viewing progress of class with ID ${id}`);
  };

  return (
    <>
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
            <tr key={classItem._id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
              <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">
                <img
                  src={classItem.photoUrl}
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
                      onClick={() => handelApprove(classItem._id,  "accepted")}
                      className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 mr-2"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handelReject(classItem._id,  "rejected")}
                      className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                    >
                      Reject
                    </button>
                  </>
                ) : classItem.status === "accepted" ? (
                  <button
                    onClick={() => handleProgress(classItem._id)}
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
  

    </>

  );
};

export default AllClasses;
