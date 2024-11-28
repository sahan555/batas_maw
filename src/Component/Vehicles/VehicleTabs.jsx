import React, { useEffect, useRef, useState } from "react";
import ProductCard from "../Global/ProductCard";
import { TabList, TabPanel, Tabs } from "react-tabs";
import { CustomTab } from "../Global/CustomTab";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Pagination from "../Global/Pagination";
import { useLayoutData } from "../../Global/Context/Layout";
import HtmlParse from "../Global/HtmlParse";

const VehicleTabs = ({ data: cate, resale, generator = false }) => {
  const { vehicleTabIndex: tabIndex, setVehicleTabIndex: setTabIndex } =
    useLayoutData();
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(tabIndex);
    }
  }, [tabIndex]);
  const [deviceType, setDeviceType] = useState("desktop");
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
    draggable: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
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
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1023) {
        setDeviceType("tablet");
      } else if (window.innerWidth <= 1535) {
        setDeviceType("laptop");
      } else {
        setDeviceType("desktop");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="product-wrapper" ref={productsRef}>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="product-tabs mb-8 px-5 lg:px-0">
          <TabList>
            <Slider
              ref={sliderRef}
              {...ProductTab}
              className="product-tab-slider"
            >
              {cate?.map((item, index) => {
                if (generator ? item?.name : item?.name === "Genset")
                  return null;
                return (
                  <CustomTab
                    onClick={() => setTabIndex(index)}
                    key={item?.id}
                    className={`skew-btn btn-transparent cursor-pointer px-4 py-2 text-center uppercase text-grey transition-all duration-300 ease-linear before:border-grey  ${index === tabIndex ? "text-white transition-all duration-300 ease-linear before:border-primary before:bg-primary " : ""}`}
                  >
                    <HtmlParse data={item?.name} />
                  </CustomTab>
                );
              })}
            </Slider>
          </TabList>
        </div>
        <div className="tab-content">
          {cate?.map((item, index) => {
            if (generator ? item?.name !== "Genset" : item?.name === "Genset")
              return null;
            return (
              <TabPanel key={index}>
                <div className="-mx-4 flex flex-wrap gap-y-8">
                  {dataFromChild?.length > 0 ? (
                    dataFromChild?.map((item, idx) => (
                      <ProductCard
                        key={idx}
                        index={idx}
                        col={true}
                        slider={true}
                        title={item?.name ?? item?.resale_product_name}
                        image={
                          item?.images?.length > 0 ? item?.images : item?.image
                        }
                        desc={item?.description}
                        slug={item?.slug}
                        download={item?.pdf}
                        resale={resale}
                        genset={generator}
                      />
                    ))
                  ) : (
                    <div className="w-full text-center">
                      <p>No Data found</p>
                    </div>
                  )}
                </div>
                <Pagination
                  ref={productsRef}
                  data={item?.products}
                  view={
                    deviceType === "tablet"
                      ? 8
                      : deviceType === "laptop"
                        ? 9
                        : 8
                  }
                  setDataFromChild={setDataFromChild}
                />
              </TabPanel>
            );
          })}
        </div>
      </Tabs>
    </div>
  );
};

export default VehicleTabs;
