import jumiagif from "../assets/Jumiagif.gif";
import Section from "../components/Section";
import Slider from "../components/Slider";

import Footer from "../components/Footer";

function Home() {
    return (
        <div>
            <img src={jumiagif} className="w-full" alt="gif" />

            <Slider />
            <Section />
            <Footer />
        </div>
    );
}
export default Home;
