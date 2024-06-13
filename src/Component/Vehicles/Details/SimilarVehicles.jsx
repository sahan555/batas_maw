import React from "react";
import { productData } from "../../../Global/Datas/HomeData";
import ProductCard from "../../Global/ProductCard";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Slider from "react-slick";

const SimilarVehicles = () => {
  var ProductSlider = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="similar-section section-break bg-[#EFEFEF]">
      <div className="side-padding">
        <div className="container mx-auto">
          <div className="heading-wrapper pb-6">
            <h4 className="heading text-lg capitalize ">
              similar products at our dealership
            </h4>
          </div>
          <div className="flex w-full flex-wrap gap-y-8">
            <Slider {...ProductSlider} className="product-slider w-full">
              {productData.map((item, index) => (
                <React.Fragment key={index}>
                  <ProductCard
                    index={index}
                    col={false}
                    slider={true}
                    title={item.title}
                    image={item.multiImg}
                    desc={item.desc}
                  />
                </React.Fragment>
              ))}
            </Slider>
          </div>
          <div className="view-all mt-8 pt-8 text-center">
            <Link
              to=""
              className="group inline-flex items-center gap-3 text-secondary"
            >
              View all products
              <HiOutlineArrowLongRight className="text-2xl duration-300 group-hover:ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarVehicles;
