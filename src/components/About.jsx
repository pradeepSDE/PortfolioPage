import React from "react";
import { CgProfile } from "react-icons/cg";
const About = () => {
  return (
    <div className=" p-4  overflow-auto  h-screen text-center about   w-full">
      <h1 className="font-bold text-5xl justify-center  flex items-center">
        <CgProfile className="m-2" /> About
        <span className="text-blue-500 ml-3"> Me</span>
      </h1>
      <div className="flex mt-10">
        <div className="w-1/2 h-96 ml-10 border-4 border-blue-500 shadow-lg shadow-blue-400 rounded-md">
          <img src="/portr.jpg" alt="" />
        </div>

        <div className="px-5  ml-10 text-left">
          <h2 className="font-semibold mr-auto mb-5 justified text-3xl">
            I'm Pradeep Bisen
          </h2>
          <p className="text-2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            fuga ea est minima expedita. Consectetur maxime, labore delectus
            repudiandae eligendi quidem beatae magnam debitis amet ex deserunt
            earum ea repellat.
          </p>{" "}
          <br />
          <span className="text-2xl">Email: Pradeepbisen60@gmail.com</span>
          <br></br> <br />
          <span className="text-2xl">Address: Mowa,Raipur(Chattisgarh)</span>
        </div>
      </div>
    </div>
  );
};

export default About;
