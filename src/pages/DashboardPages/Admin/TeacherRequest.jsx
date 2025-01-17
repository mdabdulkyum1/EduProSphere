import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/AxiosSecure/useAxiosSecure";





const TeacherRequest = () => {
  const axiosSecure = useAxiosSecure();

  const { data: teacherRequests = [] } = useQuery({
    queryKey: ["teacher-req"],
    queryFn: async ()=> {
        const {data} = await axiosSecure.get('/teacher-request');
        console.log(data);
        return data;
    }
  })


  
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
                  {request.status}
                </td>
                <td className="p-3 border border-light-border dark:border-dark-border">
                  <button
                    className={`bg-green-500 text-white px-3 py-1 rounded disabled:opacity-50 disabled:cursor-not-allowed ${
                      request.status === "rejected" ? "cursor-not-allowed" : ""
                    }`}
                    disabled={request.status === "rejected"}
                  >
                    Approve
                  </button>
                  <button
                    className={`bg-red-500 text-white px-3 py-1 rounded ml-2 disabled:opacity-50 disabled:cursor-not-allowed ${
                      request.status === "rejected" ? "cursor-not-allowed" : ""
                    }`}
                    disabled={request.status === "rejected"}
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
  