
const LearningPathsSection = () => {
  return (
    <section className="py-16 bg-light-background dark:bg-dark-background">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-light-text dark:text-dark-text text-center mb-8">
          Explore Learning Paths
        </h2>
        <p className="text-lg text-light-text dark:text-dark-text text-center mb-12">
          Find the perfect learning path tailored to your career goals, whether you{"'"}re looking to start a new skill, master a topic, or explore a hobby.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Learning Path Cards */}
          <div className="p-6 bg-white dark:bg-dark-background shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Web Development
            </h3>
            <p className="text-light-text dark:text-dark-text">
              Learn HTML, CSS, JavaScript, and modern frameworks like React to build amazing websites.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-dark-background shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Data Science
            </h3>
            <p className="text-light-text dark:text-dark-text">
              Master data analysis, Python, and machine learning to explore the world of data.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-dark-background shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Graphic Design
            </h3>
            <p className="text-light-text dark:text-dark-text">
              Discover creative tools like Photoshop and Illustrator to design stunning visuals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPathsSection;
