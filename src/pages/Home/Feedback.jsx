import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./../../hooks/AxiosPublic/useAxiosPublic";
import ReactStars from "react-rating-stars-component";

const FeedbackSection = () => {
  const axiosPublic = useAxiosPublic();

  // Fetch feedbacks from the backend
  const {
    data: feedbacks = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/all-feedbacks");
      return data;
    },
  });

  if (isLoading) {
    return (
      <section className="py-16 bg-light-background dark:bg-dark-background">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-light-text dark:text-dark-text">
            Teacher Feedback
          </h2>
          <p className="text-center text-light-text dark:text-dark-text mb-12">
            Loading feedback...
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

  if (isError) {
    return (
      <section className="py-16 bg-light-background dark:bg-dark-background">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-light-text dark:text-dark-text">
            Teacher Feedback
          </h2>
          <p className="text-center text-light-text dark:text-dark-text mb-12">
            Failed to load feedback. Please try again later.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-light-background dark:bg-dark-background">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-light-text dark:text-dark-text">
          Teacher Feedback
        </h2>
        <p className="text-center text-light-text dark:text-dark-text mb-12">
          See what teachers are saying about our classes and programs.
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
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {/* Render dynamic feedbacks */}
          {feedbacks.map((feedback) => {
            return (
              <SwiperSlide key={feedback._id}>
                <div className="relative bg-white dark:bg-dark-background rounded-xl shadow-lg p-6 max-w-md mx-auto my-6">
                  {/* Top Quote Icon */}
                  <div className="absolute -top-2 left-6 bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full text-xl pt-2">
                    &#8220;
                  </div>

                  <div className="flex items-center">
                    {/* Avatar */}
                    <div className="w-20 h-20 rounded-full border-4 border-primary flex items-center justify-center bg-gray-100">
                      <img
                        src={feedback.image}
                        alt={feedback.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    </div>

                    <div className="ml-4">
                      {/* Name & Designation */}
                      <h4 className="text-lg font-semibold text-light-text dark:text-dark-text">
                        {feedback.name}
                      </h4>
                      <p className="text-sm text-secondary">
                        {feedback.classTitle}
                      </p>

                      {/* Star Rating */}
                      <ReactStars
                        count={5}
                        value={feedback.rating}
                        size={18}
                        edit={false}
                        isHalf={true}
                        activeColor="#FFB400"
                      />
                    </div>
                  </div>

                  {/* Feedback Text */}
                  <p className="text-sm text-light-text dark:text-dark-text italic mt-4">
                    {feedback.description}
                  </p>

                  {/* Bottom Quote Icon */}
                  <div className="absolute -bottom-3 right-6 bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full text-xl pt-2">
                    &#8221;
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default FeedbackSection;
