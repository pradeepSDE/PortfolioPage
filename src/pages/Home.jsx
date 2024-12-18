import React, { useEffect } from "react";
import Typed from "typed.js";
import "../bgstyle.scss";
import { IoMdCloudDownload } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Home = () => {
  const el = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["a Web Developer", " an engineer", "a Frontend developer"],
      typeSpeed: 150,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      id="Home"
      className=" bodybg mb-20 pb-20 sm:flex justify-center items-center"
    >
      <div className="flex-1 sm:ml-14 pl-4 flex-col justify-center p-2  m-1 items-center ">
        <h1 className="p-2 mt-24 font-poppins font-extrabold ml-1 sm:ml-12  mr-auto text-4xl sm:text-5xl ">
          Hi There, <br />
          <h1 className="mt-5">
            I'm{" "} Pradeep <span> </span>
            <span className=" font-Rubik  text-4xl sm:text-5xl font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-sky-400 to-indigo-600">
             Bisen
            </span>
          </h1>
        </h1>
        <h2 className="p-2 mt-4 mr-auto font-poppins  font-bold ml-1 sm:ml-12 text-xl sm:text-3xl ">
          I'm{" "}
          <span
            ref={el}
            className="element text-blue-500 ml-2 ml-blue-500"
          ></span>
        </h2>
        <a
          target="_blank"
          href="/Pradeep_resume_1.pdf"
          download={"pradeep-resume"}
        >
          <button type="download" className="px-5 py-3 flex mr-auto ml-1 sm:ml-12 rounded-full items-center mt-10 hover:justify-between  text-xl text-white font-semibold border-blue-500 bg-blue-700 border-2 shadow-lg shadow-blue-400 hover:bg-blue-900 outline-2 outline-blue-400  ">
            <span className="mx-2">Resume</span>{" "}
            <IoMdCloudDownload className="" />
          </button>
        </a>
        <div className="flex mr-auto sm:ml-14 mt-10 items-center gap-2 justify-center">
          <a href="https://github.com/pradeepSDE" target="blank">
            <FaGithub className="h-16 w-16 p-3  hover:text-indigo-900 rounded-full bg-slate-200 " />
          </a>
          <a href="https://www.instagram.com/pradeepbisen60/" target="blank">
            <FaInstagram className="h-16  w-16 p-3 hover:bg-rose-200 rounded-full bg-slate-200 " />
          </a>
          <a href="https://www.linkedin.com/in/pradeep-bisen-725690202/" target="blank">
            <FaLinkedin className="h-16 w-16 p-3 hover:text-blue-700  rounded-full bg-slate-200 " />
          </a>

          <a href="https://twitter.com/pradeepbisen18" target="blank">
            <FaXTwitter className="h-16  hover:bg-black hover:text-white w-16 p-3 hover:bg-slate-400 rounded-full bg-slate-300 " />
          </a>
        </div>
        {/* <div className="flex  mr-auto ml-28 h-48 w-48 object-cover items-center    justify-evenly   ">
          <div className="flex rounded-full sm:flex items-center justify-center">
            <img
              className="w-14 h-14  mx-3   "
              src="/16090541531530099327-64.png"
              alt=""
            />

            <img
              className="w-14 h-14 p-1 mx-3"
              src="/6590558241561032669-128.png"
              alt=""
            />
            <img
              className="w-14 h-14 p-1 mx-3"
              src="/18282280761580802960-512.png"
              alt=""
            />
            <img className="w-14 h-14 p-1 mx-8" src="/twitter.png" alt="" />
          </div>
        </div> */}
      </div>
      <div className="  hover:scale-105 mt-20 hover:rotate-z-45 your-div  transition duration-500  flex sm:flex-1 order-2  items-center   justify-center  ">
        <img
          className="size-7/12  hover:scale-105 sm:mt-10 bg-gradient-to-br from-yellow-300 to-yellow-600  shadow-md shadow-yellow-400 rounded-full  border-solid border-transparent    "
          src="IMG-20240807-WA0013-removebg.png"
          alt="pradeep"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Home;
