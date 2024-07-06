import Header2 from "./components/about/header2";
import Section1 from "./components/about/Section1";
import Section2 from "./components/about/Section2";
import Section3 from "./components/about/Section3";
import ImageSlider from "./components/Slider";

export default function About(){
    return (
        <div>
            <Header2/>
            <Section1/>
            <Section2/>
            <ImageSlider/>
            <Section3/>
        </div>
    )
}