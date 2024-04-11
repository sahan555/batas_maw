import React, { useEffect } from "react";
import Slider from "react-slick";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
const SliderNGallery = ({ Slidersetting, data,transition }) => {
  useEffect(() => {
    const backEasing = {
      in: 'cubic-bezier(0.6, -0.28, 0.7, 1)',
      out: 'cubic-bezier(0.3, 0, 0.32, 1.275)',
      inOut: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    };
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery",
      children: "a",
      mainClass: 'pswp--custom',
      preload: [1, 4],
      preloaderDelay:1,
      showHideAnimationType: 'zoom',
      showAnimationDuration: 0,
      hideAnimationDuration: 0,
      pswpModule: () => import("photoswipe"),
    });
    lightbox.on('firstUpdate', () => {
      lightbox.pswp.options.easing = backEasing.out;
    });
    lightbox.on('initialZoomInEnd', () => {
      lightbox.pswp.options.easing = backEasing.inOut;
    });
    lightbox.on('close', () => {
      lightbox.pswp.options.easing = backEasing.in;
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);
  return (
    <div className="pswp-gallery" id="gallery">
      <Slider {...Slidersetting} className="gallery-slider">
        {data?.map((item, index) => (
          <div
            key={index}
            className={`${transition && 'transition-all duration-500 ease-out hover:-mt-6 pr-4 '}`}
          >
            <a
              href={item?.img}
              data-pswp-width={800}
              data-pswp-height={600}
              target="_blank"
              rel="noreferrer"
              className="inline-block h-[300px] w-full focus:outline-none"
            >
              <img
                src={item?.img}
                alt={`${item?.title ? item?.title : `gallery-${index}`}`}
                className="h-full w-full object-cover object-center"
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderNGallery;
