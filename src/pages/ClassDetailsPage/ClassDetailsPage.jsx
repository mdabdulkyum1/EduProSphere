import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/GetAuthInfo/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/AxiosPublic/useAxiosPublic';
import { Helmet } from 'react-helmet-async';

const ClassDetailsPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const {id}  = useParams();

  const axiosPublic = useAxiosPublic();

  const { data: classDetails = {}, isLoading } = useQuery({
    queryKey: ['class-details', user?.email],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`class-details/${id}`);
      return data;
    },
  });

  if(isLoading){
    return  ( <div className="min-h-screen flex items-center justify-center bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text p-6">
      <div className="max-w-4xl w-full bg-white dark:bg-dark-background rounded-xl shadow-lg border border-light-border dark:border-dark-border">
        <div className="grid md:grid-cols-2">
          {/* Left Section - Image Skeleton */}
          <div className="h-full">
            <div className="skeleton w-full h-64 md:h-full rounded-l-xl md:rounded-none"></div>
          </div>

          {/* Right Section - Details Skeleton */}
          <div className="p-6 space-y-6">
            <div className="skeleton h-8 w-3/4"></div>
            <div className="skeleton h-4 w-1/2"></div>
            <div className="skeleton h-20 w-full"></div>
            <div className="skeleton h-6 w-1/4"></div>
            <div className="skeleton btn  w-full"></div>
          </div>
        </div>
      </div>
    </div>)
  }

  const handlePayment = (id) => {
    navigate('/payment', { state: {classId: id } }); 
  };

  return (
    <>
    <Helmet>
      <title>EduProSphere | Class Details</title>
    </Helmet>
    <div className="min-h-screen flex items-center justify-center bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text p-6">
      <div className="max-w-4xl w-full bg-white dark:bg-dark-background rounded-xl shadow-lg border border-light-border dark:border-dark-border">
        <div className="grid md:grid-cols-2">
          {/* Left Section - Image */}
          <div className="">
            <img
              src={classDetails.photoUrl || 'https://via.placeholder.com/400'}
              alt={classDetails.title || 'Class Thumbnail'}
              className="object-cover h-full w-full rounded-l-xl md:rounded-none"
            />
          </div>

          {/* Right Section - Details */}
          <div className="p-6 space-y-6">
            <h1 className="text-2xl md:text-3xl font-bold text-primary dark:text-accent">
              {classDetails.title || 'Class Title'}
            </h1>
            <p className="text-sm text-gray-500">
              By {classDetails.name || 'Instructor Name'} |{' '}
              {classDetails.email || 'Email not provided'}
            </p>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              {classDetails.description || 'No description available.'}
            </p>
            <div className="text-lg font-semibold text-secondary dark:text-accent">
              Price: ${classDetails.price || 'N/A'}
            </div>
            <button
              onClick={()=>handlePayment(classDetails._id)}
              className="w-full py-3 text-white bg-secondary rounded-lg hover:bg-secondary/90 focus:outline-none focus:ring focus:ring-secondary/50 transition"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ClassDetailsPage;
