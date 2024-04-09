import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { SubMenu } from "../Global/Datas/SubMenu";
import Slider from "react-slick";
import { productData } from "../Global/Datas/HomeData";
import ProductCard from "../Component/Global/ProductCard";

const Vehicles = () => {
  const [tabIndex, setTabIndex] = useState(0);

  var ProductTab = {
    dots: false,
    arrows: true,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  const CustomTab = ({ onClick, children, className }) => {
    return (
      <div className={className} onClick={onClick}>
        {children}
      </div>
    );
  };
  CustomTab.tabsRole = "Tab";
  return (
    <>
      <section className="vehicles-page section-break">
        <div className="container mx-auto">
          <div className="heading-wrapper mb-10 text-center">
            <h1 className="heading mb-3">Vehicles</h1>
            <p className="mx-auto w-full max-w-[900px]">
              lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem
              ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum
              dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit
              amet, consectetur adipiscing elit.lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="product-wrapper">
            <Tabs
              selectedIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
            >
              <div className="product-tabs mb-8">
                <TabList>
                  <Slider {...ProductTab} className="product-tab-slider">
                    {SubMenu.map((item, index) => (
                      <CustomTab
                        onClick={() => setTabIndex(index)}
                        key={item.id}
                        className={`skew-btn btn-transparent cursor-pointer px-4 py-2 text-center uppercase text-grey transition-all duration-300 ease-linear before:border-grey ${index === tabIndex ? "text-white transition-all duration-300 ease-linear before:border-primary before:bg-primary" : ""}`}
                      >
                        {item.name}
                      </CustomTab>
                    ))}
                  </Slider>
                </TabList>
              </div>
              <div className="tab-content pb-10">
                {
                  // Using a for loop to iterate over items
                  (() => {
                    const jsxElements = [];
                    for (let i = 0; i < SubMenu.length; i++) {
                      jsxElements.push(
                        <>
                        <TabPanel key={i}>
                          <div className="-mx-4 flex flex-wrap">
                            {productData.map((item, index) => (
                              <ProductCard
                              index={index}
                                col={true}
                                slider={true}
                                title={item.title}
                                image={item.multiImg}
                                desc={item.desc}
                              />
                            ))}
                          </div>
                        </TabPanel>
                        </>
                      );
                    }
                    return jsxElements;
                  })()
                }
              </div>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vehicles;
