import { FaChalkboardTeacher, FaUsers, FaBook, FaStar } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text mt-8">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-bold text-primary dark:text-accent">About EduManage</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          EduManage is a powerful platform designed to streamline skill learning and class management. Built on the MERN stack, it enhances interaction between students, tutors, and institutions.
        </p>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-6 bg-secondary dark:bg-primary text-white">
        <h2 className="text-3xl font-semibold text-center">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 max-w-6xl mx-auto">
          {[ 
            { icon: <FaChalkboardTeacher />, title: "Expert Tutors", desc: "Learn from the best professionals in the field." },
            { icon: <FaUsers />, title: "Community Support", desc: "Engage with fellow learners and grow together." },
            { icon: <FaBook />, title: "Rich Resources", desc: "Access a vast library of learning materials." },
            { icon: <FaStar />, title: "Certification", desc: "Get certified and boost your career prospects." }
          ].map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white dark:bg-dark-background shadow-lg rounded-lg">
              <div className="text-4xl text-primary dark:text-accent mb-4">{feature.icon}</div>
              <h3 className="text-xl text-black dark:text-white font-semibold">{feature.title}</h3>
              <p className="mt-2 text-light-text dark:text-dark-text">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center">Why Choose EduManage?</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white dark:bg-dark-background shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Personalized Learning</h3>
            <p className="mt-2">Customized course recommendations based on your learning style.</p>
          </div>
          <div className="p-6 bg-white dark:bg-dark-background shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Seamless Management</h3>
            <p className="mt-2">Easily track progress, schedule classes, and access study materials.</p>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 px-6 bg-accent text-light-text">
        <h2 className="text-3xl font-semibold text-center">What Our Users Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto">
          {[ 
            { name: "John Doe", feedback: "EduManage made learning so much easier!" },
            { name: "Jane Smith", feedback: "The best platform for managing my classes." },
            { name: "Michael Lee", feedback: "Highly recommend EduManage for students and tutors!" }
          ].map((testimonial, index) => (
            <div key={index} className="p-6 bg-white dark:bg-dark-background shadow-lg rounded-lg text-center">
              <p className="text-lg dark:text-white font-semibold">{testimonial.feedback}</p>
              <p className="mt-2 text-sm dark:text-white">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
