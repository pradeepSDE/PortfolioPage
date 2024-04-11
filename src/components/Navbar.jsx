import React from "react";
const Navbar = () => {
  return (
    <div className="fixed top-0 w-full items-center flex justify-between  bg-gray-50 mb-1 p-2  border-2 border-b-3 shadow-md shadow-cyan-100 border-b-blue-300  ">
      <div>
        <h1 className="  text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-sky-400 to-indigo-800">
          Pradeep
        </h1>
      </div>

      <div className=" p-2 mr-2 flex  ">
        <div>
          <h1 className="text-xl hover:border-b-2 hover:border-b-blue-300 hover:text-blue-500  hidden lg:block font-semibold p-2 m-1">
            <a href="#">Home</a>
          </h1>
        </div>
        <div>
          <h1 className="text-xl hover:border-b-2 hover:border-b-blue-300 hover:text-blue-500  hidden lg:block font-semibold p-2 m-1">
            About <a onClick={(e)=>e.preventDefault()} href=".about"></a>
          </h1>
        </div>
        <div>
          <h1 className="text-xl hover:border-b-2 hover:border-b-blue-300 hover:text-blue-500  hidden lg:block font-semibold p-2 m-1">
            Skills
          </h1>
        </div>
        <div>
          <h1 className="text-xl hover:border-b-2 hover:border-b-blue-300 hover:text-blue-500  hidden lg:block font-semibold p-2 m-1">
            Projects
          </h1>
        </div>
        <div>
          <h1 className="text-xl hover:border-b-2 hover:border-b-blue-300 hover:text-blue-500  font-semibold hidden lg:block p-2 m-1">
            Contact
          </h1>
        </div>
      </div>
      <div className="lg:hidden">hamburger</div>
    </div>
  );
};

export default Navbar;
