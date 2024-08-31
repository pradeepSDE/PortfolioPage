import React from "react";
import Nav from "../../components/Nav";
import Home from "../Home";
import About from "../../components/About";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";
import Footer from "../../components/Footer";

const HomeMain = () => {
  return (
    <div className="bg-[#F8FAFC]">
      <Nav />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomeMain;
