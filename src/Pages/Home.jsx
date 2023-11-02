import jumiagif from "../assets/Jumiagif.gif";
import Section from "../components/Section";
import Slider from "../components/Slider";

function Home (){
    return(
        <div>
            <img src={jumiagif} className="w-full" alt="gif" />
            
            <Slider />
            <Section />
        </div>
    )
}
export default Home;