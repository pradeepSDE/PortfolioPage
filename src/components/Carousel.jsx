import React from "react";
import { Carousel } from "react-responsive-carousel";

const CarouselElement = () => {
  return (
    <Carousel axis="" autoPlay showArrows={true} className="">
      <div>
        <img alt="" src="/16090541531530099327-64.png" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img alt="" src="/js.png" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img alt="" src="/css.png" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img alt="" src="/node.png" />
        <p className="legend">Legend 4</p>
      </div>
    </Carousel>
  );
};
export default CarouselElement;
