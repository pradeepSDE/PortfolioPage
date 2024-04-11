import React, { useEffect } from "react";
import Typed from "typed.js";
import "../bgstyle.scss";
import { IoMdCloudDownload } from "react-icons/io";
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
    <div className="flex  bodybg py-14  sm:">
      <div className="flex-1 flex flex-col justify-center p-2 ml-4 m-1 items-center ">
        <h1 className="p-2 mt-24  font-semibold ml-16 mr-auto text-6xl ">
          Hi There, <br />
          <h1 className="mt-5">
            I'm{" "}
            <span className="   text-6xl  font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-sky-400 to-indigo-800">
              Pradeep bisen
            </span>
          </h1>
        </h1>
        <h2 className="p-2 mt-4 mr-auto  font-semibold ml-16 text-3xl">
          I'm{" "}
          <span
            ref={el}
            className="element text-blue-500 ml-2 ml-blue-500"
          ></span>
        </h2>
        <div className="flex  h-48 w-48 object-cover items-center mx-auto   justify-evenly   ">
          <div className="flex  sm:flex items-center justify-center">
            <img
              className="w-14 h-14  mx-8  "
              src="/16090541531530099327-64.png"
              alt=""
            />

            <img
              className="w-14 h-14 p-1 mx-8"
              src="/6590558241561032669-128.png"
              alt=""
            />
            <img
              className="w-14 h-14 p-1 mx-8"
              src="/18282280761580802960-512.png"
              alt=""
            />
            <img className="w-14 h-14 p-1 mx-8" src="/twitter.png" alt="" />
          </div>
        </div>
        <button className="px-5 py-3 flex rounded-full items-center hover:justify-between  text-xl text-white font-semibold border-blue-500 bg-blue-700 border-2 shadow-lg shadow-blue-400 hover:bg-blue-900 outline-2 outline-blue-400  ">
          <span className="mx-2">Resume</span>{" "}
          <IoMdCloudDownload className="" />
        </button>
      </div>
      <div className="flex-1 hidden lg:block  items-center   justify-center  ">
        <img
          className="size-9/12 rounded-full mt-20 my-auto border-solid border-transparent mr-4 pl-4 ml-auto"
          src="/profile.png"
          alt="pradeep"
        />
      </div>
    </div>
  );
};

export default Home;
