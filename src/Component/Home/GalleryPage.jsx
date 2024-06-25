import React from "react";
import { galleryData } from "../../Global/Datas/HomeData";

import { Link } from "react-router-dom";
import SliderNGallery from "../Global/SliderNGallery";
import { CustomNextArrow, CustomPrevArrow } from "../Global/SliderArrows";
const GalleryPage = ({ data }) => {
  // Slider settings
  const gallerySliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4.25,
    centerMode: true,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    draggable: false,
    cssEase: "linear",
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3.25,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.25,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.25,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <>
      <section className="gallery-section bg-light-grey pb-12 pt-4">
        <SliderNGallery
          Slidersetting={gallerySliderSettings}
          data={
            data
              ? data?.[0]?.images
              : galleryData
          }
          transition={true}
        />
        <div className="container mx-auto">
          <div className="btn-wrapper pt-8 text-center">
            <Link
              className="btn-transparent skew-btn inline-block px-8 py-2 uppercase text-primary before:border-primary hover:text-white hover:before:bg-primary"
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

export default GalleryPage;
