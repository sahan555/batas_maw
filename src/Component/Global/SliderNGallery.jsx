import React from "react";
import Slider from "react-slick";
import "photoswipe/style.css";
import { Gallery, GalleryBox, GalleryLink } from "./Gallery";
const SliderNGallery = ({ Slidersetting, data, transition }) => {

  return (
    <>
      <Gallery titleId="homegallery">
        <Slider {...Slidersetting} className="gallery-slider">
        {data?.map((item, index) => (
            <GalleryBox
              key={index}
              classname={`${transition && "pr-4 transition-all duration-500 ease-out hover:-mt-6 "}`}
            >
              <GalleryLink data={item} index={index} classname={`inline-block h-[300px] w-full focus:outline-none`}/>
            </GalleryBox>
          ))}
        </Slider>
      </Gallery>
    
    </>
  );
};

export default SliderNGallery;
