// import "./App.css";
import About from "./components/about/About";
import Header from "./components/layouts/header/Header";
import Faqs from "./components/faqs/Faqs";
import Footer from "./components/layouts/footer/Footer";
import TechList from "./components/techList/TechList";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import Hobbies from "./components/hobbies/Hobbies";
import React from "react";

function App() {
  return (
    <>
      <Header />
      <About img="about.jpg" />
      <TechList />
      <Services img="serviceimg.jpg" />
      <Projects img="portofil2.jpg" />
      <Hobbies codeImg="hbbies.jpg" sportsImg="games.jpg" soccerImg='sport.jpg' />
      <Faqs />
      <Footer />
    </>
  );
}

export default App;
