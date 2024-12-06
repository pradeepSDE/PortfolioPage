import React from "react";
import { CgProfile } from "react-icons/cg";
const About = () => {
  return (
    <div
      id="about"
      className="  sm:p-4   overflow-auto  mb-10 bg-slate-50  text-center "
    >
      <h1 className="font-bold uppercase text-5xl justify-center  flex items-center">
        <CgProfile className="m-2" /> About
        <span className="text-blue-500 ml-3"> Me</span>
      </h1>
      <div className="sm:flex justify-center items-center   m-4 mt-10">
        <div className="  w-1/2 h-1/2 mx-auto   rounded-xl grayscale hover:grayscale-0 transition duration-500 sm:ml-10 border-4   border-blue-500 shadow-lg shadow-blue-400 ">
          <img className="rounded-lg h-3/4" src="/Pradeep1.jpg" alt="" />
        </div>

        <div className="text-left  sm:ml-24 ml-12 ">
          <h2 className="font-semibold mt-8 mr-auto mb-5 text-3xl">
            I'm Pradeep <span className="text-blue-600 "> Bisen</span>
          </h2>
          <p className="text-lg sm:text-xl">
            I am a final-year B.Tech student in Electronics and
            Telecommunication Engineering at Government Engineering College,
            Raipur College. Currently, I am interning at Eigenplus, where I work
            with technologies like React, React Native, Docker, and Node.js,
            gaining hands-on experience in developing robust and scalable
            applications.
          </p>{" "}
          <br />
          <span className="text-lg sm:text-xl">
            {" "}
            <span className="text-blue-500 font-semibold">Email: </span>
            Pradeepbisen60@gmail.com
          </span>
          <br></br> <br />
          <span className="text-lg sm:text-xl">
            {" "}
            <span className="text-blue-500 font-semibold">Address: </span>{" "}
            Raipur,Chattisgarh
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
