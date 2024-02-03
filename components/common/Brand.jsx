import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
const Brand = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <Slider
        {...settings}
        className=" ratate-[2.21deg] justify-between bg-black"
      >
        <p className="font-inter font-bold text-4xl text-white border-white">
          TixByAir
        </p>
        <p className="font-inter font-bold text-4xl text-white border-white">
          TixByAir
        </p>
        <p className="font-inter font-bold text-4xl text-white border-white">
          TixByAir
        </p>
        <p className="font-inter font-bold text-4xl text-white border-white">
          TixByAir
        </p>
        <p className="font-inter font-bold text-4xl text-white border-white">
          TixByAir
        </p>
      </Slider>
    </>
  );
};

export default Brand;
