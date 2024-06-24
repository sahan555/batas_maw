import React from "react";
import { MissionVision } from "../../Global/Datas/AboutData";
import useGet from "../../Global/Apis/useGet";

const Mission = () => {
  const { data: missions } = useGet("missions");
  return (
    <section className="mission-section section-break relative z-0 overflow-hidden bg-light-grey bg-opacity-30">
      <div className="side-padding">
        <div className="container mx-auto">
          {missions?.map((item, index) => (
            <div
              key={index}
              className=" flex flex-col items-center justify-between lg:flex-row"
            >
              <div className="figure-wrapper ml-16 hidden lg:block">
                <figure>
                  <img src={item?.image} alt={item?.name} />
                </figure>
                <span className="absolute inset-y-0 left-[-4%] z-[-1] h-full w-[600px] py-10">
                  <img
                    src={item?.image}
                    alt={item?.name}
                    className="h-full w-full object-contain object-left invert filter"
                  />
                </span>
              </div>
              <div className="mission-title">
                <div className="heading-wrapper">
                  <h4 className="heading mb-5 font-hermes-bold !text-secondary first-line:text-primary lg:mb-0 lg:w-1/2 lg:-indent-5">
                    {item?.name}
                  </h4>
                </div>
              </div>
              <div className="mission-list">
                <ul>
                  {item?.our_mission?.map((item, index) => (
                    <li
                      key={index}
                      style={{
                        marginLeft: `-${index * 20}px`,
                        marginRight: `${index * 20}px`,
                      }}
                      className="relative pl-8 [&:not(:last-child)]:mb-8"
                    >
                      <span className="absolute left-0 top-0 font-hermes-bold text-secondary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
