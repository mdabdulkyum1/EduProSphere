import Banner from "./Banner";
import FeedbackSection from "./Feedback";
import InspireTeachersSection from "./InspireTeachersSection";
import LearningPathsSection from "./LearningPathsSection";
import PartnersSection from "./PartnersSection";
import PopularClasses from "./PopularClasses";
import StatsSection from "./StatsSection";

const Home = () => {
    return (
        <div className="pt-20">
            <Banner></Banner>
             <div className="min-h-[75vh] md:min-h-[80vh] lg:min-h-[70vh] w-full"></div>
            <PartnersSection></PartnersSection>
            <PopularClasses></PopularClasses>
            <FeedbackSection></FeedbackSection>
            <StatsSection></StatsSection>
            <InspireTeachersSection></InspireTeachersSection>
            <LearningPathsSection></LearningPathsSection>
        </div>
    );
};

export default Home;