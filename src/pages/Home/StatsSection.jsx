

const StatsSection = () => {
  return (
    <section className="py-16 bg-light-background dark:bg-dark-background">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center">
        {/* Left Side: Stats Cards */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light-text dark:text-dark-text">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {/* Card: Total Users */}
            <div className="bg-white dark:bg-dark-background rounded-lg shadow-md p-6 flex items-center">
              <div className="bg-accent text-white rounded-full w-16 h-16 flex justify-center items-center text-2xl font-bold mr-4">
                👤
              </div>
              <div>
                <h4 className="text-lg font-semibold text-light-text dark:text-dark-text">
                  Total Users
                </h4>
                <p className="text-secondary text-sm">12,500+</p>
              </div>
            </div>
            {/* Card: Total Classes */}
            <div className="bg-white dark:bg-dark-background rounded-lg shadow-md p-6 flex items-center">
              <div className="bg-secondary text-white rounded-full w-16 h-16 flex justify-center items-center text-2xl font-bold mr-4">
                📚
              </div>
              <div>
                <h4 className="text-lg font-semibold text-light-text dark:text-dark-text">
                  Total Classes
                </h4>
                <p className="text-secondary text-sm">350+</p>
              </div>
            </div>
            {/* Card: Total Enrollments */}
            <div className="bg-white dark:bg-dark-background rounded-lg shadow-md p-6 flex items-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex justify-center items-center text-2xl font-bold mr-4">
                🎓
              </div>
              <div>
                <h4 className="text-lg font-semibold text-light-text dark:text-dark-text">
                  Total Enrollments
                </h4>
                <p className="text-secondary text-sm">65,000+</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Relevant Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src="assets/achievement.jpg"
            alt="Achievements"
            className="rounded-lg shadow-lg max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
