import React from "react";
import Slider from "react-slick";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { TfiGallery } from "react-icons/tfi";
import { BsFiletypePdf } from "react-icons/bs";
import HtmlParse from "./HtmlParse";

const ProductCard = ({
  heading,
  title,
  image,
  slider,
  col,
  index,
  desc,
  slug,
  download,
}) => {
  var ProductSlider = {
    dots: true,
    arrows: false,
    infinite: false,
    autoplay: false,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div
        className={
          col ? "w-full px-4 sm:w-1/2 lg:w-1/3 xl:w-1/4" : "w-full 2xl:px-4"
        }
        key={index}
      >
        <div className={`product-box h-full`}>
          {heading && (
            <article className="py-3 bg-light-grey bg-opacity-65">
              <h4 className="line-clamp-1 px-2 text-center text-xl font-medium text-black">
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
            <figure className="asdsa h-[298px]">
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
                <Link
                  to={`/vehicles/${slug}`}
                  className="cursor-pointer hover:text-primary"
                >
                  <h4 className="mb-2 line-clamp-1 text-2xl font-medium capitalize text-black  hover:text-primary hover:underline duration-200">
                    {title}
                  </h4>
                </Link>
                <div className="line-clamp-3 text-sm tracking-wide text-grey min-h-[60px]">
                  <HtmlParse data={desc} />
                </div>
              </article>
              <div className="product-info text-sm text-grey opacity-90">
                <ul className="flex items-start justify-between">
                  <li className="w-1/2 px-2">
                    <div className="info-wrapper text-center">
                      <Link
                        to={`/vehicles/${slug}`}
                        className="cursor-pointer hover:text-primary"
                      >
                        <LiaLongArrowAltRightSolid className="mx-auto text-2xl" />
                        <span className="inline-block pt-3">Learn More</span>
                      </Link>
                    </div>
                  </li>
                  {/* <li className="w-1/3 px-2">
                    <div className="info-wrapper text-center">
                      <Link
                        to="/"
                        className="cursor-pointer hover:text-primary"
                      >
                        <TfiGallery className="mx-auto text-2xl" />

                        <span className="inline-block pt-3">Photos</span>
                      </Link>
                    </div>
                  </li> */}
                  <li className="w-1/2 px-2">
                    <div className="info-wrapper text-center">
                      <Link
                        to={download}
                        target="_blank"
                        className="cursor-pointer hover:text-primary"
                      >
                        <BsFiletypePdf className="mx-auto text-2xl" />
                        <span className="inline-block pt-3">
                          Download Brochure
                        </span>
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
