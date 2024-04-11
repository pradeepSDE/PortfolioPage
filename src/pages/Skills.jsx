import React from "react";

const Skills = () => {
  return (
    
    <div className="items-center  overflow-auto  enter  flex flex-col text-center">
      
      <h1 className="text-5xl font-bold text-center">Skills</h1>
      <div className="grid mt-16 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4  pl-5 ">
        <div className="  h-48 w-48 p-5  object-cover items-center flex flex-col    justify-evenly">
          <img className="h-16 w-16 mx-8" src="/cpp.png" alt="" />
          <span className="text-md mt-1 font-semibold">C++</span>
        </div>
        <div className=" p-5 h-48 w-48 object-cover items-center   flex flex-col  justify-evenly">
          <img className="h-16 w-16 mx-8" src="/css (1).png" alt="" />{" "}
          <span className="text-md mt-1 font-semibold">CSS</span>
        </div>
        <div className=" p-5 h-48 w-48 object-cover items-center flex flex-col    justify-evenly">
          <img className="h-16 w-16 mx-8" src="/node.png" alt="" />{" "}
          <span className="text-md mt-1 font-semibold">NodeJS</span>
        </div>
        <div className="p-5  h-48 w-48 object-cover items-center flex flex-col    justify-evenly">
          <img className="h-16 w-16 mx-8" src="/html.png" alt="" />{" "}
          <span className="text-md mt-1 font-semibold">HTMl</span>
        </div>
        <div className="p-5 h-48 w-48 object-cover items-center  flex flex-col   justify-evenly">
          <img className="h-16 w-16 mx-8" src="/git.png" alt="" />{" "}
          <span className="text-md mt-1font-semibold">Git</span>
        </div>
        <div className="p-5 h-48 w-48 object-cover items-center   flex flex-col  justify-evenly">
          <img className="h-16 w-16 mx-8" src="/github.png" alt="" />{" "}
          <span className="text-md mt-1 font-semibold">Github</span>
        </div>
        <div className="p-5p-5 h-48 w-48 object-cover items-center flex flex-col    justify-evenly">
          <img className="h-16 w-16 mx-8" src="/js.png" alt="" />{" "}
          <span className="text-md font-semibold mt-1">Javascript</span>
        </div>
        <div className="p-5 h-48 w-48 object-cover items-center   flex flex-col  justify-evenly">
          <img className="h-16 w-16 mx-8" src="/mongo.png" alt="" />{" "}
          <span className="text-md mt-1 font-semibold">MongoDB</span>
        </div>
        <div className="p-5 h-48 w-48 object-cover items-center   flex flex-col  justify-evenly">
          <img className="h-16 w-16 mx-8" src="/react.png" alt="" />{" "}
          <span className="text-md mt-1 font-semibold">ReactJS</span>
        </div>
        <div className="p-5 h-48 w-48 object-cover items-center flex flex-col    justify-evenly">
          <img className="h-16 w-16 mx-8" src="/tailwind.png" alt="" />{" "}
          <span className="text-md mt-1 font-semibold">Tailwind CSS</span>
        </div>
        <div className="h-48 w-48 object-cover flex flex-col  p-5  justify-center items-center">
          <img className="h-16 w-16 mx-8" src="/firebase.png" alt="" />{" "}
          <span className="text-md font-semibold mt-1">Firebase</span>
        </div>
        <div className="p-5 h-48 w-48 object-cover items-center  flex flex-col   justify-evenly">
          <img className="h-16 w-16 mx-8" src="/py.png" alt="" />{" "}
          <span className="text-md font-semibold mt-1">Python</span>
        </div>
        <div className="p-5 h-48 w-48 object-cover items-center  flex flex-col   justify-evenly">
          <img className="h-16 w-16 mx-8" src="/exp.png" alt="" />{" "}
          <span className="text-md mt-1 font-semibold">Express.js</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
