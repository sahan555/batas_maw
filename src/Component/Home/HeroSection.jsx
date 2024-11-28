import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import useGet from "../../Global/Apis/useGet";
import HtmlParse from "../Global/HtmlParse";

const HeroSection = ({banners}) => {
  var heroSilder = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    fade: true,
  };
  return (
    <section className="hero-section relative">
      <div className="hero-slider-wrapper">
        <Slider {...heroSilder} className="hero-slider">
          {banners?.length > 0 ? (
            banners?.map((item) => (
              <div key={item?.id}>
                <figure className=" h-[300px] md:h-[400px] lg:h-[600px]">
                  <img
                    src={item?.image}
                    className="object-cover object-center"
                    alt={item?.title}
                  />
                </figure>
                <div className="hero-desc stripe -mt-1.5 bg-light-grey py-8 text-center before:w-0 after:w-0 md:before:w-[30px] md:after:right-[60px] md:after:w-[30px] lg:py-10 2xl:before:w-[50px] 2xl:after:right-[90px] 2xl:after:w-[50px]">
                  <div className="side-padding">
                    <div className="container mx-auto">
                      <div className="text-base font-medium leading-8 text-secondary md:pr-16  md:text-xl xl:pr-10 2xl:pr-0 ">
                        <HtmlParse data={item?.description} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>
              <figure className=" h-[400px] lg:h-[600px]">
                <img
                  src="./assets/images/hero/1.png"
                  className="object-cover object-center"
                  alt="Banner"
                />
              </figure>
              <div className="hero-desc stripe -mt-1.5 bg-light-grey py-8 text-center before:w-0 after:w-0 md:before:w-[30px] md:after:right-[60px] md:after:w-[30px] lg:py-10 2xl:before:w-[50px] 2xl:after:right-[90px] 2xl:after:w-[50px]">
                <div className="side-padding">
                  <div className="container mx-auto">
                    <h2 className="text-base font-medium leading-8 text-secondary md:pr-16  md:text-xl 2xl:pr-0">
                      <b className="font-medium text-primary">BATASMAW</b>
                      Commercial Vehicles, established in 2023, is Nepal's
                      premier distributor for Volvo-Eicher commercial vehicles,
                      boasting over 4500 sales, a widespread national presence,
                      and market leadership in both light and heavy segments.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Slider>
      </div>
      <div className="container pointer-events-none absolute inset-x-0 top-9 mx-auto flex justify-end">
        <figure className="w-full max-w-[160px] bg-white bg-opacity-40 px-4 py-2 md:max-w-[200px] lg:max-w-[330px] lg:px-5 lg:py-3">
          <img src="./assets/images/eicher2.png" alt="Eicher" />
        </figure>
      </div>
    </section>
  );
};

export default HeroSection;
