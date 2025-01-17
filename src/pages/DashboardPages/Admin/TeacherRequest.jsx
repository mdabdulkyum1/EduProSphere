import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/AxiosSecure/useAxiosSecure";
import Swal from 'sweetalert2';





const TeacherRequest = () => {
  const axiosSecure = useAxiosSecure();

  const { data: teacherRequests = [], isLoading, refetch} = useQuery({
    queryKey: ["teacher-req"],
    queryFn: async ()=> {
        const {data} = await axiosSecure.get('/teacher-request');
        return data;
    }
  })


  if (isLoading) {
    return (
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-primary text-white">
          <tr>
            <th className="p-3 border border-light-border dark:border-dark-border">Name</th>
            <th className="p-3 border border-light-border dark:border-dark-border">Image</th>
            <th className="p-3 border border-light-border dark:border-dark-border">Experience</th>
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
                <div className="h-12 w-12 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-full"></div>
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
  

  const handelApprove = (id, email, status ) => {
    const newStatus = {
      id,
      email,
      status,
      role: "teacher"
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
        const {data} = await axiosSecure.patch(`/teacher-request`, newStatus);
        if(data?.updatedRequestStatus?.modifiedCount > 0 && data?.updatedUserRole?.modifiedCount > 0 ){
           Swal.fire({
          title: "Approved!",
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

  
    return (
      <div className="p-6 bg-light-background dark:bg-dark-background min-h-screen">
        <h2 className="text-3xl font-bold text-light-text dark:text-dark-text mb-6">
          Teacher Requests : {teacherRequests.length}
        </h2>
        <table className="w-full border-collapse border border-light-border dark:border-dark-border">
          <thead>
            <tr className="bg-primary text-white">
              <th className="p-3 border border-light-border dark:border-dark-border">Name</th>
              <th className="p-3 border border-light-border dark:border-dark-border">Image</th>
              <th className="p-3 border border-light-border dark:border-dark-border">Experience</th>
              <th className="p-3 border border-light-border dark:border-dark-border">Title</th>
              <th className="p-3 border border-light-border dark:border-dark-border">Category</th>
              <th className="p-3 border border-light-border dark:border-dark-border">Status</th>
              <th className="p-3 border border-light-border dark:border-dark-border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teacherRequests.map((request) => (
              <tr key={request._id} className="text-center">
                <td className="p-3 border border-light-border dark:border-dark-border">
                  {request.name}
                </td>
                <td className="p-3 border border-light-border dark:border-dark-border">
                  <img
                    src={request.photo}
                    alt={request.name}
                    className="w-12 h-12 rounded-full mx-auto"
                  />
                </td>
                <td className="p-3 border border-light-border dark:border-dark-border">
                  {request.experience}
                </td>
                <td className="p-3 border border-light-border dark:border-dark-border">
                  {request.title}
                </td>
                <td className="p-3 border border-light-border dark:border-dark-border">
                  {request.category}
                </td>
                <td className="p-3 border border-light-border dark:border-dark-border capitalize">
                  <span className={`font-bold ${request.status === "approved" ? "text-primary" : "text-red-600"}`}>{request.status}</span>
                </td>
                <td className="p-3 border border-light-border dark:border-dark-border">
                  <button
                  onClick={()=>handelApprove(request._id, request.email, "approved")}
                    className={`bg-green-500 text-white px-3 py-1 rounded disabled:opacity-50 disabled:cursor-not-allowed ${
                      request.status === "rejected" ? "cursor-not-allowed" : ""
                    }`}
                    disabled={request.status === "rejected" || request.status === "approved"}
                  >
                    Approve
                  </button>
                  <button
                    className={`bg-red-500 text-white px-3 py-1 rounded ml-2 disabled:opacity-50 disabled:cursor-not-allowed ${
                      request.status === "rejected" ?   "cursor-not-allowed" : ""
                    }`}
                    disabled={request.status === "rejected" || request.status === "approved"}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TeacherRequest;
  