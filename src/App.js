import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./components/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { useRef } from "react";
import Footer from "./components/Footer";
function App() {
  
  return (
    <div className="App scroll-smooth">
      <Navbar />

      <Home  />
      <About  />
      <Skills />
       <Projects />
       
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
