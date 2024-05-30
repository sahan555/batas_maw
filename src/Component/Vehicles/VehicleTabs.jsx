import React, { useState } from "react";
import ProductCard from "../Global/ProductCard";
import { productData } from "../../Global/Datas/HomeData";
import { SubMenu } from "../../Global/Datas/SubMenu";
import { TabList, TabPanel, Tabs } from "react-tabs";
import { CustomTab } from "../Global/CustomTab";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Pagination from "../Global/Pagination";

const VehicleTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [dataFromChild, setDataFromChild] = useState([]);

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
    <div className="product-wrapper">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
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
        <div className="tab-content">
          {SubMenu.map((_, index) => (
            <TabPanel key={index}>
              <div className="-mx-4 flex flex-wrap gap-y-8">
                {dataFromChild.map((item, idx) => (
                  <ProductCard
                    key={idx}
                    index={idx}
                    col={true}
                    slider={true}
                    title={item.title}
                    image={item.multiImg}
                    desc={item.desc}
                  />
                ))}
              </div>
              <Pagination
                data={productData}
                view={8}
                setDataFromChild={setDataFromChild}
              />
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default VehicleTabs;
