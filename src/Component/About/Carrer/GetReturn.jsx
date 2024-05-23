import React from "react";
import { careerReturn } from "../../../Global/Datas/CareerData";

const GetReturn = () => {
  return (
    <div className="career-return relative">
      <div className="container mx-auto flex justify-end py-20">
        <div className="w-1/2 px-10 py-12 bg-white bg-opacity-90">
          <div className="heading-wrapper mb-6">
            <h3 className="heading uppercase">
              What you <span className="text-secondary">get</span> in return
            </h3>
          </div>
          <div className="return-group flex flex-col gap-9">
            {careerReturn.list.map((item,index)=>(
            <div className="return-box flex gap-6" key={index}>
                <figure className="w-[60px] h-[60px] flex-none">
                    <img src={item.img} alt={item.title} />
                </figure>
                <article>
                    <h5 className="heading !text-lg mb-2">{item.title} </h5>
                    <p className="text-sm text-grey leading-6">{item.desc}</p>
                </article>
            </div>
            ))}
          </div>
        </div>
      </div>
      <figure className=" absolute inset-0 z-[-1]">
        <img src={careerReturn.banner} alt="Career" className="object-cover object-center" />
      </figure>
    </div>
  );
};

export default GetReturn;
