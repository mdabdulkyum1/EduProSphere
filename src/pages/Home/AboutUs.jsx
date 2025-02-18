
const AboutUs = () => {
  return (
    <section className="bg-light-background dark:bg-dark-background py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-primary dark:text-accent mb-6">
          Empowering Learners, Transforming Futures
        </h2>
        <p className="text-lg text-light-text dark:text-dark-text leading-relaxed mb-6">
          At <span className="font-semibold text-secondary">EduProSphere</span>, we believe in the power of education to change lives. Our platform is designed to provide high-quality learning experiences, equipping individuals with the skills they need to excel in their careers and personal growth.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="p-6 bg-white dark:bg-dark-background rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold text-primary mb-3">Expert-Led Courses</h3>
          <p className="text-light-text dark:text-dark-text">
            Learn from industry professionals with real-world experience and gain skills that truly matter.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-white dark:bg-dark-background rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold text-secondary mb-3">Innovative Learning</h3>
          <p className="text-light-text dark:text-dark-text">
            Interactive lessons, hands-on projects, and AI-driven recommendations for a personalized experience.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-white dark:bg-dark-background rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold text-accent mb-3">Global Community</h3>
          <p className="text-light-text dark:text-dark-text">
            Connect with like-minded learners, collaborate on projects, and grow together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
