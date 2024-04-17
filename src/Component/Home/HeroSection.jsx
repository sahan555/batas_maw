import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  var heroSilder = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,fade: true,
  };
  return (
    <section className="hero-section relative">
      <div className="hero-slider-wrapper">
        <Slider {...heroSilder} className="hero-slider">
          <div>
            <figure className=" h-[600px]">
              <img
                src="./assets/images/hero/1.png"
                className="object-cover object-center"
                alt="Banner"
              />
            </figure>
          </div>
          <div>
            <figure className=" h-[600px]">
              <img
                src="./assets/images/hero/1.png"
                className="object-cover object-center"
                alt="Banner"
              />
            </figure>
          </div>
          <div>
            <figure className=" h-[600px]">
              <img
                src="./assets/images/hero/1.png"
                className="object-cover object-center"
                alt="Banner"
              />
            </figure>
          </div>
          <div>
            <figure className=" h-[600px]">
              <img
                src="./assets/images/hero/1.png"
                className="object-cover object-center"
                alt="Banner"
              />
            </figure>
          </div>
          <div>
            <figure className=" h-[600px]">
              <img
                src="./assets/images/hero/1.png"
                className="object-cover object-center"
                alt="Banner"
              />
            </figure>
          </div>
          <div>
            <figure className=" h-[600px]">
              <img
                src="./assets/images/hero/1.png"
                className="object-cover object-center"
                alt="Banner"
              />
            </figure>
          </div>
          <div>
            <figure className=" h-[600px]">
              <img
                src="./assets/images/hero/1.png"
                className="object-cover object-center"
                alt="Banner"
              />
            </figure>
          </div>
        </Slider>
        <div className="hero-desc bg-light-grey -mt-1.5 py-8 text-center stripe before:w-[50px] after:w-[50px] after:right-[90px]">
            <div className="container mx-auto">
                <h2 className="text-xl text-secondary font-medium leading-8"><b className="text-primary font-medium">BATASMAW</b> Commercial Vehicles, established in 2023, is Nepal's premier distributor for Volvo-Eicher commercial vehicles, boasting over 4500 sales, a widespread national presence, and market leadership in both light and heavy segments.</h2>
            </div>
        </div>
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
