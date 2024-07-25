import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { vehicleTabs } from "../../../Global/Datas/VehicleData";
import useMediaQuery from "../../../Global/Hooks/useMediaQuery";
import { FaChevronDown } from "react-icons/fa6";
import SimpleTable from "../../Global/SimpleTable";
import ObjectTable from "../../Global/ObjectTable";

const DetailTabs = ({ data, resale }) => {
  const [activeTabName, setActiveTabName] = useState("");
  const [mobileNav, setMobileNav] = useState(false);

  const isMobileDevice = useMediaQuery("(max-width: 1023px)");
  const toggleMobileNav = () => {
    setMobileNav((prevMobileNav) => !prevMobileNav);
  };
  const handleTab = (name) => {
    if (isMobileDevice) {
      setMobileNav(false);
    }
    setActiveTabName(name);
  };
  useEffect(() => {
    if (isMobileDevice) {
      setActiveTabName(vehicleTabs[0].name);
    }
  }, [isMobileDevice]);
  const ResaleDetails = [
    {
      name: "Basic Details",
    },
    {
      name: "Owner Details",
    },

    {
      name: "Additional Info",
    },
  ];
  return (
    <div className="detail-tabs">
      {!resale ? (
        <Tabs>
          <div className="tab-list relative">
            {isMobileDevice && (
              <>
                <div className="tab-btn">
                  <h4
                    className={`transfrom before:transfrom relative z-0 px-8 py-2.5 capitalize text-white before:absolute before:inset-0 before:-z-[1] before:bg-primary before:content-[''] lg:skew-x-[20deg] lg:px-10 lg:before:-skew-x-[20deg] xl:px-20 ${isMobileDevice && "relative block w-full"}`}
                    onClick={toggleMobileNav}
                  >
                    {activeTabName}
                    <span className="absolute inset-y-0 right-0 flex w-[50px] items-center justify-center">
                      <FaChevronDown />
                    </span>
                  </h4>
                </div>
              </>
            )}
            <TabList
              className={`hidden border uppercase lg:inline-flex  ${isMobileDevice && mobileNav && "absolute inset-x-0 bottom-auto top-full z-10 !block  flex-col bg-[#e8e8e9]"}`}
            >
              {vehicleTabs?.map((item, index) => (
                <Tab
                  key={index}
                  className={`cursor-pointer px-8 py-2 ${isMobileDevice && "px-8 py-4"}`}
                  onClick={() => handleTab(item.name)}
                >
                  {item?.name}
                </Tab>
              ))}
            </TabList>
          </div>
          <div className="tab-content-wrapper border">
            <TabPanel>
              <div className="tab-panel-content">
                <SimpleTable data={data?.product_specification} />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab-panel-content">
                <SimpleTable data={data?.product_application} />
              </div>{" "}
            </TabPanel>
            <TabPanel>
              <div className="tab-panel-content">
                <SimpleTable data={data?.product_technology} />
              </div>{" "}
            </TabPanel>
            <TabPanel>
              <div className="tab-panel-content">
                <SimpleTable data={data?.product_benifits} />
              </div>{" "}
            </TabPanel>
          </div>
        </Tabs>
      ) : (
        <Tabs>
          <div className="tab-list relative">
            {isMobileDevice && (
              <>
                <div className="tab-btn">
                  <h4
                    className={`transfrom before:transfrom relative z-0 px-8 py-2.5 capitalize text-white before:absolute before:inset-0 before:-z-[1] before:bg-primary before:content-[''] lg:skew-x-[20deg] lg:px-10 lg:before:-skew-x-[20deg] xl:px-20 ${isMobileDevice && "relative block w-full"}`}
                    onClick={toggleMobileNav}
                  >
                    {activeTabName}
                    <span className="absolute inset-y-0 right-0 flex w-[50px] items-center justify-center">
                      <FaChevronDown />
                    </span>
                  </h4>
                </div>
              </>
            )}
            <TabList
              className={`hidden border uppercase lg:inline-flex  ${isMobileDevice && mobileNav && "absolute inset-x-0 bottom-auto top-full z-10 !block  flex-col bg-[#e8e8e9]"}`}
            >
              {ResaleDetails?.map((item, index) => (
                <Tab
                  key={index}
                  className={`cursor-pointer px-8 py-2 ${isMobileDevice && "px-8 py-4"}`}
                  onClick={() => handleTab(item.name)}
                >
                  {item?.name}
                </Tab>
              ))}
            </TabList>
          </div>
          <div className="tab-content-wrapper border">
            <TabPanel>
              <div className="tab-panel-content">
                <ObjectTable data={data?.basic_details} />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab-panel-content">
                <ObjectTable data={data?.ownership_and_history} />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab-panel-content">
                <ObjectTable data={data?.additional_attributes} />
              </div>
            </TabPanel>
           
          </div>
        </Tabs>
      )}
    </div>
  );
};

export default DetailTabs;
