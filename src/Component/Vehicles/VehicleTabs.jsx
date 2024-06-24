import React, { useRef, useState } from "react";
import ProductCard from "../Global/ProductCard";
import { TabList, TabPanel, Tabs } from "react-tabs";
import { CustomTab } from "../Global/CustomTab";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Pagination from "../Global/Pagination";

const VehicleTabs = ({data:cate}) => {

  const [tabIndex, setTabIndex] = useState(0);
  const [dataFromChild, setDataFromChild] = useState([]);
  const productsRef = useRef(null);
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
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="product-wrapper" ref={productsRef}>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="product-tabs mb-8 px-5 lg:px-0">
          <TabList>
            <Slider {...ProductTab} className="product-tab-slider">
              {cate?.map((item, index) => (
                <CustomTab
                  onClick={() => setTabIndex(index)}
                  key={item?.id}
                  className={`skew-btn btn-transparent cursor-pointer px-4 py-2 text-center uppercase text-grey transition-all duration-300 ease-linear before:border-grey  ${index === tabIndex ? "text-white transition-all duration-300 ease-linear before:border-primary before:bg-primary " : ""}`}
                >
                  {item?.name}
                </CustomTab>
              ))}
            </Slider>
          </TabList>
        </div>
        <div className="tab-content">
          {cate?.map((item, index) => (
            <TabPanel key={index}>
              <div className="-mx-4 flex flex-wrap gap-y-8">
                {dataFromChild?.length > 0 ? (
                  dataFromChild?.map((item, idx) => (
                    <ProductCard
                      key={idx}
                      index={idx}
                      col={true}
                      slider={true}
                      title={item?.name}
                      image={item?.images ? item?.images : item?.image}
                      desc={item?.description}
                      slug={item?.slug}
                      download={item?.pdf}
                    />
                  ))
                ) : (
                  <div className="text-center w-full">
                    <p>No Data found</p>
                  </div>
                )}
              </div>
              <Pagination
                ref={productsRef}
                data={item?.products}
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
