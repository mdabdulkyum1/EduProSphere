import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/AxiosSecure/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/GetAuthInfo/useAuth";

const MyClassDetails = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();

  const mutation = useMutation({
    mutationFn: (data) => {
      return axiosSecure.post("/assignments", data);
    },
  });

  const {
    data: assignments = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["assignments", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/assignments/${id}`);
      return data;
    },
  });

  const totalSubmissions = assignments.reduce(
    (total, assignment) => total + assignment?.submissions.length,
    0
  );

  const { data: totalEnrollment } = useQuery({
    queryKey: ["total-enrollment", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/totalEnrollment/${id}`);
      return data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error fetching assignments</div>;
  }

  const createAssignment = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Create New Assignment",
      html: `
            <form id="assignment-form" class="space-y-4">
              <!-- Assignment Title -->
              <div class="flex flex-col">
                <label for="title" class="text-gray-700 dark:text-gray-800 text-sm font-medium mb-1">
                  Assignment Title
                </label>
                <input 
                  id="title" 
                  class="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  type="text" 
                  placeholder="Enter assignment title"
                  required 
                />
              </div>
      
              <!-- Assignment Deadline -->
              <div class="flex flex-col">
                <label for="deadline" class="text-gray-700 dark:text-gray-800 text-sm font-medium mb-1">
                  Deadline
                </label>
                <input 
                  id="deadline" 
                  class="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  type="date" 
                  required 
                />
              </div>
      
              <!-- Assignment Description -->
              <div class="flex flex-col">
                <label for="description" class="text-gray-700 dark:text-gray-800 text-sm font-medium mb-1">
                  Description
                </label>
                <textarea 
                  id="description" 
                  class="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter assignment description" 
                  rows="3" 
                  required
                ></textarea>
              </div>
            </form>
          `,
      focusConfirm: false,
      confirmButtonText: "Add Assignment",
      confirmButtonColor: "#2A4D69",
      showCancelButton: true,
      preConfirm: async () => {
        const title = document.getElementById("title").value.trim();
        const deadline = document.getElementById("deadline").value;
        const description = document.getElementById("description").value.trim();

        // Validation
        if (!title || !deadline || !description) {
          Swal.showValidationMessage("Please fill out all fields!");
          return false;
        }

        return {
          title,
          deadline,
          description,
          classId: id,
          totalMarks: 60,
          submissions: [],
        };
      },
    });

    if (formValues) {
      try {
        const { data } = await mutation.mutateAsync(formValues);

        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Assignment Created",
            text: "New assignment added successfully!",
          });
          refetch(); // Refresh the data
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Creation Failed",
          text: "An error occurred while adding the assignment.",
        });
        console.error(error);
      }
    }
  };

  return (
    <div className="p-6 bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text">
      <h1 className="text-2xl font-bold mb-4">Class Details</h1>

      {/* Class Progress Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-primary text-white rounded shadow">
          <h2 className="text-lg font-bold">Total Enrollment</h2>
          <p className="text-2xl">{totalEnrollment?.total || "N/A"}</p>
        </div>
        <div className="p-4 bg-secondary text-white rounded shadow">
          <h2 className="text-lg font-bold">Total Assignments</h2>
          <p className="text-2xl">{assignments.length}</p>
        </div>
        <div className="p-4 bg-accent text-white rounded shadow">
          <h2 className="text-lg font-bold">Total Submissions</h2>
          <p className="text-2xl">{totalSubmissions}</p>
        </div>
      </div>

      {/* Assignment Management */}
      <div className="w-full ">
        <h2 className="text-xl font-bold mb-4">Assignments</h2>
        <button
          className="bg-secondary text-white py-2 px-4 rounded hover:bg-secondary-dark"
          onClick={createAssignment}
        >
          Create Assignment
        </button>

<div className="relative">
<div className="absolute top-7 left-0 md:static">
        <div className="overflow-x-auto">
          <table className="mt-4  table table-xs table-pin-rows table-pin-cols border border-light-border dark:border-dark-border">
            <thead>
              <tr>
                <th className="p-2 border border-light-border dark:border-dark-border">
                  Title
                </th>
                <th className="p-2 border border-light-border dark:border-dark-border">
                  Description
                </th>
                <th className="p-2 border border-light-border dark:border-dark-border">
                  Deadline
                </th>
                <th className="p-2 border border-light-border dark:border-dark-border">
                  Submissions
                </th>
              </tr>
            </thead>
            {assignments.length > 0 ? (
              <tbody>
                {/* Render assignments dynamically */}
                {assignments.map((assignment) => (
                  <tr key={assignment._id}>
                    <td className="p-2 border border-light-border dark:border-dark-border">
                      {assignment.title}
                    </td>
                    <td className="p-2 border border-light-border dark:border-dark-border">
                      {assignment?.description}
                    </td>
                    <td className="p-2 border border-light-border dark:border-dark-border">
                      {assignment.deadline}
                    </td>
                    <td className="p-2 border border-light-border dark:border-dark-border">
                      {assignment?.submissions?.length || "N/A"}
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <h1>no assignments found</h1>
            )}
          </table>
        </div>

</div>
</div>





      </div>
    </div>
  );
};

export default MyClassDetails;
