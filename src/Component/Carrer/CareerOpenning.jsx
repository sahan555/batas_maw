import React, { useEffect, useState } from "react";
import { careerPost } from "../../Global/Datas/CareerData";
import { HiArrowLongRight } from "react-icons/hi2";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CareerForm from "../Global/CareerForm";

const CareerOpenning = () => {
  const [jobName, setJobName] = useState("");

  // Use useEffect to set jobName when careerPost changes
  useEffect(() => {
    // Check if careerPost array has at least one item
    if (careerPost.length > 0) {
      // Set jobName to the title of the first item in careerPost array
      setJobName(careerPost[0].title);
    }
  }, []);

  const handleTabClick = (title) => {
    // Update the jobName state with the clicked tab's title
    setJobName(title);
  };
  return (
    <div className="career-opening pb-16">
      <div className="container mx-auto">
        <div className="heading-wrapper stripe-wrapper mb-10  max-w-[460px] before:bg-[rgb(39_147_253_/_23%)] after:bg-[rgb(39_147_253_/_23%)]">
          <h3 className="heading stripe py-4">Current openings</h3>
        </div>
        <Tabs>
          <TabList>
            <div className="grid grid-cols-4 gap-7">
              {careerPost.map((item, index) => (
                <Tab key={index}>
                  <div
                    className="col-span-1"
                    onClick={() => handleTabClick(item.title)}
                  >
                    <div className="opening-box relative border border-l-0 border-gray-300 p-6 before:absolute before:left-0 before:top-[-1px] before:h-[calc(100%+2px)] before:w-2.5 before:bg-secondary before:content-[''] outline-0">
                      <h5 className="pb-6 text-xl uppercase">{item.title}</h5>
                      <HiArrowLongRight className="ml-auto text-4xl text-secondary" />
                    </div>
                  </div>
                </Tab>
              ))}
            </div>
          </TabList>
          <div className="career-details pt-20">
            <div className="container mx-auto ">
              <div className="-mx-6 flex flex-wrap">
                <div className="w-1/3 px-6">
                  <CareerForm jobname={jobName} />
                </div>
                <div className="w-2/3 px-6">
                  {careerPost.map((item, index) => (
                    <TabPanel key={index}>
                      <div className="post-details">
                        <article>
                          <h3 className="heading mb-4">{item.title}</h3>
                          <p className="text-grey">{item.desc}</p>
                        </article>
                        {item.list.map((item, index) => (
                          <div className="ul-wrapper pt-9" key={index}>
                            <h5 className="heading mb-2 !text-lg capitalize">
                              {item.name}
                            </h5>
                            <ul className="list-disc pl-8 text-grey ">
                              {item.bullet.map((item, index) => (
                                <li
                                  key={index}
                                  className="[&:not(:last-child)]:mb-2"
                                >
                                  {item.li}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </TabPanel>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default CareerOpenning;
