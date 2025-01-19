import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from "../../hooks/AxiosPublic/useAxiosPublic";

const PopularClasses = () => {
  
  const axiosPublic = useAxiosPublic();

  const { data: popularClasses = [], isLoading, error } = useQuery({
    queryKey: ['popularClasses'],
    queryFn: async () => {
      const {data} = await axiosPublic.get('/popular-classes'); 
      return data;
    },
  });

  if (isLoading) {
    return (
      <section className="py-16 bg-light-background dark:bg-dark-background">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-light-text dark:text-dark-text">
            Popular
          </h2>
          <p className="text-center text-light-text dark:text-dark-text mb-12">
            Loading Popular course...
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-background rounded-lg shadow-md p-6 animate-pulse"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                  <div className="ml-4 flex-1">
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Handle error state
  if (error) {
    return (
      <section className="py-16 bg-light-background dark:bg-dark-background">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-light-text dark:text-dark-text">
            Popular Classes
          </h2>
          <p className="text-center text-light-text dark:text-dark-text">
            Failed to load classes. Please try again later.
          </p>
        </div>
      </section>
    );
  }

  // Render the popular classes
  return (
    <section className="py-16 bg-light-background dark:bg-dark-background">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-light-text dark:text-dark-text">
          Popular Classes
        </h2>
        <p className="text-center text-light-text dark:text-dark-text mb-12">
          Explore our top classes with the highest enrollment and start your learning journey today.
        </p>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {popularClasses.map((course) => (
            <SwiperSlide key={course._id}>
              <div className="bg-white dark:bg-dark-background rounded-lg shadow-md overflow-hidden">
                <img
                  src={course.photoUrl}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-light-text dark:text-dark-text mb-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-light-text dark:text-dark-text mb-4">
                    {course.description}
                  </p>
                  <p className="text-sm font-medium text-accent">
                    Enrollment: {course.totalEnrolment}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularClasses;
