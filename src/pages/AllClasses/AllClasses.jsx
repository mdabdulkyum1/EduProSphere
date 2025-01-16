
const AllClasses = () => {
  const classes = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      teacherName: "John Doe",
      teacherImage: "assets/john.jpg",
      price: "$199",
      description: "Learn web development from scratch with this comprehensive course.",
      totalEnrollment: 250,
    },
    {
      id: 2,
      title: "Data Science with Python",
      teacherName: "Jane Smith",
      teacherImage: "assets/jane.jpg",
      price: "$299",
      description: "Master Python for data analysis and machine learning.",
      totalEnrollment: 180,
    },
    {
      id: 3,
      title: "Digital Marketing Essentials",
      teacherName: "Michael Lee",
      teacherImage: "assets/michael.jpg",
      price: "$149",
      description: "Understand the fundamentals of digital marketing and strategy.",
      totalEnrollment: 320,
    },
    {
      id: 4,
      title: "UI/UX Design Fundamentals",
      teacherName: "Emily Davis",
      teacherImage: "assets/emily.jpg",
      price: "$249",
      description: "Learn the basics of UI/UX design with hands-on projects.",
      totalEnrollment: 150,
    },
  ];

  return (
    <section className="py-20 bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center mt-6">All Available Classes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {classes.map((classItem) => (
            <div
              key={classItem.id}
              className="bg-white border border-green-200 dark:bg-dark-background p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={classItem.teacherImage}
                alt={classItem.teacherName}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{classItem.title}</h3>
              <p className="text-sm text-gray-500 mb-4">by {classItem.teacherName}</p>
              <p className="text-lg font-bold text-primary mb-4">{classItem.price}</p>
              <p className="text-sm text-gray-700 mb-4">{classItem.description}</p>
              <p className="text-sm text-gray-500 mb-4">Total Enrollments: {classItem.totalEnrollment}</p>
              <button className="w-full py-2 bg-primary text-white rounded-lg hover:bg-accent transition duration-300">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllClasses;
