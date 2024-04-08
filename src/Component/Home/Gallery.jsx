import React, { useEffect } from "react";
import Slider from "react-slick";
import { galleryData } from "../../Global/Datas/HomeData";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { Link } from "react-router-dom";
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
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery",
      children: "a",
      preloadFirstSlide: true,
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <>
    <section className="gallery-section bg-light-grey pt-4 pb-12">
      <div className="pswp-gallery" id="gallery">
        <Slider {...gallerySliderSettings} className="gallery-slider">
          {galleryData.map((item, index) => (
            <div
              key={index}
              className=" pr-4 transition-all duration-300 ease-out hover:-mt-6"
            >
              <a
                href={item.img}
                data-pswp-width={800}
                data-pswp-height={600}
                target="_blank"
                rel="noreferrer"
                className="inline-block h-[300px] w-full focus:outline-none"
              >
                <img
                  src={item.img}
                  alt={`gallery-${index}`}
                  className="h-full w-full object-cover object-center"
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>
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
