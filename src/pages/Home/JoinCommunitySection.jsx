import communityImg from "../../assets/join.png";
import { Link } from 'react-router-dom';

const JoinCommunitySection = () => {
  return (
    <section className="py-16 bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center">
        {/* Left Side: Content */}
        <div className="md:w-1/2 space-y-6 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Join Our Thriving Community
          </h2>
          <p className="text-lg leading-relaxed">
            Become part of a growing network of learners and educators sharing
            knowledge, collaborating, and transforming lives together.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-lg">
              <strong>10,000+</strong> active students
            </li>
            <li className="text-lg">
              <strong>500+</strong> expert educators
            </li>
            <li className="text-lg">
              <strong>100+</strong> successful career transitions
            </li>
          </ul>
          <Link to="/all-classes">
            <button className="mt-6 px-8 py-4 bg-accent text-primary font-semibold rounded-lg shadow-md hover:bg-light-background hover:text-light-text dark:hover:bg-dark-text dark:hover:text-dark-background transition duration-300">
              Join Now
            </button>
          </Link>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={communityImg}
            alt="Community"
            className="rounded-lg shadow-lg max-w-full transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinCommunitySection;
