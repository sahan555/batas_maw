import React from "react";
import { MissionVision } from "../../Global/Datas/AboutData";

const Mission = () => {
  return (
    <section className="mission-section bg-light-grey bg-opacity-30 relative section-break overflow-hidden z-0">
      <div className="side-padding">
      <div className="container mx-auto">
        {MissionVision.filter((item) => item.title === "our mission").map(
          (item, index) => (
            <div
              key={index}
              className=" flex items-center justify-between lg:flex-row flex-col"
            >
              <div className="figure-wrapper ml-16 lg:block hidden">
                <figure>
                  <img src={item.img} alt={item.title} />
                </figure>
                <span className="absolute inset-y-0 left-[-4%] h-full w-[600px] py-10 z-[-1]">
                  <img src={item.img} alt={item.title} className="h-full w-full object-contain object-left filter invert" />
                </span>
              </div>
              <div className="mission-title">
                <div className="heading-wrapper">
                  <h4 className="heading lg:w-1/2 lg:-indent-5 font-hermes-bold !text-secondary first-line:text-primary lg:mb-0 mb-5">{item.title}</h4>
                </div>
              </div>
              <div className="mission-list">
                <ul>
                  {item.list.map((item, index) => (
                    <li
                      key={index}
                      style={{
                        marginLeft: `-${index * 20}px`,
                        marginRight: `${index * 20}px`,
                      }}
                      className="[&:not(:last-child)]:mb-8 relative pl-8"
                    >
                      <span className="text-secondary font-hermes-bold absolute left-0 top-0">{String(index+1).padStart(2, '0')}</span>
                      {item.li}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ),
        )}
      </div></div>  
    </section>
  );
};

export default Mission;
