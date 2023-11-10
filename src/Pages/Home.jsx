import BestDealsShortcut from "../components/BestDealsShortcut";
import Footer from "../components/Footer";
import jumiagif from "../assets/Jumiagif.gif";
import Section from "../components/Section";
import Slider from "../components/Slider";
import LatestArrivalShortcut from "../components/LatestArrivalShortcut";


    function Home() {
        return (
            <div>
            <img src={jumiagif} className="w-full" alt="gif" />

            <Slider />
            <Section />
            <BestDealsShortcut />
            <LatestArrivalShortcut />
            <Footer />
        </div>
    );
}
export default Home;
