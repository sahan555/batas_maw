import React from "react";
import { ourValuesData } from "../../Global/Datas/AboutData";

const OurValues = () => {
  return (
    <section className="ourvalue-section bg-secondary bg-opacity-5 py-20">
      <div className="side-padding">
      <div className="container mx-auto">
        <div className="heading-wrapper mb-10 text-center">
          <h3 className="heading font-hermes-bold !text-3xl">
            Our <b className="font-normal text-secondary">Values</b>
          </h3>
        </div>
        <div className="ourvalue-wrapper">
          <div className="grid md:grid-flow-col md:grid-cols-7 md:grid-rows-2 grid-cols-2">
            {ourValuesData.map((item, index) => (
              <div
                className={`${index % 3 === 0 ? "col-span-1 md:row-span-2 bg-secondary bg-opacity-10 text-secondary" : `${(index + 1) % 3 === 0 ? `col-span-1 md:row-span-1 ${(index + 1) % 6 === 0 ? `md:bg-white md:text-secondary bg-secondary text-white` : `bg-secondary text-white `}` : `col-span-1 md:row-span-1 hello ${(index + 2) % 6 === 0 ? `md:bg-secondary md:text-white bg-white text-secondary` : `bg-white text-secondary`}`}`}`}
                key={index}
              >
                <div className="ourvalue-box flex h-full min-h-[200px] w-full flex-col items-center justify-center xl:min-h-[300px]">
                  <figure className="mb-6 h-[50px] w-[50px] lg:h-[70px] lg:w-[70px]">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="object-contain object-center"
                    />
                  </figure>
                  <h5 className="px-2 text-center text-sm uppercase lg:text-base">
                    {item.title}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div></div>
    </section>
  );
};

export default OurValues;
