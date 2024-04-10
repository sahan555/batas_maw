import React from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Testimonials = ({ right, heading, data, slider }) => {
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div onClick={onClick} className={props.className}>
        <IoIosArrowBack className="slick-arrow slick-prev text-primary" />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div onClick={onClick} className={props.className}>
        <IoIosArrowForward className="slick-arrow slick-next text-primary" />
      </div>
    );
  };
  var testiSlider = {
    dots: false,
    arrows: true,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <section className="testimonals-section">
      <div className="mx-auto w-full">
        <div
          className={`heading-wrapper stripe-wrapper mb-3 max-w-[900px] before:bg-black before:bg-opacity-10 ${right ? "stripe-wrapper-opp ml-auto" : ""}`}
        >
          <h2
            className={`heading stripe flex items-center gap-4 py-1 pl-[20%] uppercase ${right ? "stripe-opp justify-end pl-0 pr-[20%]" : ""}`}
          >
            <img
              src="./assets/images/quote.svg"
              alt="Testimonials"
              className={`h-[50px] w-[50px] object-contain object-center ${right ? "order-2" : ""}`}
              style={{ transform: right ? "rotateY(180deg)" : "" }}
            />
            {heading}
          </h2>
        </div>
      </div>
      <div className="bg-black bg-opacity-10 pb-20">
        <div className="container mx-auto">
          {slider ? (
            <Slider {...testiSlider}>
              {data?.map((item, index) => (
                <div key={index}>
                  <div className="client-box grid grid-cols-7">
                    <div
                      className={`col-span-4 ${right === true ? "order-2" : ""}`}
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
                    <div className="col-span-3">
                      <figure className="skew-image -mt-20 ml-20 h-[341px] max-w-[512px] shadow-md">
                        <img
                          src={item?.img}
                          alt={item?.name}
                          className="object-cover object-center"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <>
              <div className="client-box grid grid-cols-7 text-left">
                <div
                  className={`col-span-4 ${right === true ? "order-2" : ""}`}
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
                <div className="col-span-3">
                  <figure className="skew-image -mt-20 ml-20 h-[341px] max-w-[512px] shadow-md">
                    <img
                      src={data[0]?.img}
                      alt={data[0]?.name}
                      className="object-cover object-center"
                    />
                  </figure>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
