import React from 'react'
import Navbar from '../../components/Navbar'
import Home from '../Home'
import About from '../../components/About'
import Skills from '../Skills'
import Chatbot from '../Chatbot/Chatbot'
import Projects from '../Projects'
import Contact from '../Contact'
import Footer from '../../components/Footer'

const HomeMain = () => {
  return (
    <div>
      <Navbar />
       <Home  />
      <About  />
      <Skills />
       <Projects />
       <Contact/>
       <Footer/>
    </div>
  )
}

export default HomeMain
