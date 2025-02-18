
const WhyChooseUsSection = () => {
    return (
        <section className="bg-white dark:bg-dark-background py-16 px-6 md:px-12 lg:px-24">
      <h2 className="text-3xl font-bold text-center text-light-text dark:text-dark-text mb-6">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-light-background dark:bg-dark-background rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-primary">Expert Instructors</h3>
          <p className="text-light-text dark:text-dark-text mt-2">
            Learn from industry experts with years of experience.
          </p>
        </div>
        <div className="p-6 bg-light-background dark:bg-dark-background rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-secondary">Flexible Learning</h3>
          <p className="text-light-text dark:text-dark-text mt-2">
            Study at your own pace with our flexible online courses.
          </p>
        </div>
        <div className="p-6 bg-light-background dark:bg-dark-background rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-accent">Certification</h3>
          <p className="text-light-text dark:text-dark-text mt-2">
            Get certified and boost your career prospects.
          </p>
        </div>
      </div>
    </section>
    );
};

export default WhyChooseUsSection;