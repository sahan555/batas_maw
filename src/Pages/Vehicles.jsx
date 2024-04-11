import React, { useState } from "react";
import { TabList, TabPanel, Tabs } from "react-tabs";
import { SubMenu } from "../Global/Datas/SubMenu";
import Slider from "react-slick";
import { productData } from "../Global/Datas/HomeData";
import ProductCard from "../Component/Global/ProductCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CustomTab } from "../Component/Global/CustomTab";
import Article from "../Component/Global/Article";
import { vehicleArticle } from "../Global/Datas/VehicleData";

const Vehicles = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div onClick={onClick} className={props.className}>
        <IoIosArrowBack className="slick-arrow slick-prev text-primary" />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div onClick={onClick} className={props.className}>
        <IoIosArrowForward className="slick-arrow slick-next text-primary" />
      </div>
    );
  };
  var ProductTab = {
    dots: false,
    arrows: true,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: false,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <>
      <section className="vehicles-page section-break bg-light-grey bg-opacity-40">
        <div className="container mx-auto">
          <Article title={vehicleArticle.title} desc={vehicleArticle.desc} headClass={''} />
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
                        </>,
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
