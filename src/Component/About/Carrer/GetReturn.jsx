import React from "react";
import { careerReturn } from "../../../Global/Datas/CareerData";
import HtmlParse from "../../Global/HtmlParse";

const GetReturn = ({ data ,about}) => {
  return (
    <div className="career-return relative">
      <div className="side-padding">
        <div className="container mx-auto flex justify-end py-20">
          <div className="bg-white bg-opacity-90 px-10 py-12 lg:w-1/2">
            <div className="heading-wrapper mb-6">
              <h3 className="heading uppercase">
                What you <span className="text-secondary">get</span> in return
              </h3>
            </div>
            <div className="return-group flex flex-col gap-9">
              {data?.map((item, index) => (
                <div
                  className="return-box flex flex-col gap-2 sm:flex-row sm:gap-6"
                  key={index}
                >
                  <figure className="h-[60px] w-[60px] flex-none">
                    <img src={item.image} alt={item.title} />
                  </figure>
                  <article>
                    <h5 className="heading mb-2 !text-lg">{item.title} </h5>
                    <div className="text-sm leading-6 text-grey first-letter:capitalize">
                      <HtmlParse data={item.description} />
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <figure className=" absolute inset-0 z-[-1]">
        <img
          src={about?.career_get_return_banner_image}
          alt="Career"
          className="object-cover object-center"
        />
      </figure>
    </div>
  );
};

export default GetReturn;
