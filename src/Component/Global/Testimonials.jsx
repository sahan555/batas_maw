import React from "react";
import Slider from "react-slick";
import { CustomNextArrow, CustomPrevArrow } from "./SliderArrows";

const Testimonials = ({ right, heading, data, slider }) => {
  var testiSlider = {
    dots: false,
    arrows: true,
    infinite: false,
    fade: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <section className="testimonals-section">
      <div className="side-padding">
        <div className="container mx-auto">
          <div
            className={`heading-wrapper stripe-wrapper mb-3 max-w-[100%] before:bg-black before:bg-opacity-10 after:bg-black after:bg-opacity-10 md:max-w-[70%] lg:max-w-[600px] ${right ? "stripe-wrapper-opp ml-auto max-w-[100%] before:bg-black before:bg-opacity-10 after:bg-black after:bg-opacity-10 md:max-w-[70%] lg:max-w-[600px]" : ""}`}
          >
            <h2
              className={`heading sm:stripe flex items-center gap-4 py-1 uppercase ${right ? "sm:stripe-opp justify-end pl-0 " : ""}`}
            >
              <img
                src="./assets/images/quote.svg"
                alt="Testimonials"
                className={`h-[50px] w-[50px] object-contain object-center  ${right ? "order-2" : ""}`}
                style={{ transform: right ? "rotateY(180deg)" : "" }}
              />
              {heading}
            </h2>
          </div>
        </div>
      </div>
      <div className="bg-black bg-opacity-10 pb-20">
        <div className="side-padding">
          <div className="container mx-auto">
            {slider ? (
              <Slider {...testiSlider}>
                {data?.map((item, index) => (
                  <div key={index}>
                    <div className="client-box grid grid-cols-7 gap-4">
                      <div
                        className={`col-span-full md:col-span-4 ${right === true ? "order-2" : ""}`}
                      >
                        <div className="client-content flex h-full flex-col flex-wrap justify-center">
                          <article>
                            <h4 className="mb-1 font-medium uppercase">
                              {item?.name}
                            </h4>
                            <p className="mb-5 font-medium uppercase text-grey">
                              {item?.post}
                            </p>
                          </article>
                          <div className="client-testi text-grey">
                            <p>{item?.desc}</p>
                          </div>
                        </div>
                      </div>
                      <div className="-order-1 col-span-full pt-4 md:-order-none md:col-span-3 md:pt-0">
                        <figure className="md:skew-image h-[300px] w-full max-w-[300px] rounded-[20px] shadow-md md:h-[341px] md:max-w-[512px] md:rounded-none lg:-mt-20 lg:ml-20">
                          <img
                            src={item?.img}
                            alt={item?.name}
                            className="object-cover object-center md:object-contain lg:object-cover"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            ) : (
              <>
                <div className="client-box grid grid-cols-7 gap-4 text-left py-6 md:py-0">
                  <div
                    className={`col-span-full md:col-span-4 ${right === true ? "order-2" : ""}`}
                  >
                    <div className="client-content flex h-full flex-col flex-wrap justify-center">
                      <article>
                        <h4 className="mb-1 font-medium uppercase">
                          {data[0]?.name}
                        </h4>
                        <p className="mb-5 font-medium uppercase text-grey">
                          {data[0]?.post}
                        </p>
                      </article>
                      <div className="client-testi text-grey">
                        <p>{data[0]?.desc}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-full md:col-span-3">
                  <figure className="md:skew-image h-[300px] w-full max-w-[300px] rounded-[20px] shadow-md md:h-[341px] md:max-w-[512px] md:rounded-none lg:-mt-20 lg:ml-20">
                  <img
                        src={data[0]?.img}
                        alt={data[0]?.name}
                        className="object-cover object-center md:object-contain lg:object-cover"
                      />
                    </figure>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
