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
  };
  return (
    <section className="h-clients  text-center !pt-20 pb-24">
      <div className="container mx-auto">
        <article className="mb-16">
          <h2 className="heading mb-4">Our Clients</h2>
          <p className="text-black font-medium max-w-[900px] mx-auto">
            lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum
            dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit
            amet, consectetur adipiscing elit.lorem ipsum dolor sit amet,
            consectetur adipiscing elit.lorem ipsum dolor sit amet,{" "}
          </p>
        </article>
        <div className="client-slider max-w-[1500px] mx-auto">
          <Slider {...clientSlider}>
            {clientData.map((item,index)=>(
                <div key={index}>
                <figure className="w-[120px] h-[120px] mx-auto rounded-full">
                    <img className="object-contain object-center" src={item.img} alt={item.name} />
                </figure>
            </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
