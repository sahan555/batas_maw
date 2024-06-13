import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  var heroSilder = {
    dots: true,
    arrows: false,
    infinite: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };
  return (
    <section className="hero-section relative">
      <div className="hero-slider-wrapper">
        <Slider {...heroSilder} className="hero-slider">
          <div>
            <figure className=" h-[400px] lg:h-[600px]">
              <img
                src="./assets/images/hero/1.png"
                className="object-cover object-center"
                alt="Banner"
              />
            </figure>
          </div>
          <div>
            <figure className=" h-[400px] lg:h-[600px]">
              <img
                src="./assets/images/hero/1.png"
                className="object-cover object-center"
                alt="Banner"
              />
            </figure>
          </div>
          <div>
            <figure className=" h-[400px] lg:h-[600px]">
              <img
                src="./assets/images/hero/1.png"
                className="object-cover object-center"
                alt="Banner"
              />
            </figure>
          </div>
          <div>
            <figure className=" h-[400px] lg:h-[600px]">
              <img
                src="./assets/images/hero/1.png"
                className="object-cover object-center"
                alt="Banner"
              />
            </figure>
          </div>
          <div>
            <figure className=" h-[400px] lg:h-[600px]">
              <img
                src="./assets/images/hero/1.png"
                className="object-cover object-center"
                alt="Banner"
              />
            </figure>
          </div>
          <div>
            <figure className=" h-[400px] lg:h-[600px]">
              <img
                src="./assets/images/hero/1.png"
                className="object-cover object-center"
                alt="Banner"
              />
            </figure>
          </div>
          <div>
            <figure className=" h-[400px] lg:h-[600px]">
              <img
                src="./assets/images/hero/1.png"
                className="object-cover object-center"
                alt="Banner"
              />
            </figure>
          </div>
        </Slider>
        <div className="hero-desc md:stripe -mt-1.5 bg-light-grey py-8 text-center before:w-[30px] after:right-[60px] after:w-[30px] 2xl:before:w-[50px] 2xl:after:right-[90px] 2xl:after:w-[50px]">
          <div className="side-padding">
            <div className="container mx-auto">
              <h2 className="md:pr-16 text-base font-medium leading-8 text-secondary  md:text-xl 2xl:pr-0">
                <b className="font-medium text-primary">BATASMAW</b> Commercial
                Vehicles, established in 2023, is Nepal's premier distributor
                for Volvo-Eicher commercial vehicles, boasting over 4500 sales,
                a widespread national presence, and market leadership in both
                light and heavy segments.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container pointer-events-none absolute inset-x-0 top-9 mx-auto flex justify-end">
        <figure className="w-full md:max-w-[200px] max-w-[160px] lg:max-w-[330px] bg-white bg-opacity-40 py-2 px-4 lg:px-5 lg:py-3">
          <img src="./assets/images/eicher.png" alt="Eicher" />
        </figure>
      </div>
    </section>
  );
};

export default HeroSection;
