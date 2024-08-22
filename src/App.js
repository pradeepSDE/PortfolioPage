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
import Chatbot from "./pages/Chatbot/Chatbot";
import HomeMain from "./pages/Home/HomeMain";
function App() {
  
  return (
    <div className="App scroll-smooth">
      
      <Routes>
        <Route exact path="/chat" element={<Chatbot />} />
         <Route exact path="/" element={<HomeMain />} />          
      </Routes>
     
    </div>
  );
}

export default App;
