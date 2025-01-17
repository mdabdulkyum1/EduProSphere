import { useForm } from "react-hook-form";
import useAuth from "../../hooks/GetAuthInfo/useAuth";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../../hooks/AxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";

const TeachOn = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const mutation = useMutation({
    mutationFn: (teacherData) => {
      return axiosSecure.post("/teacher", teacherData);
    },
  });

  const { data: myReq = {}, refetch } = useQuery({
    queryKey: ["my-req", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/my-request/${user?.email}`);
      return data;
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const teachData = { ...data, status: "pending" };

    try {
      const { data } = await mutation.mutateAsync(teachData);
      if (data?.insertedId) {
        reset();
        Swal.fire({
          title: "Success",
          text: "Please Wait for admin approval!",
          icon: "success",
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handelUpdateStatus = async() => {
        const newStatus = {
          id: myReq._id, 
          status: "pending"
        }
        try{
          const {data} = await axiosSecure.patch(`/teacher-pending`, newStatus);
          if(data?.modifiedCount > 0 ){
             Swal.fire({
             title: "Wait for Admin response!",
             icon: "success"
          });
              refetch();
          }
      }catch(err){
        console.error(err);
      }
  }

  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text pt-20">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6 text-primary">
          Teach on EduProSphere
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md"
        >
          <div className="space-y-6">
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-2 p-3 w-full bg-light-border dark:bg-dark-background border rounded-md"
                {...register("name", { required: "Name is required" })}
                defaultValue={user?.displayName}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Image (User Image) */}
            <div className="space-y-2">
              <label className="block text-lg font-medium" htmlFor="image">
                Image
              </label>
              <div className="flex justify-center">
                {/* Image Preview */}
                <img
                  src={user?.photoURL}
                  alt="User"
                  className="w-32 h-32 object-cover rounded-full"
                />
              </div>
              <label className="block text-lg font-medium" htmlFor="image">
                You can change url
              </label>
              <input
                type="text"
                id="photo"
                className="mt-2 p-3 w-full bg-light-border dark:bg-dark-background border rounded-md"
                {...register("photo", { required: "Photo is required" })}
                defaultValue={user?.photoURL}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-2 p-3 w-full bg-light-border dark:bg-dark-background border rounded-md"
                {...register("email", { required: "Email is required" })}
                readOnly
                value={user?.email}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Experience */}
            <div className="mb-4">
              <label htmlFor="experience" className="block text-lg font-medium">
                Experience
              </label>
              <select
                id="experience"
                className="mt-2 p-3 w-full bg-light-border dark:bg-dark-background border rounded-md"
                {...register("experience", {
                  required: "Experience level is required",
                })}
              >
                <option value="">Select Experience Level</option>
                <option value="beginner">Beginner</option>
                <option value="mid-level">Mid-Level</option>
                <option value="experienced">Experienced</option>
              </select>
              {errors.experience && (
                <p className="text-red-500 text-sm">
                  {errors.experience.message}
                </p>
              )}
            </div>

            {/* Title */}
            <div className="mb-4">
              <label htmlFor="title" className="block text-lg font-medium">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="mt-2 p-3 w-full bg-light-border dark:bg-dark-background border rounded-md"
                {...register("title", { required: "Title is required" })}
                placeholder="Enter title for the class"
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>

            {/* Category */}
            <div className="mb-4">
              <label htmlFor="category" className="block text-lg font-medium">
                Category
              </label>
              <select
                id="category"
                className="mt-2 p-3 w-full bg-light-border dark:bg-dark-background border rounded-md"
                {...register("category", { required: "Category is required" })}
              >
                <option value="">Select Category</option>
                <option value="web-development">Web Development</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="graphic-design">Graphic Design</option>
                <option value="business">Business</option>
                <option value="data-science">Data Science</option>
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm">
                  {errors.category.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="mb-4">
              {myReq.status === "rejected" ? (
               ""
              ) : (
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-white font-bold rounded-md hover:bg-secondary transition duration-200"
                >
                  Submit for Review
                </button>
              )}
            </div>
          </div>
        </form>
              <div className="">
                  {myReq.status === "rejected" &&  <button
                  onClick={handelUpdateStatus}
                  className="w-full py-3 bg-primary text-white font-bold rounded-md hover:bg-secondary transition duration-200"
                >
                  request to another button
                </button>}
              </div>
      </div>
    </div>
  );
};

export default TeachOn;
