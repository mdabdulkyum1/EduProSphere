
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const FeedbackSection = () => {
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
          {/* Static Feedback 1 */}
          <SwiperSlide>
            <div className="bg-white dark:bg-dark-background rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <img
                  src="assets/sarah.jpg"
                  alt="Sarah Johnson"
                  className="w-16 h-16 rounded-full object-cover border-2 border-accent"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-light-text dark:text-dark-text">
                    Sarah Johnson
                  </h4>
                  <p className="text-sm text-secondary">
                    Web Development Bootcamp
                  </p>
                </div>
              </div>
              <p className="text-sm text-light-text dark:text-dark-text italic">
                This class has been life-changing for me! The materials are
                top-notch.
              </p>
            </div>
          </SwiperSlide>

          {/* Static Feedback 2 */}
          <SwiperSlide>
            <div className="bg-white dark:bg-dark-background rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <img
                  src="assets/michael.jpg"
                  alt="Michael Lee"
                  className="w-16 h-16 rounded-full object-cover border-2 border-accent"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-light-text dark:text-dark-text">
                    Michael Lee
                  </h4>
                  <p className="text-sm text-secondary">
                    Data Science Mastery
                  </p>
                </div>
              </div>
              <p className="text-sm text-light-text dark:text-dark-text italic">
                The instructors are incredibly knowledgeable and
                approachable.
              </p>
            </div>
          </SwiperSlide>

          {/* Static Feedback 3 */}
          <SwiperSlide>
            <div className="bg-white dark:bg-dark-background rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <img
                  src="assets/emily.jpg"
                  alt="Emily Davis"
                  className="w-16 h-16 rounded-full object-cover border-2 border-accent"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-light-text dark:text-dark-text">
                    Emily Davis
                  </h4>
                  <p className="text-sm text-secondary">
                    Graphic Design Essentials
                  </p>
                </div>
              </div>
              <p className="text-sm text-light-text dark:text-dark-text italic">
                I’ve learned so much in such a short time. Highly recommend
                it!
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default FeedbackSection;
