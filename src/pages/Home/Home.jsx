import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import FeedbackSection from "./Feedback";
import InspireTeachersSection from "./InspireTeachersSection";
import JoinCommunitySection from "./JoinCommunitySection";
import LearningPathsSection from "./LearningPathsSection";
import PartnersSection from "./PartnersSection";
import PopularClasses from "./PopularClasses";
import StatsSection from "./StatsSection";

const Home = () => {
    return (
        <div className="pt-20">
            <Helmet>
                <title>EduProSphere | Home</title>
            </Helmet>
            <Banner></Banner>
             <div className="min-h-[75vh] md:min-h-[80vh] lg:min-h-[70vh] w-full"></div>
            <PartnersSection></PartnersSection>
            <PopularClasses></PopularClasses>
            <FeedbackSection></FeedbackSection>
            <StatsSection></StatsSection>
            <InspireTeachersSection></InspireTeachersSection>
            <LearningPathsSection></LearningPathsSection>
            <JoinCommunitySection></JoinCommunitySection>
        </div>
    );
};

export default Home;