import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import {
  FaClover,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
const Footer = () => {
  return (
    <>
      <div className="bg-[#0e0741] py-4 sm:flex justify-between">
        <div className="flex flex-col pl-10  sm:ml-44 justify-start pr-8  mt-6">
          <h1 className="text-white text-3xl font-semibold p-2  ">
            Pradeep's Portfolio
          </h1>
          <h2 className="text-white text-xl  p-2 justify-start">
            {" "}
            Feel free to ask me any questions and you can also connect with me
            on social platforms.
          </h2>
          <h2 className="text-white text-xl  p-2 justify-start">
            "Thanks for visiting! Let's turn your vision into reality." <br />{" "}
            <br /> -Pradeep{" "}
          </h2>
        </div>
        <div className="flex-col  pl-10  sm:mr-44 justify-start    p-4">
          <h1 className="p-4  text-3xl  font-semibold text-white">
            Contact Info
          </h1>

          <h2 className="text-white flex text-xl justify-start my-3 items-center p-1 ">
            <FaPhoneSquareAlt className="mx-2 text-yellow-500" /> +91 XXXX XXXX
            77
          </h2>
          <h2 className="text-white flex text-xl justify-start my-3 items-center p-1 ">
            <MdEmail className="mx-2 text-yellow-500" />{" "}
            pradeepbisen60@gmail.com
          </h2>
          <h2 className="text-white flex text-xl justify-startr my-3 items-center p-1 ">
            <FaLocationDot className="mx-2 text-yellow-500" /> Raipur - 492001
          </h2>
          <div className="flex  ml-2 mt-5 items-center gap-2 ">
            <a href="https://github.com/pradeepSDE" target="blank">
              <FaGithub className="h-12  hover:text-indigo-900 w-12 p-3  rounded-full bg-slate-300 " />
            </a>
            <a href="https://www.instagram.com/pradeepbisen60/" target="blank">
              <FaInstagram className=" h-12 w-12 p-3 hover:bg-rose-200 rounded-full bg-slate-300 " />
            </a>
            <a
              href="https://www.linkedin.com/in/pradeep-bisen-725690202/"
              target="blank"
            >
              <FaLinkedin className="h-12 w-12 p-3  hover:text-blue-700 rounded-full bg-slate-300 " />
            </a>

            <a href="https://twitter.com/pradeepbisen18" target="blank">
              <FaXTwitter className="h-12 w-12 p-3 hover:bg-black hover:text-white rounded-full bg-slate-300 " />
            </a>
          </div>
        </div>
      </div>
      <hr className="text-white " />
      <div>
        <div className="bg-[#0e0741] h-24 flex mx-auto mt-auto  justify-center items-center">
          <h1 className="font-semibold text-xl text-white text-lg flex items-center p-1 font-Dancing font-dancingscript "> 
            Made with <FcLike className="m-2 " /> by Pradeep Bisen
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
