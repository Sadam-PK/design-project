import ImagesSlider from "../src/components/Slider";
import Footer from "./components/Footer";
import SkewedSection from "./components/SkewedSection";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";

export default function Landing() {
  return (
    <div>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <ImagesSlider />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
}
