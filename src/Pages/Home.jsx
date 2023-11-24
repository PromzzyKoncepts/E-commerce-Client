import BestDealsShortcut from "../components/BestDealsShortcut";
import Footer from "../components/Footer";
import Aphiagif from "../assets/Jumiagif2.jpg";
import Section from "../components/Section";
import Slider from "../components/Slider";
import LatestArrivalShortcut from "../components/LatestArrivalShortcut";

function Home() {
    return (
        <div className="">
            <img src={Aphiagif} className="w-full" alt="gif" />

            <Slider />
            <Section />
            <BestDealsShortcut />
            <LatestArrivalShortcut />
            <Footer />
        </div>
    );
}
export default Home;
