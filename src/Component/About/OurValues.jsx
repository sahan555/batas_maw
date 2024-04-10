import React from "react";
import { ourValuesData } from "../../Global/Datas/AboutData";

const OurValues = () => {
  return (
    <section className="ourvalue-section bg-secondary bg-opacity-5 py-20">
      <div className="container mx-auto">
        <div className="heading-wrapper text-center mb-10">
          <h3 className="heading font-hermes-bold !text-3xl">
            Our <b className="text-secondary font-normal">Values</b>
          </h3>
        </div>
        <div className="ourvalue-wrapper">
          <div className="grid grid-flow-col grid-rows-2 grid-cols-7">
            {ourValuesData.map((item, index) => (
              <div className={`${index % 3 === 0 ?'row-span-2 col-span-1 bg-secondary bg-opacity-10 text-secondary':`${(index +1) % 3 === 0?`row-span-1 col-span-1 ${(index+1) % 6 === 0?`bg-white`:`bg-secondary text-white `}`:`row-span-1 col-span-1 ${(index+2) % 6 === 0?`bg-secondary text-white`:`bg-white text-secondary`}`}`}`} key={index}>
                <div className="ourvalue-box h-full flex justify-center items-center flex-col w-full min-h-[300px]">
                  <figure className="w-[70px] h-[70px] mb-6">
                    <img src={item.img} alt={item.title} className="object-contain object-center" />
                  </figure>
                  <h5 className="uppercase text-center">{item.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
