import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import Slider from "react-slick";
import { Gallery, GalleryBox, GalleryLink } from "../../Global/Gallery";
import { CustomNextArrow, CustomPrevArrow } from "../../Global/SliderArrows";

const VehicleGallery = ({data}) => {
  const [bigNav, setBigNav] = useState(null);
  const [smallNav, setSmallNav] = useState(null);
  let bigSliderRef = useRef(null);
  let smallSliderRef = useRef(null);
  
  useEffect(() => {
    setBigNav(bigSliderRef);
    setSmallNav(smallSliderRef);
  }, []);
  return (
    <div className="details-slider">
      <div className="big-slide-wrapper mb-6">
        <Gallery titleId="detailgallery">
          {data?.images?.length > 0 ? (
            <>
              <Slider
                asNavFor={smallNav}
                ref={(slider) => (bigSliderRef = slider)}
                draggable={false}
                dots={true}
                slidesToShow={1}
                infinite={data?.images?.length >= 4}
              >
                {data?.images?.map((item, index) => (
                  <GalleryBox key={index}>
                    <GalleryLink
                      data={item}
                      index={index}
                      classname="h-[300px] md:h-[400px] block outline-0"
                    />
                  </GalleryBox>
                ))}
              </Slider>
            </>
          ) : (
            <Slider
              asNavFor={smallNav}
              ref={(slider) => (bigSliderRef = slider)}
              draggable={false}
              dots={true}
              slidesToShow={1}
              infinite={data?.images?.length >= 4}
            >
              <GalleryBox>
                <GalleryLink
                  data={data}
                  index={0}
                  classname="h-[300px] md:h-[400px] block outline-0"
                />
              </GalleryBox>
            </Slider>
          )}
        </Gallery>
      </div>
      <div className="small-slider-wrapper">
        {data?.images?.length > 0 ? (
          <>
            <Slider
              asNavFor={bigNav}
              ref={(slider) => (smallSliderRef = slider)}
              slidesToShow={4}
              swipeToSlide={true}
              focusOnSelect={true}
              lazyLoad={true}
              infinite={data?.images?.length >= 4}
              nextArrow={<CustomNextArrow />}
              prevArrow={<CustomPrevArrow />}
              responsive={[
                {
                  breakpoint: 768, // For devices with width <= 768px
                  settings: {
                    slidesToShow: 3,
                  },
                },
                {
                  breakpoint: 640, // For devices with width <= 768px
                  settings: {
                    slidesToShow: 2,
                  },
                },
              ]}
            >
              {data?.images?.map((item, index) => (
                <div key={index}>
                  <figure className="h-[111px] border border-solid border-[#dddddd]">
                    <img
                      src={item?.image}
                      alt={data?.name}
                      className="object-scale-down object-center"
                    />
                  </figure>
                </div>
              ))}
            </Slider>
          </>
        ) : (
          <Slider
            asNavFor={bigNav}
            ref={(slider) => (smallSliderRef = slider)}
            slidesToShow={4}
            swipeToSlide={true}
            focusOnSelect={true}
            lazyLoad={true}
            infinite={data?.images?.length >= 4}
            nextArrow={<CustomNextArrow />}
            prevArrow={<CustomPrevArrow />}
            responsive={[
              {
                breakpoint: 768, // For devices with width <= 768px
                settings: {
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 640, // For devices with width <= 768px
                settings: {
                  slidesToShow: 2,
                },
              },
            ]}
          >
            <figure className="h-[111px] border border-solid border-[#dddddd]">
              <img
                src={data?.image}
                alt={data?.name}
                className="object-scale-down object-center"
              />
            </figure>
          </Slider>
        )}
      </div>
    </div>
  );
};

export default VehicleGallery;
