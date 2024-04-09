import React from "react";
import Slider from "react-slick";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { TfiGallery } from "react-icons/tfi";
import { BsFiletypePdf } from "react-icons/bs";

const ProductCard = ({ heading, title, image, slider, col, index, desc }) => {
  var ProductSlider = {
    dots: true,
    arrows: false,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className={col ? "w-1/4 px-4" : ""} key={index}>
        <div className={`product-box`}>
          {heading && (
            <article>
              <h4 className="bg-light-grey bg-opacity-65 px-2 py-3 text-center text-xl font-medium text-black">
                {title}
              </h4>
            </article>
          )}
          {slider ? (
            <Slider {...ProductSlider}>
              {image.map((item, index) => (
                <div key={index}>
                  <figure className="h-[298px]">
                    <img
                      src={item.img}
                      alt={title}
                      className="object-cover object-center"
                    />
                  </figure>
                </div>
              ))}
            </Slider>
          ) : (
            <figure className="h-[298px]">
              <img
                src={image}
                alt={title}
                className="object-cover object-center"
              />
            </figure>
          )}
          {!heading && (
            <div className="product-details">
              <article className={slider ? "-mt-[7px]" : ""}>
                <h4 className="bg-light-grey bg-opacity-65 px-2 py-3 text-center text-xl font-medium text-black">
                  {title}
                </h4>
                <p>{desc}</p>
              </article>
              <div className="product-info">
                <ul className="flex items-start justify-between">
                  <li>
                    <div className="info-wrapper text-center">
                      <LiaLongArrowAltRightSolid className="mx-auto"/>
                      <Link to="/">Learn More</Link>
                    </div>
                  </li>
                  <li>
                    <div className="info-wrapper text-center">
                      <TfiGallery className="mx-auto"/>
                      <Link to="/">Photos</Link>
                    </div>
                  </li>
                  <li>
                    <div className="info-wrapper text-center">
                    <BsFiletypePdf className="mx-auto"/>

                      <Link to="/">Download Brochure</Link>
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
