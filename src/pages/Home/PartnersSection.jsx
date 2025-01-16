

const PartnersSection = () => {
  const partners = [
    {
      id: 1,
      logo: "assets/partner1.png", // Replace with actual logo URL
      name: "TechCorp",
      description: "Innovative solutions provider empowering businesses worldwide.",
    },
    {
      id: 2,
      logo: "assets/partner2.png",
      name: "EduPartners",
      description: "Collaborating to bring quality education to everyone.",
    },
    {
      id: 3,
      logo: "assets/partner3.png",
      name: "HealthConnect",
      description: "Transforming healthcare through cutting-edge technology.",
    },
    {
      id: 4,
      logo: "assets/partner4.png",
      name: "GreenFuture",
      description: "Driving sustainability with eco-friendly initiatives.",
    },
  ];

  return (
    <section className="py-16 bg-light-background dark:bg-dark-background">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-light-text dark:text-dark-text">
          Our Partners & Collaborators
        </h2>
        <p className="text-center text-light-text dark:text-dark-text mb-12">
          We are proud to work with exceptional organizations that share our vision for a better future.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex flex-col items-center text-center bg-white dark:bg-dark-background border border-light-border dark:border-dark-border rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-24 h-24 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-light-text dark:text-dark-text">
                {partner.name}
              </h3>
              <p className="text-sm text-light-text dark:text-dark-text">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
