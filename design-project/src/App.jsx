import "./App.css";
import "./index.css";
import "@fontsource/abril-fatface";
import "@fontsource/mukta-mahee";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/design-project" element={<Landing />} />
          <Route path="/design-project/hotel" element={<Hotel />} />
          <Route path="/design-project/about" element={<About />} />
          <Route path="/design-project/gallery" element={<Gallery />} />
          <Route path="/design-project/contact" element={<Contact />} />
          <Route path="/design-project/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
