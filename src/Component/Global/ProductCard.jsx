import React from "react";
import Slider from "react-slick";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { TfiGallery } from "react-icons/tfi";
import { BsFiletypePdf } from "react-icons/bs";

const ProductCard = ({ heading, title, image, slider, col, index, desc,slug }) => {
  var ProductSlider = {
    dots: true,
    arrows: false,
    infinite: false,
    autoplay: false,fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className={col ? "xl:w-1/4 lg:w-1/3 sm:w-1/2 w-full px-4" : "w-full 2xl:px-4"} key={index}>
        <div className={`product-box`}>
          {heading && (
            <article>
              <h4 className="bg-light-grey bg-opacity-65 px-2 py-3 text-center text-xl font-medium text-black line-clamp-1">
                {title}
              </h4>
            </article>
          )}
          {slider ? (
            <Slider {...ProductSlider} className="product-slider-img">
              {image?.map((item, index) => (
                <div key={index}>
                  <figure className="h-[298px]">
                    <img
                      src={item?.image}
                      alt={title}
                      className="object-cover object-center"
                    />
                  </figure>
                </div>
              ))}
            </Slider>
          ) : (
            <figure className="h-[298px] asdsa">
              <img
                src={image}
                alt={title}
                className="object-cover object-center"
              />
            </figure>
          )}
          {!heading && (
            <div
              className={`product-details border border-light-grey bg-white p-7 ${slider ? "-mt-[7px]" : ""}`}
            >
              <article className="mb-6 text-center">
                <h4 className="mb-2 text-2xl font-medium text-black line-clamp-1">
                  {title}
                </h4>
                <p className="line-clamp-3 text-sm tracking-wide text-grey">
                  {desc}
                </p>
              </article>
              <div className="product-info text-sm text-grey opacity-90">
                <ul className="flex items-start justify-between">
                  <li className="w-1/3 px-2">
                    <div className="info-wrapper text-center">
                      <Link to="/vehicles/vehicle-details" className="hover:text-primary cursor-pointer">
                        <LiaLongArrowAltRightSolid className="mx-auto text-2xl" />
                        <span className="pt-3 inline-block">Learn More</span>
                      </Link>
                    </div>
                  </li>
                  <li className="w-1/3 px-2">
                    <div className="info-wrapper text-center">
                      <Link to="/" className="hover:text-primary cursor-pointer">
                        <TfiGallery className="mx-auto text-2xl" />

                        <span className="pt-3 inline-block">Photos</span>
                      </Link>
                    </div>
                  </li>
                  <li className="w-1/3 px-2">
                    <div className="info-wrapper text-center">
                      <Link to="/" className="hover:text-primary cursor-pointer">
                        <BsFiletypePdf className="mx-auto text-2xl" />
                        <span className="pt-3 inline-block">Download Brochure</span>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
