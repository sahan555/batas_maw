import React from "react";
import { AtaGlanceData } from "../../Global/Datas/AboutData";

const AtaGlance = () => {
  return (
    <section className="ataglance-section py-20">
      <div className="side-padding">
        <div className="container mx-auto">
          <div className="heading-wrapper mb-16 text-center">
            <h2 className="heading">
              <b className="font-normal text-secondary">Batas MAw</b> at a
              glance
            </h2>
          </div>
          <div className="ataglance-group mx-auto w-full max-w-[1200px] text-center">
            <div className="grid sm:grid-cols-3 grid-cols-1">
              {AtaGlanceData.map((item, index) => (
                <div className="col-span-1" key={index}>
                  <div
                    className={`ataglance-box h-full p-4 lg:p-8 ${index % 2 === 0 ? "mx-auto  w-full max-w-[260px] bg-[rgba(219,_237,_255,_0.5)]" : ""} `}
                  >
                    <figure className="mx-auto mb-5 h-[100px] w-[100px]">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="object-scale-down object-center"
                      />
                    </figure>
                    <article>
                      <h2 className="mb-2 font-hermes-bold text-2xl">
                        {item.title}
                      </h2>
                      <p className="text-lg uppercase text-grey">{item.desc}</p>
                    </article>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtaGlance;
