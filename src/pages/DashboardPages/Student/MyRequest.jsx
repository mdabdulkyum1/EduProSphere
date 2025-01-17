import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/GetAuthInfo/useAuth";
import useAxiosSecure from "../../../hooks/AxiosSecure/useAxiosSecure";
import Loading from "../../../components/shared/Loading/Loading";

const MyRequest = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: myReq = {}, isLoading, isError } = useQuery({
    queryKey: ["my-req", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/my-request/${user?.email}`);
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
        <Loading message="Loading your request status..."></Loading>
      </div>
    );
  }

  if (isError || !myReq.status) {
    return (
      <div className="flex justify-center items-center h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
        <p className="text-xl font-medium">Unable to fetch your request status.</p>
      </div>
    );
  }

  const statusColors = {
    pending: "text-yellow-500",
    approved: "text-green-500",
    rejected: "text-red-500",
  };

  return (
    <div className="p-6 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text min-h-screen">
      <h1 className="text-2xl font-bold mb-6">My Request Status</h1>
      <div className="bg-white dark:bg-dark-background rounded shadow p-6">
        <h2 className="text-lg font-medium mb-2">Request Details:</h2>
        <p className="mb-4">
          <span className="font-semibold">Name:</span> {myReq.name || "N/A"}
        </p>
        <p className="mb-4">
          <span className="font-semibold">Email:</span> {myReq.email || "N/A"}
        </p>
        <p className="mb-4">
          <span className="font-semibold">Experience:</span> {myReq.experience || "N/A"}
        </p>
        <p className="mb-4">
          <span className="font-semibold">Category:</span> {myReq.category || "N/A"}
        </p>
        <p>
          <span className="font-semibold">Status:</span>{" "}
          <span className={`${statusColors[myReq.status] || "text-gray-500"} font-medium`}>
            {myReq.status || "Pending"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default MyRequest;
