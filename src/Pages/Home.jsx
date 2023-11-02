import jumiagif from "../assets/Jumiagif.gif";
import Slider from "../components/Slider";

function Home (){
    return(
        <div>
            <img src={jumiagif} className="w-full" alt="gif" />
            
            <Slider />
        </div>
    )
}
export default Home;