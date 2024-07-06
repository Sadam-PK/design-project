import Header2 from "./components/hotel/Header2";
import Section1 from "./components/hotel/Section1";
import Section2 from "./components/hotel/Section2";
import Section3 from "./components/hotel/Section3";
import Section4 from "./components/hotel/Section4";
import ImageSlider from "./components/Slider";

export default function Hotel() {
  return (
    <div>
      <Header2 />
      <div className="h-32" />
      <Section2 />
      <Section1 />
      <Section3 />
      <ImageSlider />
      <Section4 />
    </div>
  );
}
