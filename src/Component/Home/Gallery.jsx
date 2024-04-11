import React from "react";
import { galleryData } from "../../Global/Datas/HomeData";

import { Link } from "react-router-dom";
import SliderNGallery from "../Global/SliderNGallery";
const Gallery = () => {
  // Slider settings
  const gallerySliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4.25,
    centerMode: true,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    draggable:false,
    cssEase: 'linear',
  };
  

  return (
    <>
    <section className="gallery-section bg-light-grey pt-4 pb-12">
      <SliderNGallery Slidersetting={gallerySliderSettings} data={galleryData} transition={true}/>
      <div className="container mx-auto">
        <div className="btn-wrapper pt-8 text-center">
          <Link
            className="btn-transparent skew-btn inline-block px-8 py-2 text-primary before:border-primary hover:text-white hover:before:bg-primary uppercase"
            to="/"
          >
            View All Gallery
          </Link>
        </div>
      </div>
      </section>
    </>
  );
};

export default Gallery;
