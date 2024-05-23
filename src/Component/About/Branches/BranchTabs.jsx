import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { MapData } from "../../../Global/Datas/MapData";
import { HiArrowLongRight } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";

const BranchTabs = ({setCoordinate}) => {
  return (
    <div className="branch-tabs py-12">
      <div className="container mx-auto">
        <Tabs>
          <div className="grid grid-cols-4 gap-8">
            <div className="col-span-1">
              <TabList className='border border-solid border-light-grey'>
                {MapData.map((item, index) => (
                  <Tab key={index} className='[&:not(:last-child)]:border-b border-solid border-light-grey px-4 py-3 uppercase tab'>{item.province}<IoIosArrowDown />
                  </Tab>
                ))}
              </TabList>
            </div>
            <div className="col-span-3 tabs-content">
              {MapData.map((item, index) => (
                <TabPanel key={index}>
                  <div className="grid grid-cols-3 gap-8 gap-y-10">
                    {item.servicecenter
                        // .filter((item) => item.province === province)
                      .map((item, index) => (
                        <div className="col-span-1 text-grey" key={index}>
                          <h3 className="heading mb-2">{item?.name}</h3>
                          <ul className="leading-9 mb-3">
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
                          <button className="text-secondary flex justify-center gap-2 items-center uppercase w-full" onClick={()=>setCoordinate(item)} >
                            View on Map <HiArrowLongRight className="text-2xl" />
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
  );
};

export default BranchTabs;
