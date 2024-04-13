import React from "react";

const Skills = () => {
  return (
    <div className="items-center  mb-20 overflow-auto  enter  flex flex-col text-center">
      <h1 className="text-5xl font-bold text-center">Skills</h1>
      <div className="grid  grid-cols-2 mt-16 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4  px-2 ">
        <div className=" h-full w-full shadow-lg shadow-blue-400 h-48 w-48 p-5  object-cover items-center rounded-lg border-slate-100 bg-blue-400 flex flex-col  hover:bg-blue-500  justify-evenly">
          <img className="h-16 w-16 mx-8" src="/cpp.png" alt="" />
          <span className="text-md mt-1 font-semibold">C++</span>
        </div>
        <div className=" h-full w-full shadow-lg shadow-blue-200 p-5 h-48 w-48 object-cover border-2 border-slate-100 rounded-lg bg-blue-100 items-center hover:bg-blue-200   flex flex-col  justify-evenly">
          <img className="h-16 w-16 mx-8" src="/css (1).png" alt="" />{" "}
          <span className="text-md mt-1  font-semibold">CSS</span>
        </div>
        <div className=" h-full w-full shadow-lg shadow-green-200 p-5 h-48 w-48 object-cover rounded-lg border-slate-100 hover:bg-green-300 bg-green-200 items-center flex flex-col    justify-evenly">
          <img className="h-16 w-16 mx-8" src="/node.png" alt="" />{" "}
          <span className="text-md mt-1 font-semibold">NodeJS</span>
        </div>
        <div className=" h-full w-full  shadow-lg shadow-orange-200 p-5  h-48 w-48 object-cover items-center rounded-lg hover:bg-orange-400 border-slate-100 bg-orange-300 flex flex-col    justify-evenly">
          <img className="h-16 w-16 mx-8" src="/html.png" alt="" />{" "}
          <span className="text-md mt-1 font-semibold">HTMl</span>
        </div>
        <div className="  h-full w-full shadow-lg shadow-orange-200 p-5 h-48 w-48 object-cover items-center rounded-lg hover:bg-orange-400 border-slate-100 bg-orange-300 flex flex-col   justify-evenly">
          <img className="h-16 w-16 mx-8" src="/git.png" alt="" />{" "}
          <span className="text-md mt-1 font-semibold">Git</span>
        </div>
        <div className=" h-full w-full shadow-lg shadow-indigo-200 p-5 h-48 w-48 object-cover rounded-lg border-slate-100 hover:bg-indigo-200 bg-indigo-100 items-center   flex flex-col  justify-evenly">
          <img className="h-16 w-16 mx-8" src="/github.png" alt="" />{" "}
          <span className="text-md mt-1  font-semibold">Github</span>
        </div>
        <div className=" w-full h-full shadow-lg shadow-yellow-200 p-5 h-48 w-48 object-cover rounded-lg border-slate-100 hover:bg-yellow-200 bg-yellow-100  items-center flex flex-col    justify-evenly">
          <img className="h-16 w-16 mx-8" src="/js.png" alt="" />{" "}
          <span className="text-md font-semibold mt-1">Javascript</span>
        </div>
        <div className=" h-full w-full shadow-lg shadow-teal-200 p-5 h-48 w-48 object-cover rounded-lg border-slate-100 hover:bg-teal-200 bg-teal-100 items-center   flex flex-col  justify-evenly">
          <img className="h-16 w-16 mx-8" src="/mongo.png" alt="" />{" "}
          <span className="text-md mt-1 font-semibold">MongoDB</span>
        </div>
        <div className=" h-full w-full  shadow-lg shadow-cyan-200 p-5 h-48 w-48 object-cover items-center rounded-lg hover:bg-cyan-200 border-slate-100 bg-cyan-100 flex flex-col  justify-evenly">
          <img className="h-16 w-16 mx-8" src="/react.png" alt="" />{" "}
          <span className="text-md mt-1 font-semibold">ReactJS</span>
        </div>
        <div className="  h-full w-full shadow-lg shadow-teal-200 p-5 h-48 w-48 object-cover items-center rounded-lg hover:bg-teal-200 border-slate-100 bg-teal-100 flex flex-col    justify-evenly">
          <img className="h-16 w-16 mx-8" src="/tailwind.png" alt="" />{" "}
          <span className="text-md mt-1 font-semibold">Tailwind CSS</span>
        </div>
        <div className=" h-full w-full shadow-lg shadow-yellow-200 h-48 w-48 object-cover flex flex-col  p-5 rounded-lg hover:bg-yellow-200 border-slate-100 bg-yellow-100 justify-center items-center">
          <img className="h-16 w-16 mx-8" src="/firebase.png" alt="" />{" "}
          <span className="text-md font-semibold mt-1">Firebase</span>
        </div>
        <div className=" h-full w-full shadow-lg shadow-violet-200 p-5 h-48 w-48 object-cover items-center rounded-lg hover:bg-violet-200 border-slate-100 bg-violet-100 flex flex-col   justify-evenly">
          <img className="h-16 w-16 mx-8" src="/py.png" alt="" />{" "}
          <span className="text-md font-semibold mt-1">Python</span>
        </div>
        <div className=" h-full w-full shadow-lg shadow-slate-200 p-5 h-48 w-48 object-cover items-center rounded-lg hover:bg-slate-200 border-slate-100 bg-slate-100 flex flex-col   justify-evenly">
          <img className="h-16 w-16 mx-8" src="/exp.png" alt="" />{" "}
          <span className="text-md mt-1 font-semibold">Express.js</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
