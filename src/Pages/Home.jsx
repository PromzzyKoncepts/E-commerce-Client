import BestDealsShortcut from "../components/BestDealsShortcut";
import Footer from "../components/Footer";
import Aphiagif from "../assets/Jumiagif2.jpg";
import Section from "../components/Section";
import Slider from "../components/Slider";
import LatestArrivalShortcut from "../components/LatestArrivalShortcut";
import Section2 from "../components/Section2";

function Home() {
    return (
        <div className="">
            <img src={Aphiagif} className="w-full" alt="gif" />

            <Slider />
            <Section />
            <LatestArrivalShortcut />
            <Section2 />
            <BestDealsShortcut />
            <Footer />
        </div>
    );
}
export default Home;
