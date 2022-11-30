// import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Faqs from "./components/faqs/Faqs";
import Footer from "./components/footer/Footer";
import TechList from "./components/techList/TechList";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";

function App() {
  return (
    <>
      <Header />
      <About img="about.jpg" />
      <TechList />
      <Services img="serviceimg.jpg" />
      <Projects img="portofil2.jpg" />
      <Faqs />
      <Footer />
    </>
  );
}

export default App;
