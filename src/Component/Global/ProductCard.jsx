import React from "react";
import Slider from "react-slick";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
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
  resale,
}) => {
  var ProductSlider = {
    dots: true,
    arrows: false,
    infinite: true,
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
          col ? "w-full px-4 sm:w-1/2 lg:w-1/3 2xl:w-1/4" : "w-full md:px-4"
        }
        key={index}
      >
        <div className={`product-box h-full`}>
          {heading && (
            <article className="bg-light-grey bg-opacity-65 py-3">
              <h4
                className="line-clamp-1 px-2 text-center text-xl font-medium text-black"
                title={title}
              >
                {title}
              </h4>
            </article>
          )}

          {slider ? (
            <Link to={`${resale ? "/resale/" : "/vehicles/"}${slug}`}>
              {Array.isArray(image) ? (
                <Slider {...ProductSlider} className="product-slider-img">
                  {image?.map((item, index) => (
                    <React.Fragment key={index}>
                      <figure className="h-[298px] bg-white">
                        <img
                          src={item?.image}
                          alt={title}
                          className="object-contain object-center"
                        />
                      </figure>
                    </React.Fragment>
                  ))}
                </Slider>
              ) : (
                <Slider {...ProductSlider} className="product-slider-img">
                  <div>
                    <figure className="h-[298px] bg-white">
                      <img
                        src={image}
                        alt={title}
                        className="object-contain object-center"
                      />
                    </figure>
                  </div>
                </Slider>
              )}
            </Link>
          ) : (
            <figure className="h-[298px] bg-white">
              <img
                src={image}
                alt={title}
                className="object-contain object-center"
              />
            </figure>
          )}
          {!heading && (
            <div
              className={`product-details border border-light-grey bg-white p-7 ${slider ? "-mt-[7px]" : ""}`}
            >
              <article className="mb-6 text-center">
                <Link
                  to={`${resale ? "/resale/" : "/vehicles/"}${slug}`}
                  className="cursor-pointer hover:text-primary"
                >
                  <h4
                    className="mb-2 line-clamp-1 text-2xl font-medium capitalize text-black  duration-200 hover:text-primary hover:underline"
                    title={title}
                  >
                    {title}
                  </h4>
                </Link>
                <div className="line-clamp-3 min-h-[60px] text-sm tracking-wide text-grey">
                  <HtmlParse data={desc} />
                </div>
              </article>
              <div className="product-info text-sm text-grey opacity-90">
                <ul className="flex items-start justify-center">
                  <li className="w-1/2 px-2">
                    <div className="info-wrapper text-center">
                      <Link
                        to={`${resale ? "/resale/" : "/vehicles/"}${slug}`}
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
                  {download && (
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
                  )}
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
