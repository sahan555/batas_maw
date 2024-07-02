import React from "react";
import useGet from "../../Global/Apis/useGet";
import { LuPhoneCall } from "react-icons/lu";

const HelpSection = ({ data }) => {
  const { data: help } = useGet("helpline");
  return (
    <section className="h-help bg-[#bcbcbe]">
      <div className="side-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-[0.35rem] lg:grid-cols-6">
            <div className="col-span-full lg:col-span-4">
              <figure className="lg:h-[424px] h-full">
                <img
                  src={data?.home_helpline_static_image}
                  alt=""
                  className="object-contain object-center"
                />
              </figure>
            </div>
            <div className="col-span-full lg:col-span-2">
              <div className="help-wrapper h-full bg-white">
                <h4 className="bg-primary p-6 py-2.5 font-medium text-white">
                  24x7 helpline
                </h4>
                {help?.map((item, index) => (
                  <div
                    className="help-group min-h-auto xl:min-h-[180px] [&:not(:last-child)]:mb-2"
                    key={index}
                  >
                    <h5 className="stripe bg-light-grey bg-opacity-85 p-6 py-1 font-medium text-secondary capitalize">
                      {item.title}
                    </h5>
                    <div className="help-box px-6 py-4 ">
                      <div className="flex flex-wrap justify-between font-medium capitalize ">
                        <div className="help-number">
                          <ul>
                            {item.number.map((number, index) => (
                              <li
                                key={index}
                                className="flex flex-wrap items-center sm:flex-nowrap [&:not(:last-child)]:mb-2"
                              >
                                <span className="mr-2 text-primary">
                                  <LuPhoneCall />
                                </span>
                                {number.name}
                                <a
                                  href={`tel:${number.phone}`}
                                  className="ml-2 hover:text-primary"
                                >
                                  {number.phone}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <figure className="block w-full max-w-[120px] lg:hidden xl:block">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="object-cover object-center"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
