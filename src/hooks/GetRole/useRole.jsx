
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../AxiosSecure/useAxiosSecure';
import useAuth from '../GetAuthInfo/useAuth';



const useRole = () => {
    const axiosSecure = useAxiosSecure();
    const {user, loading} = useAuth();


    const {data: role = {} , isLoading: adminLoading} = useQuery({
        queryKey: ["role", user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async ()=> {
            const { data } = await axiosSecure(`/users/role/${user?.email}`);
            return data.role;
        }
    }) 

    return {role, adminLoading};
};

export default useRole;