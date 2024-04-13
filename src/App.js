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
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>

      <Route path="/about" Component={About}/>
      </Routes>
      <Home />
      <About />
      <Skills />
      {/* <Projects />
       */}
       <Contact/>
    </div>
  );
}

export default App;
