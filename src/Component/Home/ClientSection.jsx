import React from "react";
import Slider from "react-slick";
import { clientData } from "../../Global/Datas/HomeData";

const ClientSection = () => {
  var clientSlider = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <section className="h-clients  !pt-20 pb-24 text-center">
      <div className="side-padding">
        <div className="container mx-auto">
          <article className="mb-16">
            <h2 className="heading mb-4">Our Clients</h2>
            <p className="mx-auto max-w-[900px] font-medium text-grey">
              lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem
              ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum
              dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit
              amet, consectetur adipiscing elit.lorem ipsum dolor sit amet,{" "}
            </p>
          </article>
          <div className="client-slider mx-auto max-w-[1500px]">
            <Slider {...clientSlider}>
              {clientData.map((item, index) => (
                <div key={index}>
                  <figure className="mx-auto h-[120px] w-[120px] rounded-full">
                    <img
                      className="object-contain object-center"
                      src={item.img}
                      alt={item.name}
                    />
                  </figure>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
