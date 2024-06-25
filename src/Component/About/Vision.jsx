import React from "react";
import { MissionVision } from "../../Global/Datas/AboutData";
import HtmlParse from "../Global/HtmlParse";

const Vision = ({ data }) => {
  return (
    <section className="vision-section relative z-0 overflow-hidden bg-primary bg-opacity-15" id="vision">
      <div className="side-padding">
        <div className="container mx-auto">
          <div className=" flex flex-wrap items-center justify-between md:flex-nowrap">
            <div className="vision-desc min-h-[150px] w-full flex-none py-6 md:min-h-0 md:w-1/2 md:py-0">
              <div className="w-full md:max-w-[300px] xl:max-w-[400px]">
                <HtmlParse data={data?.vision_message} />
              </div>
            </div>
            <div className="vision-content stripe relative z-0 -order-1 flex w-full items-center justify-between before:absolute before:inset-y-0 before:-left-20 before:z-[-1] before:w-[200%] before:bg-primary before:content-[''] after:left-[-60px] md:order-none md:min-h-[400px] md:w-1/3 lg:w-1/2 lg:before:-left-36 lg:after:left-[-90px]">
              <div className="vision-title">
                <div className="heading-wrapper">
                  <h4 className="heading py-3 font-hermes-bold !text-white md:w-1/2 md:py-0 md:-indent-5">
                    {data?.vision_name}
                  </h4>
                </div>
              </div>
              <div className="figure-wrapper mr-16 hidden lg:block">
                <figure>
                  <img src={data?.vision_image} alt={data?.vision_name} />
                </figure>
                <span className="absolute inset-y-0 right-[-33%] z-[-1] h-full w-[400px] py-6 opacity-30 lg:w-[600px]">
                  <img
                    src={data?.vision_image}
                    alt={data?.vision_name}
                    className="h-full w-full object-contain object-right"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
