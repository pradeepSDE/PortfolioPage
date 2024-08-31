import React from "react";
import CarouselElement from "../components/Carousel";
import Slider from "react-slick";
import projectData from '../../src/assets/projectData.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrProjects } from "react-icons/gr";
const Projects = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed : 2500,
    focusOnSelect : true,
  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],

  };

  return (
    <div id="projects" className="  pb-10 px-4 mb-20  bg-slate-50  w-full mx-auto ">
      <div className="mt-20 ">
        <h1 className="text-5xl p-5 mb-5 flex  justify-center font-bold text-center uppercase"> <GrProjects className="mx-4"/> projects</h1>
        <Slider {...settings}>
          {projectData.map((d) => (
            <div className="bg-white  mb-10 shadow-md shadow-blue-300 border-3 border-blue-400 gap-2 p-1 rounded-xl h-[450px] text-black">
              <div className="bg-indigo-200 rounded-t-xl  flex justify-center p-2 items-center  ">
                <img src={d.img} className=" h-64 w-96 " alt="" />
              </div>
              <div className="flex-col flex bg-white font-semibold justify-center items-center gap-2 p-4 ">
                <p className="text-lg  font-semibold ">{d.Name}</p>
                <p>{d.description}</p>
                <button className="px-6 py-2 rounded-full bg-blue-500 text-white  " >
                 <a href={d.Link} target=" "> project </a>
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
