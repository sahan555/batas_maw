import React from "react";
import { AtaGlanceData } from "../../Global/Datas/AboutData";

const AtaGlance = () => {
  return (
    <section className="ataglance-section py-20">
      <div className="container mx-auto">
        <div className="heading-wrapper text-center mb-16">
          <h2 className="heading">
            <b className="text-secondary font-normal">Batas MAw</b> at a glance
          </h2>
        </div>
        <div className="ataglance-group max-w-[1200px] w-full mx-auto text-center">
          <div className="grid grid-cols-3">
            {AtaGlanceData.map((item, index) => (
              <div className="col-span-1" key={index}>
                <div className={`ataglance-box p-8 ${index % 2 === 0?"bg-[rgba(219,_237,_255,_0.5)]  max-w-[260px] w-full mx-auto":""} `}>
                  <figure className="w-[100px] h-[100px] mx-auto mb-5">
                    <img src={item.img} alt={item.title} className="object-scale-down object-center" />
                  </figure>
                  <article>
                    <h2 className="font-hermes-bold text-2xl mb-2">{item.title}</h2>
                    <p className="text-grey uppercase text-lg">{item.desc}</p>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtaGlance;
