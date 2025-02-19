import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/AxiosSecure/useAxiosSecure";
import useAuth from "../../../hooks/GetAuthInfo/useAuth";
import Swal from "sweetalert2";
import { imageUpload } from "../../../Api/utils";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MyClass = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: classes = [], refetch } = useQuery({
    queryKey: ["my-classes", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/classes?email=${user?.email}`);
      return data;
    },
  });

  const handleUpdate = async (id, title, price) => {
    const { value: formValues } = await Swal.fire({
      title: "Update Class Details",
      html: `
        <form id="class-update-form" class="space-y-4">
          <!-- Title -->
          <div class="flex flex-col">
            <label for="title" class="text-gray-700 dark:text-gray-800 text-sm font-medium mb-1">
              Title
            </label>
            <input 
              id="title" 
              class="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              type="text" 
              placeholder=${title}
              required 
            />
          </div>
  
          <!-- Price -->
          <div class="flex flex-col">
            <label for="price" class="text-gray-700 dark:text-gray-800 text-sm font-medium mb-1">
              Price
            </label>
            <input 
              id="price" 
              class="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              type="number" 
              placeholder="Enter price" 
              value=${price}
              required 
            />
          </div>
  
          <!-- Description -->
          <div class="flex flex-col">
            <label for="description" class="text-gray-700 dark:text-gray-800 text-sm font-medium mb-1">
              Description
            </label>
            <textarea 
              id="description" 
              class="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter description" 
              rows="3" 
              required
            ></textarea>
          </div>
  

          <!-- Image -->
          <div class="flex flex-col">
            <label for="image" class="text-gray-700 dark:text-gray-800 text-sm font-medium mb-1">
              Image
            </label>
             <input
            id="image"
            type="file"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
          </div>
        </form>
      `,
      focusConfirm: false,
      confirmButtonText: "Update",
      confirmButtonColor: "#273",
      showCancelButton: true,
      preConfirm: async () => {
        const title = document.getElementById("title").value;
        const price = document.getElementById("price").value;
        const description = document.getElementById("description").value.trim();
        const imageInput = document.getElementById("image");
        const imageFile = imageInput.files[0];

        Swal.fire({
          title: "Uploading...",
          text: "Please wait while your image is being uploaded.",
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          },
        });

        // Validation
        if (!title || !price || !description || !imageFile) {
          Swal.showValidationMessage("Please fill out all fields!");
          return false;
        }
        const photoUrl = await imageUpload(imageFile);

        if (photoUrl) {
          Swal.close();
        }

        return { id, title, price: parseFloat(price), description, photoUrl };
      },
    });

    if (formValues) {
      // Assuming form submission logic here
      try {
        const { data } = await axiosSecure.patch("/class-update", formValues);

        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Class Updated",
            text: "Class details updated successfully!",
          });
          refetch();
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: "An error occurred while updating the class.",
        });
        console.error(error);
      }
    }
  };

  const handelDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await axiosSecure.delete(`/class-delete/${id}`);
          // console.log(data.deletedCount > 0);
          if (data) {
            Swal.fire({
              title: "Delete!",
              icon: "success",
            });
            refetch();
          }
        } catch (err) {
          console.error(err);
        }
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>EduProSphere | My Class</title>
      </Helmet>
      <div className="lg:p-6 bg-light-background dark:bg-dark-background rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 px-6 text-light-text dark:text-dark-text">
          My Classes
        </h2>

        {/* Displaying classes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {classes.map((cls) => (
            <div
              key={cls._id}
              className="border border-light-border dark:border-dark-border rounded-lg p-4 bg-white dark:bg-dark-background"
            >
              {/* Image */}
              <img
                src={cls.photoUrl}
                alt={cls.title}
                className="w-full h-32 object-cover rounded-t-md mb-4"
              />

              {/* Title */}
              <h3 className="text-lg font-bold mb-2 text-light-text dark:text-dark-text">
                {cls.title}
              </h3>

              {/* Name & Email */}
              <p className="text-sm text-secondary mb-1">Name: {cls.name}</p>
              <p className="text-sm text-secondary mb-3">Email: {cls.email}</p>

              {/* Price & Description */}
              <p className="text-sm text-accent mb-2">Price: ${cls.price}</p>
              <p className="text-sm text-light-text dark:text-dark-text mb-4">
                {cls.description.length > 100
                  ? cls.description.substring(0, 97) + "..."
                  : cls.description}
              </p>

              {/* Status */}
              <p
                className={`text-sm font-semibold mb-4 ${
                  cls.status === "pending"
                    ? "text-yellow-500"
                    : "text-green-500"
                }`}
              >
                Status: {cls.status}
              </p>

              {/* Actions */}
              <div className="flex flex-wrap space-x-2">
                <button
                  onClick={() =>
                    handleUpdate(cls._id, cls.title, cls.price, cls.description)
                  }
                  className="bg-primary text-white py-1 px-3 rounded-md hover:bg-green-600"
                >
                  Update
                </button>
                <button
                  onClick={() => handelDelete(cls._id)}
                  className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
                <Link to={`/dashboard/my-class/${cls._id}`}>
                  <button
                    className={`${
                      cls.status === "pending" && "cursor-not-allowed"
                    } bg-secondary text-white py-1 px-3 rounded-md hover:bg-blue-600`}
                    disabled={cls.status === "pending"}
                  >
                    See Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyClass;
