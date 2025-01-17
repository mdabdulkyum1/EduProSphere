import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/AxiosSecure/useAxiosSecure";
import useAuth from "../../../hooks/GetAuthInfo/useAuth";

const MyProfile = () => {
  
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();

  const {data: myProfileData = {}, } = useQuery({
    queryKey: ["user-profile", user?.email], 
    enabled: !!user?.email,
    queryFn: async ()=> {
      const {data} = await axiosSecure.get(`/user-profile/${user?.email}`);
      return data;
    }
  })


console.log(myProfileData);
  return (
    <div className="p-6 bg-white dark:bg-dark-background rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">My Profile</h2>
      <div className="flex items-center space-x-6">
        <img
          src={myProfileData.photo}
          alt={myProfileData.name}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h3 className="text-xl font-semibold">{myProfileData.name}</h3>
          <p className="text-sm text-gray-500">{myProfileData.role}</p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center space-x-4">
          <strong className="text-gray-700">Email:</strong>
          <p>{myProfileData.email}</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
