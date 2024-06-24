import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { MapData } from "../../../Global/Datas/MapData";
import { HiArrowLongRight } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import useGet from "../../../Global/Apis/useGet";

const BranchTabs = ({ setCoordinate }) => {
  const {data} =useGet('')
  return (
    <div className="branch-tabs py-12">
      <div className="side-padding">
        <div className="container mx-auto">
          <Tabs>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-8">
              <div className="col-span-1">
                <TabList className="border border-solid border-light-grey">
                  {MapData.map((item, index) => (
                    <Tab
                      key={index}
                      className="tab border-solid border-light-grey px-4 py-3 uppercase [&:not(:last-child)]:border-b"
                    >
                      {item.province}
                      <IoIosArrowDown />
                    </Tab>
                  ))}
                </TabList>
              </div>
              <div className="tabs-content lg:col-span-3 md:col-span-2 col-span-full">
                {MapData?.map((item, index) => (
                  <TabPanel key={index}>
                    <div className="grid grid-cols-1 gap-8 gap-y-10 lg:grid-cols-2 xl:grid-cols-3">
                      {item.servicecenter
                        // .filter((item) => item.province === province)
                        .map((item, index) => (
                          <div className="col-span-1 text-grey" key={index}>
                            <h3 className="heading mb-2">{item?.name}</h3>
                            <ul className="mb-3 leading-9">
                              <li>
                                <span>Province</span>
                                {item.province}
                              </li>
                              <li>
                                <span>District</span>
                                {item.district}
                              </li>
                              <li>
                                <span>city</span>
                                {item.city}
                              </li>
                              <li>
                                <span>Type</span>
                                {item.type}
                              </li>
                              <li>
                                <span>Address</span>
                                {item.address}
                              </li>
                              <li>
                                <span>Email</span>
                                {item.email}
                              </li>
                              <li>
                                <span>Phone</span>
                                {item.phone}
                              </li>
                            </ul>
                            <button
                              className="flex w-full items-center justify-center gap-2 uppercase text-secondary"
                              onClick={() => setCoordinate(item)}
                            >
                              View on Map{" "}
                              <HiArrowLongRight className="text-2xl" />
                            </button>
                          </div>
                        ))}
                    </div>
                  </TabPanel>
                ))}
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default BranchTabs;
