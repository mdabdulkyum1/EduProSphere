
import { useForm } from "react-hook-form";
import useAuth from './../../../hooks/GetAuthInfo/useAuth';
import useAxiosSecure from "../../../hooks/AxiosSecure/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import { imageUpload } from "../../../Api/utils";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AddClass = () => {

  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const {data: myProfileData = {}, } = useQuery({
    queryKey: ["user-profile", user?.email], 
    enabled: !!user?.email,
    queryFn: async ()=> {
      const {data} = await axiosSecure.get(`/user-profile/${user?.email}`);
      return data;
    }
  })

  const mutation = useMutation({
    mutationFn: (classData)=> {
        return axiosSecure.post('/classes', classData)
    }
  })



  const { register, handleSubmit, formState: { errors } , reset} = useForm();

  const onSubmit = async (data) => {
    const {title, price, image, description} = data;
    const imageFile = image[0];
    const photoUrl = await imageUpload(imageFile);
    
    const classData = { 
      title,
      price: parseFloat(price),
      description,
      photoUrl, 
      email: user?.email,
      name: myProfileData.name,
      status: "pending"
    };
    
    try{
          const {data} = await mutation.mutateAsync(classData);
          if (data?.insertedId) {
                  reset();
                  Swal.fire({
                    title: "Success",
                    text: "Please Wait for admin approval!",
                    icon: "success",
                  });
                  navigate('/dashboard/my-classes');
                }
    }catch(err){
      console.error(err);
    }
      
  };

  return (
    <>
    <Helmet>
      <title>EduProSphere | Add Class</title>
    </Helmet>
    <div className="p-6 bg-white dark:bg-dark-background rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-6">Add New Class</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        
        {/* Title Field */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            id="title"
            type="text"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>

        {/* Name (Not Editable) */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            id="name"
            type="text"
            defaultValue={myProfileData.name}
            readOnly
            className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-gray-100"
          />
        </div>

        {/* Email (Not Editable) */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            defaultValue={user?.email}
            readOnly
            className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-gray-100"
          />
        </div>

        {/* Price Field */}
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
          <input
            id="price"
            type="number"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            {...register("price", { required: "Price is required" })}
          />
          {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
        </div>

        {/* Description Field */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            rows="4"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            {...register("description", { required: "Description is required" })}
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        </div>

        {/* Image Field */}
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
          <input
            id="image"
            type="file"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            {...register("image", { required: "Class image is required" })}
          />
          {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
          >
            Add Class
          </button>
        </div>
      </form>
    </div>
  
    </>
  );
};

export default AddClass;
