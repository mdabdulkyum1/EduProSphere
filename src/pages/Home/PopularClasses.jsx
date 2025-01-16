
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const PopularClasses = () => {
  const popularClasses = [
    {
      id: 1,
      image: "assets/class1.jpg", // Replace with the actual image path
      title: "Web Development Bootcamp",
      description: "Learn full-stack web development with hands-on projects.",
      enrollment: 4500,
    },
    {
      id: 2,
      image: "assets/class2.jpg",
      title: "Data Science Mastery",
      description: "Master data analysis, visualization, and machine learning.",
      enrollment: 4000,
    },
    {
      id: 3,
      image: "assets/class3.jpg",
      title: "Digital Marketing Pro",
      description: "Become a certified expert in digital marketing strategies.",
      enrollment: 3800,
    },
    {
      id: 4,
      image: "assets/class4.jpg",
      title: "Graphic Design Essentials",
      description: "Learn creative graphic design tools and principles.",
      enrollment: 3600,
    },
    {
      id: 5,
      image: "assets/class5.jpg",
      title: "Cybersecurity Basics",
      description: "Understand core principles of cybersecurity and threats.",
      enrollment: 3400,
    },
    {
      id: 6,
      image: "assets/class6.jpg",
      title: "Business Analytics Expert",
      description: "Leverage data to drive business decision-making.",
      enrollment: 3200,
    },
  ];

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
            <SwiperSlide key={course.id}>
              <div className="bg-white dark:bg-dark-background rounded-lg shadow-md overflow-hidden">
                <img
                  src={course.image}
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
                    Enrollment: {course.enrollment}
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
