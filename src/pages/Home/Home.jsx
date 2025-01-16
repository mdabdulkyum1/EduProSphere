import Banner from "./Banner";
import PartnersSection from "./PartnersSection";

const Home = () => {
    return (
        <div className="pt-20">
            <Banner></Banner>
             <div className="min-h-[75vh] md:min-h-[80vh] lg:min-h-[70vh] w-full"></div>
            <PartnersSection></PartnersSection>
        </div>
    );
};

export default Home;