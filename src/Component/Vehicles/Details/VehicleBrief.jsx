import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { Gallery, GalleryBox, GalleryLink } from "../../Global/Gallery";
import { galleryData } from "../../../Global/Datas/HomeData";
import { CustomNextArrow, CustomPrevArrow } from "../../Global/SliderArrows";
import { vehicleData, vehicleLinks } from "../../../Global/Datas/VehicleData";
import { Link } from "react-router-dom";

const VehicleBrief = () => {
  const [bigNav, setBigNav] = useState(null);
  const [smallNav, setSmallNav] = useState(null);
  let bigSliderRef = useRef(null);
  let smallSliderRef = useRef(null);

  useEffect(() => {
    setBigNav(bigSliderRef);
    setSmallNav(smallSliderRef);
  }, []);

  return (
      <div className="details-brief pb-20">
        <div className="grid grid-cols-2 gap-10">
          <div className="col-span-1">
            <div className="details-slider">
              <div className="big-slide-wrapper mb-6">
                <Gallery titleId="detailgallery">
                  <Slider
                    asNavFor={smallNav}
                    ref={(slider) => (bigSliderRef = slider)}
                    draggable={false}
                    dots={true}
                  >
                    {galleryData.map((item, index) => (
                      <GalleryBox key={index}>
                        <GalleryLink
                          data={item}
                          index={index}
                          classname="h-[400px] block outline-0"
                        />
                      </GalleryBox>
                    ))}
                  </Slider>
                </Gallery>
              </div>
              <div className="small-slider-wrapper">
                <Slider
                  asNavFor={bigNav}
                  ref={(slider) => (smallSliderRef = slider)}
                  slidesToShow={4}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  lazyLoad={true}
                  infinite={false}
                  nextArrow={<CustomNextArrow />}
                  prevArrow={<CustomPrevArrow />}
                >
                  {galleryData.map((item, index) => (
                    <div key={index}>
                      <figure>
                        <img src={item.img} alt="gallery" />
                      </figure>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="details-info">
              <div className="heading-wrapper">
                <h1 className="heading">PRO 1055 C DSD</h1>
              </div>
              <div className="details-vehicle pb-8">
                <h5 className="bg-[#D5D5D5] px-4 py-3">Vehicle Data</h5>
                <div className="grid grid-cols-2 gap-6 border-4 border-solid border-[#D5D5D5] p-4">
                  {vehicleData?.map((item, index) => (
                    <div
                      className="col-span-auto flex items-center gap-5"
                      key={index}
                    >
                      <div className="data-li flex w-[140px] items-center gap-2">
                        <figure className="h-[40px] w-[40px] flex-none text-left">
                          <img
                            src={item?.icon}
                            alt={item?.name}
                            className="object-scale-down"
                          />
                        </figure>
                        <p>{item?.name}</p>
                      </div>
                      <h6 className="text-secondary">{item?.value}</h6>
                    </div>
                  ))}
                </div>
              </div>
              <div className="details-desc pb-8 leading-7 tracking-wide">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos quia, magnam laboriosam veritatis aliquid corporis
                  error quisquam totam iusto sapiente dolor quaerat voluptatum
                  excepturi illo consequuntur expedita culpa dolores?
                  Possimus.lorem Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Voluptates accusamus voluptate animi nostrum
                  quia. Assumenda repudiandae labore repellat quae. Iste soluta
                  dolore incidunt vel laboriosam consectetur quae ad
                  necessitatibus voluptatem!
                </p>
              </div>
              <div className="details-link">
                <div className="grid grid-cols-3 gap-6">
                  {vehicleLinks?.map((item, index) => (
                    <div className="col-span-1" key={index}>
                      <Link to={item?.link} className="group flex gap-3">
                        <figure className="h-[20px] w-[20px]">
                          <img src={item?.icon} alt={item?.name} />
                        </figure>
                        <p className="duration-200 group-hover:text-primary">
                          {item?.name}
                        </p>
                        <figure className="duration-200 group-hover:ml-2">
                          <img src="/assets/images/icons/arrow.svg" alt="" />
                        </figure>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
  );
};

export default VehicleBrief;
