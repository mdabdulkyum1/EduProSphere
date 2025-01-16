import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div className="absolute top-0 left-0 w-full">
      <div className="relative w-full">
        {/* Swiper Carousel Section */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          className="w-full h-[600px]"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div
              className="relative w-full h-full bg-cover bg-center bg-[url('assets/edu.png')]"
            >
              <div className="hero-overlay bg-black bg-opacity-60"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Welcome to EduProSphere
                </h1>
                <p className="text-lg md:text-xl">
                  Empowering education through innovation and technology.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div
              className="relative w-full h-full bg-cover bg-center bg-[url('assets/learnGrow.jpg')]"
            >
              <div className="hero-overlay bg-black bg-opacity-60"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Learn & Grow with Us
                </h1>
                <p className="text-lg md:text-xl">
                  Join a community committed to lifelong learning and growth.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div
              className="relative w-full h-full bg-cover bg-center bg-[url('assets/join.png')]"
            >
              <div className="hero-overlay bg-black bg-opacity-60"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Join Our Community
                </h1>
                <p className="text-lg md:text-xl">
                  Collaborate, innovate, and make a difference together.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
