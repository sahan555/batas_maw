import React from "react";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa6";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const ConTabs = ({ compareAll }) => {
  return (
    <div className="detail-tabs py-10">
      <div className="side-padding">
      <div className="container mx-auto">
        <Tabs className={`border`}>
          <TabList className={`inline-flex border uppercase`}>
            <Tab className={`px-8 py-2 `}>Pros</Tab>
            <Tab className={`px-8 py-2 `}>Cons</Tab>
          </TabList>
          <div className="tab-content-wrapper">
            <TabPanel>
              <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 md:p-10 p-2 md:grid-cols-2">
                {compareAll.map((item, index) => (
                  <React.Fragment key={index}>
                    {item && (
                      <div className="col-span-1">
                        <div className="heading-wrapper bg-grey bg-opacity-20">
                          <h3 className="heading md:stripe flex items-center justify-center gap-3 p-4 !text-xl">
                            <FaThumbsUp className="text-3xl text-green" />
                            {item?.title}
                          </h3>
                        </div>
                        <ul className="bg-grey bg-opacity-5 md:px-10 md:py-8 px-4 py-4 font-hermes-thin-italic text-base ">
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
              <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 md:p-10 p-2 md:grid-cols-2">
                {compareAll.map((item, index) => (
                  <React.Fragment key={index}>
                    {item && (
                      <div className="col-span-1">
                        <div className="heading-wrapper bg-grey bg-opacity-20">
                          <h3 className="heading md:stripe flex items-center justify-center gap-3 p-4 !text-xl">
                            <FaThumbsDown className="text-3xl text-green" />
                            {item?.title}
                          </h3>
                        </div>
                        <ul className="bg-grey bg-opacity-5 md:px-10 md:py-8 p-4 font-hermes-thin-italic text-base ">
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
      </div></div>
    </div>
  );
};

export default ConTabs;
