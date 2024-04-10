import React from "react";
import { MissionVision } from "../../Global/Datas/AboutData";

const Vision = () => {
  return (
    <section className="vision-section relative z-0 overflow-hidden bg-primary bg-opacity-15">
      <div className="container mx-auto">
        {MissionVision.filter((item) => item.title === "our vision").map(
          (item, index) => (
            <div key={index} className=" flex items-center justify-between">
              <div className="vision-desc w-1/2">
                <p className="max-w-[400px] w-full">{item.desc}</p>
              </div>
              <div className="vision-content flex min-h-[400px] w-1/2 justify-between items-center relative before:content-[''] before:absolute before:inset-y-0 before:-left-36 stripe before:bg-primary before:w-[170%] z-0 before:z-[-1] after:left-[-90px]">
                <div className="vision-title">
                  <div className="heading-wrapper">
                    <h4 className="heading w-1/2 -indent-5 font-hermes-bold !text-white">
                      {item.title}
                    </h4>
                  </div>
                </div>
                <div className="figure-wrapper mr-16">
                  <figure>
                    <img src={item.img} alt={item.title} />
                  </figure>
                  <span className="absolute inset-y-0 right-[-33%] z-[-1] h-full w-[600px] py-6 opacity-30">
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
      </div>
    </section>
  );
};

export default Vision;
