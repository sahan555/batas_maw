import React from "react";
import { MissionVision } from "../../Global/Datas/AboutData";

const Vision = () => {
  return (
    <section className="vision-section relative z-0 overflow-hidden bg-primary bg-opacity-15">
      <div className="side-padding">
      <div className="container mx-auto">
        {MissionVision.filter((item) => item.title === "our vision").map(
          (item, index) => (
            <div key={index} className=" flex flex-wrap md:flex-nowrap items-center justify-between">
              <div className="vision-desc w-full md:w-1/2 flex-none py-6 md:py-0 min-h-[150px] md:min-h-0">
                <p className="xl:max-w-[400px] md:max-w-[300px] w-full">{item.desc}</p>
              </div>
              <div className="-order-1 sm:order-none vision-content flex md:min-h-[400px] w-full lg:w-1/2 md:w-1/3 justify-between items-center relative before:content-[''] before:absolute before:inset-y-0 lg:before:-left-36 before:-left-20 md:stripe before:bg-primary before:w-[200%] z-0 before:z-[-1] lg:after:left-[-90px] after:left-[-60px]">
                <div className="vision-title">
                  <div className="heading-wrapper">
                    <h4 className="heading py-3 md:py-0 md:w-1/2 md:-indent-5 font-hermes-bold !text-white">
                      {item.title}
                    </h4>
                  </div>
                </div>
                <div className="figure-wrapper mr-16 hidden lg:block">
                  <figure>
                    <img src={item.img} alt={item.title} />
                  </figure>
                  <span className="absolute inset-y-0 right-[-33%] z-[-1] h-full lg:w-[600px] w-[400px] py-6 opacity-30">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-full w-full object-contain object-right"
                    />
                  </span>
                </div>
              </div>
            </div>
          ),
        )}
      </div></div>
    </section>
  );
};

export default Vision;
