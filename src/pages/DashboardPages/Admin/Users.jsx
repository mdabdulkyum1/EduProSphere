import { useQuery } from '@tanstack/react-query';
import useAuth from './../../../hooks/GetAuthInfo/useAuth';
import useAxiosSecure from '../../../hooks/AxiosSecure/useAxiosSecure';
import Swal from 'sweetalert2';
import useUserPagination from '../../../hooks/pagination/useUserPagination';
import { Helmet } from 'react-helmet-async';



const Users = () => {
  
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const { count,
      currentPage,
      numberOfPages,
      pages,
      setCurrentPage,
      handelPrevBtn,
      handelNextBtn} = useUserPagination();

    const {data: users = [], isLoading, refetch } = useQuery({
        queryKey: ["users", user?.email, currentPage],
        queryFn: async ()=> {
          const {data} = await axiosSecure.get(`/users/${user?.email}?page=${currentPage}&size=${10}`)
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
              <th className="p-3 border border-light-border dark:border-dark-border">Email</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
    
  
    const handelMakeAdmin = async (id, newRole)=>{
      Swal.fire({
        title: `Are you sure Make ${newRole}`,
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: `Yes, make to ${newRole}`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          const newRoleInfo = { role: newRole };
          const { data } = await axiosSecure.patch(`/user/${id}`, newRoleInfo);
          if (data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Success",
              text: `Now ${newRole} this user.`,
              icon: "success",
            });
          }
        }
      });

    }



  return (
    <>
    <Helmet>
      <title>EduProSphere | Users</title>
    </Helmet>
      <div className="p-6 bg-white dark:bg-dark-background rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Users</h2>


      <div className="overflow-x-auto">
        <table className="table table-xs md:table-lg border-collapse border border-gray-200 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">Image</th>
              <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">Email</th>
              <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">
                  <img src={user.photo} alt={user.name} className="w-10 h-10 rounded-full" />
                </td>
                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">{user.name}</td>
                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">{user.email}</td>
                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">
                  {user.role === "admin" ? (
                    <button
                      className="bg-gray-400 text-white px-4 py-1 rounded cursor-not-allowed"
                      disabled
                    >
                      Admin
                    </button>
                  ) : (
                    <button onClick={()=>handelMakeAdmin(user._id, "admin")} className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                      Make Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>



        <div className="flex justify-around items-center">
          <div className="">
            Showing 1-10 of {count}
          </div>
          <div className="my-12">
            <div className="text-center pagination-div">
              <button
                className="btn bg-primary"
                onClick={handelPrevBtn}
                disabled={currentPage === 0}
              >
                Prev
              </button>
              {pages.map((page) => (
                <button
                  className={`btn ${
                    currentPage === page ? "bg-yellow-500" : ""
                  }`}
                  onClick={() => page !== "..." && setCurrentPage(page)}
                  disabled={page === "..."}
                  key={page}
                >
                  {page === "..." ? "..." : page + 1}
                </button>
              ))}
              <button
                className="btn bg-primary"
                onClick={handelNextBtn}
                disabled={currentPage === numberOfPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
    );
  };
  
  export default Users;
  