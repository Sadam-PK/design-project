import "./App.css";
import "./index.css";
import "@fontsource/abril-fatface";
import "@fontsource/mukta-mahee";
import { Routes, Route } from "react-router-dom";

import Hotel from "./Hotel";
import Landing from "./Landing";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Footer from "./components/Footer";
import Blog from "./Blog";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
