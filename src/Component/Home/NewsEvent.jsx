import React from "react";
import Slider from "react-slick";
import { NewsSlider, eventDatas } from "../../Global/Datas/HomeData";
import { Link } from "react-router-dom";

const NewsEvent = () => {
  var newsSilder = {
    dots: true,
    arrows: false,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="news-section">
      <div className="mx-auto w-full">
        <div className="grid grid-cols-5">
          <div className="relative col-span-3">
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
                      <article className="absolute inset-x-0 bottom-0 bg-light-grey bg-opacity-65 py-6 pl-[16%] pr-[70px]">
                        <h3 className="text-lg font-medium uppercase text-primary">
                          {item.title}
                        </h3>
                        <span className="inline-block text-[13px] font-medium uppercase text-gray-700">
                          {item.date}
                        </span>
                        <p className="line-clamp-2 font-medium">{item.desc}</p>
                      </article>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
            <div className="absolute right-12 top-10">
              <Link
                to="/"
                className="skew-btn btn-full px-8 py-2 before:bg-primary hover:opacity-90"
              >
                View All News
              </Link>
            </div>
            <div className="absolute bottom-[35%] bg-black py-3 pl-[16%] pr-4 font-medium text-white before:absolute before:left-full before:top-0 before:h-0 before:w-0 before:border-r-[30px] before:border-t-[48px] before:border-solid before:border-r-transparent before:border-t-black">
              <h5>Latest News</h5>
            </div>
          </div>
          <div className="col-span-2">
            <div className="event-group skew-btn relative z-0 p-8 before:absolute before:inset-0 before:z-[-1] before:skew-x-[-10deg] before:bg-light-grey before:content-[''] ">
              <h3 className="flex items-center justify-between text-xl uppercase mb-10">
                upcoming events{" "}
                <Link
                  to="/"
                  className="skew-btn btn-full px-8 py-2 before:bg-primary hover:opacity-90 text-sm"
                >
                  View all events
                </Link>
              </h3>
              {eventDatas.slice(0, 3).map((item, index) => (
                <div
                  className="event-box flex gap-3 [&:not(:last-child)]:mb-10"
                  style={{
                    marginLeft: `-${20 + index * 20}px`,
                    marginRight:`${20 + index * 20}px`,
                    paddingLeft: "30px",
                  }}
                  key={index}
                >
                  <article>
                    <h6 className="uppercase mb-2 italic text-grey">
                      <span className="skew-btn btn-full inline-block px-4 py-1 font-normal  before:bg-black mr-4 ml-2">
                        {item.date}
                      </span>
                      {item.day}
                    </h6>
                    <p className="font-medium italic text-sm">{item.title}</p>
                  </article>
                  <figure className="-skew-x-[20deg] overflow-visible max-h-20 max-w-40">
                    <img  className="skew-x-[10deg] object-cover object-center" src={item.img} alt={item.title} />
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvent;
