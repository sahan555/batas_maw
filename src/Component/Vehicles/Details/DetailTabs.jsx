import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Table from "../../Global/Table";
import { vehicleTabs } from "../../../Global/Datas/VehicleData";

const DetailTabs = () => {
  return (
    <div className="detail-tabs">
      <Tabs>
        <TabList className={`inline-flex border uppercase`}>
          {vehicleTabs?.map((item, index) => (
            <Tab key={index} className={`px-8 py-2 `}>
              {item?.name}
            </Tab>
          ))}
        </TabList>
        <div className="tab-content-wrapper border">
          <TabPanel>
            <div className="tab-panel-content">
              <Table
                data={
                  vehicleTabs.filter(
                    (item) => item.name === "specifications",
                  )[0].data
                }
              />
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 4</h2>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default DetailTabs;
