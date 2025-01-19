import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import useAuth from "../../../hooks/GetAuthInfo/useAuth";
import useAxiosSecure from "../../../hooks/AxiosSecure/useAxiosSecure";
import { useParams } from "react-router-dom";

const MyEnrollClassDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);

  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();
  const {id} = useParams();

  const {data: assignments = []} = useQuery({
    queryKey: ["assignment-s", user?.email],
    queryFn: async()=> {
        const {data} = await axiosSecure.get(`/my-assignments/${id}`);
        return data;
    }
  });


  const handleSubmit = (assignmentId) => {
    alert(`Assignment ${assignmentId} submitted!`);
    // Increment submission count logic goes here.
  };

  const handleRating = (rate) => {
    setRating(rate);
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
            <tr key={assignment._id} className="hover:bg-light hover:dark:bg-dark">
              <td className="p-2 border">{assignment.title}</td>
              <td className="p-2 border">{assignment.description}</td>
              <td className="p-2 border">{assignment.totalMarks || "N/A"}</td>
              <td className="p-2 border">{assignment.deadline}</td>
              <td className="p-2 border">
                <div className="flex items-center gap-2">
                  <button
                    className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary"
                    onClick={() => handleSubmit(assignment.id)}
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
            <h2 className="text-xl font-bold mb-4">Teaching Evaluation Report</h2>
            <form>
              {/* Description */}
              <div className="flex flex-col mb-4">
                <label htmlFor="description" className="text-sm font-medium mb-1">
                  Description
                </label>
                <textarea
                  id="description"
                  rows="3"
                  className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter feedback"
                  required
                ></textarea>
              </div>

              {/* Ratings */}
              <div className="flex flex-col mb-4">
                <label htmlFor="rating" className="text-sm font-medium mb-1">
                  Ratings
                </label>
                <ReactStars
                  onClick={handleRating}
                  ratingValue={rating}
                  size={20}
                  fillColor="#FFCA28"
                  emptyColor="#E0E0E0"
                  className="text-primary"
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
                <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
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
