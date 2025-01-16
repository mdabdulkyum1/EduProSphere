import Banner from "./Banner";
import FeedbackSection from "./Feedback";
import PartnersSection from "./PartnersSection";
import PopularClasses from "./PopularClasses";

const Home = () => {
    return (
        <div className="pt-20">
            <Banner></Banner>
             <div className="min-h-[75vh] md:min-h-[80vh] lg:min-h-[70vh] w-full"></div>
            <PartnersSection></PartnersSection>
            <PopularClasses></PopularClasses>
            <FeedbackSection></FeedbackSection>
        </div>
    );
};

export default Home;