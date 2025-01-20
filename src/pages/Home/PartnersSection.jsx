const PartnersSection = () => {
  const partners = [
    {
      id: 1,
      logo: "https://i.ibb.co.com/j5ybbPS/leartech-Logo.jpg", // Replace with actual logo URL
      name: "LearnTech",
      description: "Innovative technology solutions for modern education.",
    },
    {
      id: 2,
      logo: "https://i.ibb.co.com/GvndQyP/Global-Classroom-Logo.jpg",
      name: "GlobalClassrooms",
      description: "Connecting students and educators across the globe.",
    },
    {
      id: 3,
      logo: " https://i.ibb.co.com/vPN9Qzf/Skill-Boost-Logo.jpg",
      name: "SkillBoost",
      description: "Empowering individuals with industry-relevant skills.",
    },
    {
      id: 4,
      logo: "https://i.ibb.co.com/1MZ5MMz/phLogo.jpg",
      name: "Programming hero",
      description: "Shaping the future of learning with sustainable solutions.",
    },
  ];

  return (
    <section className="py-16 bg-[#F3F6F8] dark:bg-[#111924]">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#0073B1] dark:text-slate-gray">
          Our Partners & Collaborators
        </h2>
        <p className="text-center text-[#212121] dark:text-[#A3B1AF] mb-12">
          EduProSphere is proud to partner with organizations committed to making education accessible, innovative, and impactful for everyone.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex flex-col items-center text-center bg-white dark:bg-[#121E2E] border border-[#E1E9EE] dark:border-[#0E1623] rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-24 h-24 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-[#0073B1] dark:text-slate-gray">
                {partner.name}
              </h3>
              <p className="text-sm text-[#212121] dark:text-[#A3B1AF]">
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
