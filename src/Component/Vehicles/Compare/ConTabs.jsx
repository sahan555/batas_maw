import React from "react";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa6";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const ConTabs = ({ compareAll }) => {
  return (
    <div className="detail-tabs py-10">
      <div className="container mx-auto">
        <Tabs className={`border`}>
          <TabList className={`inline-flex border uppercase`}>
            <Tab className={`px-8 py-2 `}>Pros</Tab>
            <Tab className={`px-8 py-2 `}>Cons</Tab>
          </TabList>
          <div className="tab-content-wrapper">
            <TabPanel>
              <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-8 p-10">
                {compareAll.map((item, index) => (
                  <React.Fragment key={index}>
                    {item && (
                      <div className="col-span-1">
                        <div className="heading-wrapper bg-grey bg-opacity-20">
                          <h3 className="heading stripe flex items-center justify-center gap-3 p-4 !text-xl">
                            <FaThumbsUp className="text-3xl text-green" />
                            {item?.title}
                          </h3>
                        </div>
                        <ul className="bg-grey bg-opacity-5 px-10 py-8 font-hermes-thin-italic text-base ">
                          {item?.pros?.map((item, index) => (
                            <li
                              key={index}
                              className="relative pl-6 [&:not(:last-child)]:pb-6"
                            >
                              <IoCheckmarkCircleOutline className="absolute left-0 top-[3px] text-green" />
                              {item?.li}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-8 p-10">
                {compareAll.map((item, index) => (
                  <React.Fragment key={index}>
                    {item && (
                      <div className="col-span-1">
                        <div className="heading-wrapper bg-grey bg-opacity-20">
                          <h3 className="heading stripe flex items-center justify-center gap-3 p-4 !text-xl">
                            <FaThumbsDown className="text-3xl text-green" />
                            {item?.title}
                          </h3>
                        </div>
                        <ul className="bg-grey bg-opacity-5 px-10 py-8 font-hermes-thin-italic text-base ">
                          {item?.cons?.map((item, index) => (
                            <li
                              key={index}
                              className="relative pl-6 [&:not(:last-child)]:pb-6"
                            >
                              <IoCheckmarkCircleOutline className="absolute left-0 top-[3px] text-green" />
                              {item?.li}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default ConTabs;
