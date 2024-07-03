import React, { useEffect, useRef, useState } from "react";
// import { careerPost } from "../../../Global/Datas/CareerData";
// import { HiArrowLongRight } from "react-icons/hi2";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CareerForm from "../../Global/CareerForm";
import { forwardRef } from "react";
import HtmlParse from "../../Global/HtmlParse";
import WhiteBox from "../../Global/WhiteBox";
import useGet from "../../../Global/Apis/useGet";

const CareerOpenning = forwardRef((_, ref) => {
  const { data: career } = useGet("careers");
  const [jobId, setJobId] = useState("");
  const careerRef = useRef(null);
  const scrollToCareerOpening = () => {
    if (careerRef.current) {
      careerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    if (career?.length > 0) {
      setJobId(career[0]?.id);
    }
  }, [career]);

  const handleTabClick = (id) => {
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
                          className=" col-span-1 cursor-pointer"
                          onClick={() => handleTabClick(item?.id)}
                        >
                          <WhiteBox details={item} />
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
                                <h3 className="heading mb-0 !text-secondary">
                                  {item?.name}
                                </h3>
                                <p className="mb-4">
                                  <small className="text-grey">
                                    {item?.created_at}
                                  </small>
                                </p>
                                <ul className="text-grey text-base [&>li]:mb-2">
                                  <li>
                                    <p>
                                      <span>Designation : </span>
                                      {item?.designation}
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      <span>Salary : </span>
                                      {item?.salary}
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      <span>Location : </span>
                                      {item?.location}
                                    </p>
                                  </li>
                                </ul>
                                <div className="text-grey [&>ul]:list-disc [&>ul]:py-5 [&>ul]:pl-8 [&>ul]:pt-2 [&_li:not(:last-child)]:mb-2">
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
