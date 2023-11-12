import BestDealsShortcut from "../components/BestDealsShortcut";
import Footer from "../components/Footer";
import jumiagif from "../assets/Jumiagif2.jpg";
import Section from "../components/Section";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
//import MetaSearch from "../components/searchEngine/MetaSearch";
import { useDispatch } from "react-redux";

    function Home() {
        return (
          <div className="mt-[5rem]">
            <img src={jumiagif} className="w-full" alt="gif" />

            <Slider />
            <Section />
            <Footer />
          </div>
        );
}
export default Home;
