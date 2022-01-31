import Hero from "../components/Hero";
import About from "../components/About";
import ImageText from "../components/ImageText";

function Home(props) {
    return (
        <div>
           <Hero />
           <About />
           <ImageText />
        </div>
    )
}

export default Home;