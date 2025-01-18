import { Link } from "react-router-dom";


const InspireTeachersSection = () => {
  return (
    <section className="py-16 bg-light-background dark:bg-dark-background">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center">
        {/* Left Side: Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light-text dark:text-dark-text">
            Become an Educator on EduProSphere
          </h2>
          <p className="text-lg text-light-text dark:text-dark-text">
            Share your knowledge, inspire learners worldwide, and earn while doing what you love. Join a thriving community of passionate teachers committed to making a difference.
          </p>
          <ul className="list-disc pl-6 text-light-text dark:text-dark-text">
            <li>Connect with a global audience of students.</li>
            <li>Access intuitive tools to design engaging courses.</li>
            <li>Earn competitive compensation for your efforts.</li>
          </ul>
          <Link to="/tech-on">
          <button className="mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-secondary transition duration-300">
            Join as a Teacher
          </button>
          </Link>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src="assets/teacher-inspire.jpg"
            alt="Inspire Teachers"
            className="rounded-lg shadow-lg max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default InspireTeachersSection;
