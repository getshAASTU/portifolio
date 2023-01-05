// import "./App.css";
import About from "./components/about/About";
import Header from "./components/layouts/header/Header";
import Faqs from "./components/faqs/Faqs";
import Footer from "./components/layouts/footer/Footer";
import TechList from "./components/techList/TechList";
import AllProjects from "./components/projects/AllProjects";
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
      <AllProjects img="portofil2.jpg" />
      <Hobbies codeImg="hbbies.jpg" sportsImg="joystic.jpg"/>
      <Faqs />
      <Footer />
    </>
  );
}

export default App;
