import "./App.css";
import { Route, Routes } from "react-router-dom";
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
