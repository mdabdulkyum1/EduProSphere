import { useQuery } from "@tanstack/react-query";
import useAuth from "./../../hooks/GetAuthInfo/useAuth";
import useAxiosPublic from "../../hooks/AxiosPublic/useAxiosPublic";
import Loading from "./../../components/shared/Loading/Loading";
import { Link } from "react-router-dom";
import usePagination from "../../hooks/pagination/usePagination";
import { Helmet } from 'react-helmet-async';

const AllClasses = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const {
    count,
    pages,
    currentPage,
    numberOfPages,
    setCurrentPage,
    handelPrevBtn,
    handelNextBtn,
  } = usePagination();

  const { data: classes = [], isLoading } = useQuery({
    queryKey: ["all-classes", user?.email, currentPage],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/all-classes?page=${currentPage}&size=${10}`);
      return data;
    },
  });

  if (isLoading) {
    return <Loading message="Class is loading...."></Loading>;
  }

  return (
    <>
    <Helmet>
         <title>EduProSphere | All Ceases</title>
    </Helmet>
    <section className="py-20 bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center mt-6">
          All Available Classes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {classes.map((classItem) => (
            <div
              key={classItem._id}
              className="bg-white border border-green-200 dark:bg-dark-background p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={classItem.photoUrl}
                alt={classItem.title}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{classItem.title}</h3>
              <p className="text-sm text-gray-500 mb-4">by {classItem.name}</p>
              <p className="text-lg font-bold text-primary mb-4">
                {classItem.price}
              </p>
              <p className="text-sm text-gray-700 mb-4">
                {classItem.description.length > 50
                  ? `${classItem.description.slice(0, 50)}...`
                  : classItem.description}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Total Enrollments: {classItem.totalEnrolment || 0}
              </p>
              <Link to={`/class-details/${classItem._id}`}>
                <button className="w-full py-2 bg-primary text-white rounded-lg hover:bg-accent transition duration-300">
                  Enroll Now
                </button>
              </Link>
            </div>
          ))}
        </div>

        <div className="md:flex justify-around items-center">
          <div className="text-center my-4 md:my-0">
            Showing 1-10 of {count}
          </div>
          <div className="my-12">
            <div className="text-center pagination-div">
              <button
                className="btn bg-primary"
                onClick={handelPrevBtn}
                disabled={currentPage === 0}
              >
                Prev
              </button>
              {pages.map((page) => (
                <button
                  className={`btn ${
                    currentPage === page ? "bg-yellow-500" : ""
                  }`}
                  onClick={() => page !== "..." && setCurrentPage(page)}
                  disabled={page === "..."}
                  key={page}
                >
                  {page === "..." ? "..." : page + 1}
                </button>
              ))}
              <button
                className="btn bg-primary"
                onClick={handelNextBtn}
                disabled={currentPage === numberOfPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default AllClasses;
