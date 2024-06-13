import React from "react";
import Slider from "react-slick";
import { NewsSlider, eventDatas } from "../../Global/Datas/HomeData";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const NewsEvent = () => {
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div onClick={onClick}>
        <IoIosArrowBack className="slick-arrow slick-prev text-primary" />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div onClick={onClick}>
        <IoIosArrowForward className="slick-arrow slick-next text-primary" />
      </div>
    );
  };
  var newsSilder = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <section className="news-section bg-light-grey">
      <div className="mx-auto w-full">
        <div className="grid grid-cols-5">
          <div className="relative col-span-full min-h-[500px] lg:min-h-[460px] xl:col-span-3 xl:min-h-0">
            <Slider {...newsSilder} className="news-slider">
              {NewsSlider.map((item, index) => (
                <div key={index}>
                  <Link to="/">
                    <div className="news-box relative">
                      <figure className="w-full">
                        <img
                          className="object-cover"
                          src={item.img}
                          alt={item.title}
                        />
                      </figure>
                      <div className="side-padding absolute inset-x-0 bottom-0 !h-auto bg-light-grey bg-opacity-65 py-6  xl:pl-[16%] xl:pr-[70px]">
                        <article className="container mx-auto">
                          <h3 className="text-lg font-medium uppercase text-primary">
                            {item.title}
                          </h3>
                          <span className="inline-block text-[13px] font-medium uppercase text-gray-700">
                            {item.date}
                          </span>
                          <p className="line-clamp-2 font-medium">
                            {item.desc}
                          </p>
                        </article>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
            <div className="absolute right-5 top-10 lg:right-12">
              <Link
                to="/"
                className="skew-btn btn-full border border-white px-8 py-2 lg:border-0 lg:before:bg-primary lg:hover:opacity-90"
              >
                View All News
              </Link>
            </div>
            <div className="absolute bottom-[35%] bg-black py-3 pr-4 font-medium text-white before:absolute before:left-full before:top-0 before:h-0 before:w-0 before:border-r-[30px] before:border-t-[48px] before:border-solid before:border-r-transparent before:border-t-black pl-[8.5%] md:pl-[13%] lg:pl-[10%] xl:pl-[16%]">
              <h5>Latest News</h5>
            </div>
          </div>
          <div className="side-padding col-span-full py-10 xl:col-span-2 xl:py-0">
            <div className="container mx-auto">
              <div className="event-group clip-pol relative z-0  before:absolute before:inset-0  before:z-[-1] xl:p-8 xl:before:bg-light-grey xl:before:content-['']  ">
                <h3 className="mb-6 md:mb-10 flex sm:flex-nowrap flex-wrap items-center justify-between text-xl uppercase gap-y-2">
                  upcoming events
                  <Link
                    to="/"
                    className="sm:skew-btn btn-full px-8 py-2 text-sm before:bg-primary hover:opacity-90"
                  >
                    View all events
                  </Link>
                </h3>
                <div className="event-skew-group">
                  {eventDatas?.slice(0, 3).map((item, index) => (
                    <div
                      className="event-box  [&:not(:last-child)]:mb-10 "
                      style={{
                        marginLeft: `-${20 + index * 20}px`,
                        marginRight: `${20 + index * 20}px`,
                        paddingLeft: "30px",
                      }}
                      key={index}
                    >
                      <Link to={''} className="flex flex-wrap justify-between gap-3 md:flex-nowrap">
                        <article>
                          <h6 className="mb-2 font-hermes-thin-italic text-sm uppercase text-grey">
                            <span className="md:skew-btn btn-full mr-4 inline-block px-4 py-1.5  font-normal before:bg-black md:ml-2">
                              {item.date}
                            </span>
                            {item.day}
                          </h6>
                          <p className="line-clamp-3 font-hermes-italic text-sm font-medium">
                            {item.title}
                          </p>
                        </article>
                        <figure
                          className="md:skew-image -order-1 h-[200px] max-w-full rounded-[20px] md:-order-none md:max-h-20
                       md:max-w-40 md:rounded-none"
                        >
                          <img
                            className="object-cover object-center"
                            src={item.img}
                            alt={item.title}
                          />
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
    </section>
  );
};

export default NewsEvent;
