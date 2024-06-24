import React, { useEffect, useRef, useState } from "react";
import { careerPost } from "../../../Global/Datas/CareerData";
import { HiArrowLongRight } from "react-icons/hi2";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CareerForm from "../../Global/CareerForm";
import { forwardRef } from "react";
import useGet from "../../../Global/Apis/useGet";
import HtmlParse from "../../Global/HtmlParse";

const CareerOpenning = forwardRef((_, ref) => {
  const { data: career } = useGet("careers");
  console.log(career);
  const [jobId, setJobId] = useState("");
  const careerRef = useRef(null);
  const scrollToCareerOpening = () => {
    if (careerRef.current) {
      careerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  // Use useEffect to set jobName when careerPost changes
  useEffect(() => {
    // Check if careerPost array has at least one item
    if (career?.length > 0) {
      // Set jobName to the title of the first item in careerPost array
      setJobId(career[0]?.id);
    }
  }, [career]);

  const handleTabClick = (id) => {
    // Update the jobName state with the clicked tab's title
    setJobId(id);
    scrollToCareerOpening();
  };
  return (
    <>
      {career?.length > 0 && (
        <div className="career-opening py-16" ref={ref}>
          <div className="side-padding">
            <div className="container mx-auto">
              <div className="heading-wrapper stripe-wrapper mb-10  max-w-[460px] before:bg-[rgb(39_147_253_/_23%)] after:bg-[rgb(39_147_253_/_23%)]">
                <h3 className="heading stripe py-4">Current openings</h3>
              </div>

              <Tabs>
                <TabList>
                  <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {career?.map((item, index) => (
                      <Tab key={index}>
                        <div
                          className="group col-span-1 cursor-pointer"
                          onClick={() => handleTabClick(item?.id)}
                        >
                          <div className="opening-box relative border border-l-0 border-gray-300 p-6 outline-0 before:absolute before:left-0 before:top-[-1px] before:h-[calc(100%+2px)] before:w-2.5 before:bg-secondary before:content-['']">
                            <h5 className="pb-6 text-xl uppercase">
                              {item?.name}
                            </h5>
                            <HiArrowLongRight className="ml-auto text-4xl text-secondary duration-300 ease-in-out group-hover:mr-2" />
                          </div>
                        </div>
                      </Tab>
                    ))}
                  </div>
                </TabList>
                <div className="career-details pt-20">
                  <div className="container mx-auto ">
                    <div className="-mx-6 flex flex-wrap">
                      <div className="w-full px-6 pt-10 md:w-1/2 md:pt-0 xl:w-1/3">
                        <CareerForm jobid={jobId} />
                      </div>
                      <div
                        className="-order-1 w-full px-6 md:order-none  md:w-1/2 xl:w-2/3"
                        ref={careerRef}
                      >
                        {career?.map((item, index) => (
                          <TabPanel key={index}>
                            <div className="post-details">
                              <article>
                                <h3 className="heading mb-4">{item?.name}</h3>
                                <div className="text-grey [&>ul]:py-5 [&>ul]:list-disc [&>ul]:pl-8 [&>ul]:pt-2 [&_li:not(:last-child)]:mb-2">
                                  <HtmlParse data={item?.description} />
                                </div>
                              </article>

                              {/* {item.list.map((item, index) => (
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
                        ))} */}
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
        </div>
      )}
    </>
  );
});

export default CareerOpenning;
