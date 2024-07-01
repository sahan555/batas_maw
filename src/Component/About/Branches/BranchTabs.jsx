import React, { forwardRef } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { HiArrowLongRight } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
// import useGet from "../../../Global/Apis/useGet";
import { Link } from "react-router-dom";

const filterProvincesWithServices = (mapData) => {
  return (
    mapData?.filter((province) =>
      province.districts.some((district) => district.services.length > 0),
    ) || []
  );
};
const BranchTabs = forwardRef(({ setCoordinate, mapData }, ref) => {
  const provincesWithServices = filterProvincesWithServices(mapData);

  const handleViewOnMapClick = (item) => {
    setCoordinate(item);
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="branch-tabs py-12">
      <div className="side-padding">
        <div className="container mx-auto">
          <Tabs>
            <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
              <div className="col-span-1">
                <TabList className="border border-solid border-light-grey">
                  {provincesWithServices?.map((province) => (
                    <Tab
                      key={province?.id}
                      className="tab border-solid border-light-grey px-4 py-3 uppercase [&:not(:last-child)]:border-b"
                    >
                      {province?.name}
                      <IoIosArrowDown />
                    </Tab>
                  ))}
                </TabList>
              </div>
              <div className="tabs-content col-span-full md:col-span-2 lg:col-span-3">
                {provincesWithServices?.map((province, index) => (
                  <TabPanel key={province?.id}>
                    <div className="grid grid-cols-1 gap-8 gap-y-10 lg:grid-cols-2 xl:grid-cols-3">
                      {province?.districts?.map((district, index) => (
                        <React.Fragment key={district?.id}>
                          {district?.services?.map((item) => (
                            <div
                              className="col-span-1 text-grey"
                              key={item?.id}
                            >
                              <h3 className="heading mb-2">{item?.name}</h3>
                              <ul className="mb-3 leading-9">
                                {item?.province && (
                                  <li>
                                    <span>Province</span>
                                    {item?.province}
                                  </li>
                                )}
                                {item?.district && (
                                  <li>
                                    <span>District</span>
                                    {item?.district}
                                  </li>
                                )}
                                {item?.city && (
                                  <li>
                                    <span>city</span>
                                    {item?.city}
                                  </li>
                                )}
                                {item?.type && (
                                  <li>
                                    <span>Type</span>
                                    {item?.type}
                                  </li>
                                )}
                                {item?.location && (
                                  <li>
                                    <span>Address</span>
                                    {item?.location}
                                  </li>
                                )}
                                {item?.email && (
                                  <li>
                                    <span>Email</span>
                                    <Link
                                      to={`mailto:${item?.email}`}
                                      className="inline-block hover:text-primary hover:underline"
                                    >
                                      {item?.email}
                                    </Link>
                                  </li>
                                )}
                                {item?.phone && (
                                  <li>
                                    <span>Phone</span>
                                    <Link
                                      to={`tel:${item?.phone}`}
                                      className="inline-block hover:text-primary hover:underline"
                                    >
                                      {item?.phone}
                                    </Link>
                                  </li>
                                )}
                              </ul>
                              <button
                                className="flex w-full items-center justify-center gap-2 uppercase text-secondary"
                                onClick={() => {
                                  handleViewOnMapClick(item);
                                }}
                              >
                                View on Map
                                <HiArrowLongRight className="text-2xl" />
                              </button>
                            </div>
                          ))}
                        </React.Fragment>
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
});

export default BranchTabs;
