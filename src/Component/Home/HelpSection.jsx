import React from "react";
import { Helpline } from "../../Global/Datas/HomeData";

const HelpSection = () => {
  return (
    <section className="h-help bg-[#bcbcbe]">
      <div className="container mx-auto">
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-4">
            <figure>
              <img src="./assets/images/flow.png" alt="" />
            </figure>
          </div>
          <div className="col-span-2">
            <div className="help-wrapper bg-white h-full">
              <h4 className="bg-primary text-white p-6 py-2.5 font-medium">24x7 helpline</h4>
              {Helpline.map((item, index) => (
                <div className="help-group [&:not(:last-child)]:mb-2" key={index}>
                  <h5 className="bg-light-grey bg-opacity-85 p-6 py-1 font-medium text-secondary">{item.title}</h5>
                  <div className="help-box p-6 ">
                      <div className="flex flex-wrap justify-between font-medium capitalize ">
                        <div className="help-number">
                            <ul>
                          {item.number.map((number) => (
                            <li className="flex items-center [&:not(:last-child)]:mb-2">
                              <span className="mr-2 text-primary">{number.icon}</span>
                              {number.name}
                              <a href={`tel:${number.phone}`} className="ml-2 hover:text-primary">{number.phone}</a>
                            </li>
                          ))}
                          </ul>
                        </div>
                        <figure className="max-w-[120px] w-full">
                          <img src={item.image} alt={item.title} className="object-cover object-center" />
                        </figure>
                      </div>
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

export default HelpSection;
