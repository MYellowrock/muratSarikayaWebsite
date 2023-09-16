import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Introduce from "./components/Introduce";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import image1 from "./images/muratLogo.png";

function App() {
  return (
    <div className="bg-cv-light">
      <Navigation />
      <Hero src={image1} alt="My Image"/>
      <Introduce />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
