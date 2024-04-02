import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  var heroSilder = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="hero-section relative">
      <div className="hero-slider">
        <Slider {...heroSilder}>
          <div>
            <figure className=" h-[700px]">
              <img
                src="./assets/images/hero/1.png"
                className="object-cover object-center"
                alt="Banner"
              />
            </figure>
          </div>
          <div>
            <figure className=" h-[700px]">
              <img
                src="./assets/images/hero/1.png"
                className="object-cover object-center"
                alt="Banner"
              />
            </figure>
          </div>
          <div>
            <figure className=" h-[700px]">
              <img
                src="./assets/images/hero/1.png"
                className="object-cover object-center"
                alt="Banner"
              />
            </figure>
          </div>
          <div>
            <figure className=" h-[700px]">
              <img
                src="./assets/images/hero/1.png"
                className="object-cover object-center"
                alt="Banner"
              />
            </figure>
          </div>
          <div>
            <figure className=" h-[700px]">
              <img
                src="./assets/images/hero/1.png"
                className="object-cover object-center"
                alt="Banner"
              />
            </figure>
          </div>
          <div>
            <figure className=" h-[700px]">
              <img
                src="./assets/images/hero/1.png"
                className="object-cover object-center"
                alt="Banner"
              />
            </figure>
          </div>
          <div>
            <figure className=" h-[700px]">
              <img
                src="./assets/images/hero/1.png"
                className="object-cover object-center"
                alt="Banner"
              />
            </figure>
          </div>
        </Slider>
      </div>
      <div className="container absolute inset-x-0 top-9 mx-auto flex justify-end pointer-events-none">
        <figure className="w-full max-w-[330px] bg-white bg-opacity-40 px-5 py-3">
          <img src="./assets/images/eicher.png" alt="Eicher" />
        </figure>
      </div>
    </section>
  );
};

export default HeroSection;
