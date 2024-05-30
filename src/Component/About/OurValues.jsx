import React from "react";
import { ourValuesData } from "../../Global/Datas/AboutData";

const OurValues = () => {
  return (
    <section className="ourvalue-section bg-secondary bg-opacity-5 py-20">
      <div className="container mx-auto">
        <div className="heading-wrapper mb-10 text-center">
          <h3 className="heading font-hermes-bold !text-3xl">
            Our <b className="font-normal text-secondary">Values</b>
          </h3>
        </div>
        <div className="ourvalue-wrapper">
          <div className="grid grid-flow-col grid-cols-7 grid-rows-2">
            {ourValuesData.map((item, index) => (
              <div
                className={`${index % 3 === 0 ? "col-span-1 row-span-2 bg-secondary bg-opacity-10 text-secondary" : `${(index + 1) % 3 === 0 ? `col-span-1 row-span-1 ${(index + 1) % 6 === 0 ? `bg-white` : `bg-secondary text-white `}` : `col-span-1 row-span-1 ${(index + 2) % 6 === 0 ? `bg-secondary text-white` : `bg-white text-secondary`}`}`}`}
                key={index}
              >
                <div className="ourvalue-box flex h-full min-h-[300px] w-full flex-col items-center justify-center">
                  <figure className="mb-6 h-[70px] w-[70px]">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="object-contain object-center"
                    />
                  </figure>
                  <h5 className="text-center uppercase">{item.title}</h5>
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
