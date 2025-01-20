import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import useAuth from "../../../hooks/GetAuthInfo/useAuth";
import useAxiosSecure from "../../../hooks/AxiosSecure/useAxiosSecure";
import { useLocation, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const MyEnrollClassDetails = () => {
  const [showModal, setShowModal] = useState(false);

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const location = useLocation();
  const classTitle = location?.state;

  const { data: assignments = [], refetch } = useQuery({
    queryKey: ["assignment-s", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/my-assignments/${id}`);
      return data;
    },
  });

  const mutation = useMutation({
    mutationFn: (data) => {
      return axiosSecure.post("/feedback", data);
    },
  });
  const submitMutation = useMutation({
    mutationFn: (data) => {
      return axiosSecure.patch("/update-assignments", data);
    },
  });

  const { register, handleSubmit, setValue, watch, reset } = useForm();
  const rating = watch("rating", 0);

  const onSubmit = async (data) => {
    const { rating, description } = data;

    const feedback = {
      name: user?.displayName,
      image: user?.photoURL,
      classTitle,
      description,
      rating,
    };

    const { data: feedbackData } = await mutation.mutateAsync(feedback);
    if (feedbackData?.insertedId) {
      Swal.fire({
        title: "Success",
        text: "Thanks Your feedback!",
        icon: "success",
      });
      reset();
      setShowModal(false);
    }
  };

  const handleRatingChange = (rate) => {
    setValue("rating", rate);
  };

  const handleAssignmentSubmit = async (id) => {
    const { value: formValues } = await Swal.fire({
      title: "Submit Assignment",
      html: `
            <form id="assignment-form" class="space-y-4">
      
              <!-- Assignment Description -->
              <div class="flex flex-col">
                <label for="description" class="text-gray-700 dark:text-gray-800 text-sm font-medium mb-1">
                  Description
                </label>
                <textarea 
                  id="description" 
                  class="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter links" 
                  rows="3" 
                  required
                ></textarea>
              </div>
            </form>
          `,
      focusConfirm: false,
      confirmButtonText: "Submit Assignment",
      confirmButtonColor: "#2A4D69",
      showCancelButton: true,
      preConfirm: async () => {
        const description = document.getElementById("description").value.trim();

        // Validation
        if (!description) {
          Swal.showValidationMessage("Please fill out all fields!");
          return false;
        }

        return { assId: id, email: user?.email, description };
      },
    });

    if (formValues) {
      try {
        const { data } = await submitMutation.mutateAsync(formValues);

        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Assignment Submitted!",
            text: "Submit successfully!",
          });
          refetch();
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
      <h1 className="text-2xl font-bold mb-4">My Enrolled Class Details</h1>

      {/* Teaching Evaluation Report Button */}
      <button
        className="bg-accent text-white py-2 px-4 rounded mb-6"
        onClick={() => setShowModal(true)}
      >
        Teaching Evaluation Report (TER)
      </button>

      {/* Assignments Table */}
      <table className="w-full border border-light-border dark:border-dark-border">
        <thead>
          <tr className="bg-secondary text-white">
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Description</th>
            <th className="p-2 border">Total Marks</th>
            <th className="p-2 border">Deadline</th>
            <th className="p-2 border">Submission</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment) => (
            <tr
              key={assignment._id}
              className="hover:bg-light hover:dark:bg-dark"
            >
              <td className="p-2 border">{assignment.title}</td>
              <td className="p-2 border">{assignment.description}</td>
              <td className="p-2 border">{assignment.totalMarks || "N/A"}</td>
              <td className="p-2 border">{assignment.deadline}</td>
              <td className="p-2 border">
                <div className="flex items-center gap-2">
                  <button
                    className={`px-4 py-2 rounded text-white ${
                      assignment?.submissions?.some(
                        (d) => d.email === user?.email
                      )
                        ? "bg-gray-400 cursor-not-allowed" 
                        : "bg-primary hover:bg-secondary" 
                    }`}
                    onClick={() => handleAssignmentSubmit(assignment._id)}
                    disabled={assignment?.submissions?.some(
                      (d) => d.email === user?.email
                    )}
                  >
                    Submit
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-dark-background p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">
              Teaching Evaluation Report
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Description */}
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="description"
                  className="text-sm font-medium mb-1"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows="3"
                  className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter feedback"
                  {...register("description", { required: true })}
                ></textarea>
              </div>

              {/* Ratings */}
              <div className="flex flex-col mb-4">
                <label htmlFor="rating" className="text-sm font-medium mb-1">
                  Ratings
                </label>
                <ReactStars
                  count={5}
                  onChange={handleRatingChange}
                  size={20}
                  value={rating}
                  activeColor="#FFCA28"
                  emptyColor="#E0E0E0"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="bg-secondary text-white px-4 py-2 rounded"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyEnrollClassDetails;
