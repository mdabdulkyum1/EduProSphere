import { FaFacebook, FaGithub } from "react-icons/fa";
import authBg from "../../assets/authentication.png";
import signUpImg from "../../assets/authentication1.png";
import { Helmet } from "react-helmet-async";
import ContinueGoogle from "../../components/shared/GoogleSignUp/ContinueGoogle";
import { useForm } from "react-hook-form";
import { imageUpload, saveUser } from "../../Api/utils";
import useAuth from "../../hooks/GetAuthInfo/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";

const SignUp = () => {
  const [loading, setLoading] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const targetPath = location?.state ? `${location.state}` : "/";

  const onSubmit = async (data) => {
    const { name, email, photo, password } = data;
    const photoFile = photo[0];
    const photoUrl = await imageUpload(photoFile);

    if(loading){
      Swal.fire({
        title: 'Registering User...',
        text: 'Please wait while we process the registration.',
        icon: 'info',
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });
    }

    try {
      const result = await createUser(email, password);
      await updateUserProfile(name, photoUrl);
      const dbData = await saveUser(result?.user);

      if (result?.user && dbData.insertedId) {
        setLoading(false)

        Swal.fire({
          title: 'Success!',
          text: 'User registration completed successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
      });
        navigate(targetPath);
        reset();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Helmet>
        <title>EduProSphere | SignUp</title>
      </Helmet>
      <div className="absolute top-2 left-52">
        <Link to="/">
          <button className="btn btn-sm bg-yellow-500">Back to home</button>
        </Link>
      </div>
      <div
        className="min-h-screen flex items-center justify-center px-4"
        style={{
          backgroundImage: `url(${authBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full flex flex-col md:flex-row">
          {/* Form Section */}
          <div className="w-full md:w-1/2 md:pr-8 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
              Sign Up
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name Input */}
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Type here"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  required
                />
                {errors.name && (
                  <span className="text-red-500">Name field is required</span>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="Type here"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  required
                />
                {errors.email && (
                  <span className="text-red-500">Email field is required</span>
                )}
              </div>

              {/* Photo Input */}
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="photo"
                >
                  Photo
                </label>
                <input
                  type="file"
                  name="photo"
                  {...register("photo", {
                    required: "Choose a Profile Photo!",
                  })}
                  className="file-input w-full max-w-xs border border-gray-300 rounded-lg bg-yellow-500 text-gray-700 px-4 py-2 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50"
                />
              </div>

              {/* Error Messages */}
              {errors.photo && (
                <span className="text-red-500">{errors.photo.message}</span>
              )}

              {/* Password Input */}
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  {...register("password", {
                    required: "Password field is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                    maxLength: {
                      value: 20,
                      message: "Password must not exceed 20 characters",
                    },
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
                      message:
                        "Password must contain A-Z a-z letters and numbers",
                    },
                  })}
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-lg p-2"
                />

                {/* Error Messages */}
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-yellow-600 text-white py-2 rounded-lg font-medium"
              >
                Sign Up
              </button>
            </form>

            {/* Login Redirect */}
            <p className="text-sm text-gray-500 mt-4 text-center md:text-left">
              Already registered?{" "}
              <Link to="/login" className="text-yellow-600 font-medium">
                Go to log in
              </Link>
            </p>

            {/* Social Media Sign Up */}
            <div className="flex items-center justify-center mt-6">
              <p className="text-sm text-gray-500">Or sign up with</p>
            </div>
            <div className="flex justify-center mt-4 space-x-4">
              {/* Social Media Buttons */}
              <button className="p-3 bg-gray-100 rounded-full shadow-lg">
                <FaFacebook className="text-blue-600" size={24} />
              </button>
              <ContinueGoogle></ContinueGoogle>
              <button className="p-3 bg-gray-100 rounded-full shadow-lg">
                <FaGithub className="text-gray-800" size={24} />
              </button>
            </div>
          </div>

          {/* Illustration Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src={signUpImg}
              alt="Sign Up Illustration"
              className="rounded-lg max-w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
