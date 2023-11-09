import jumiagif from "../assets/Jumiagif.gif";
import Section from "../components/Section";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
//import MetaSearch from "../components/searchEngine/MetaSearch";
import { useDispatch } from "react-redux";

function Home() {
    // const keyword = match.params.keyword;

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch( fetchPro (keyword, pageNumber));
    //   }, [dispatch, keyword, pageNumber]);

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
