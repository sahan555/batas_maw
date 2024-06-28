import React, { useState } from "react";
import { TabList, TabPanel, Tabs } from "react-tabs";
import Slider from "react-slick";
import { AboutHistory } from "../../Global/Datas/AboutData";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { CustomTab } from "../Global/CustomTab";
import useGet from "../../Global/Apis/useGet";
import HtmlParse from "../Global/HtmlParse";
const HistoryTab = () => {
  const { data: history } = useGet("histories");
  const [tabIndex, setTabIndex] = useState(0);
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div onClick={onClick} className={props.className}>
        <HiArrowLongLeft className="slick-arrow slick-prev text-primary" />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div onClick={onClick} className={props.className}>
        <HiArrowLongRight className="slick-arrow slick-next text-primary" />
      </div>
    );
  };
  var historySlider = {
    dots: false,
    arrows: true,
    infinite: false,
    autoplay: false,
    speed: 500,

    slidesToShow: 8,
    slidesToScroll: 1,
    draggable: false,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
 
  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      {history?.map((item, index) => (
        <TabPanel key={index}>
          <article className="heading-wrapper mb-20">
            <h2 className="heading mb-6">{item?.title}</h2>
            <div className="mx-auto max-w-[900px] text-sm leading-6 text-grey">
              <HtmlParse data={item?.description} />
            </div>
          </article>
        </TabPanel>
      ))}
      <TabList className="relative">
        <Slider {...historySlider} className="history-slider pb-8">
          {(history)?.map((item, index) => (
            <CustomTab
              onClick={() => setTabIndex(index)}
              key={index}
              className={`group  flex cursor-pointer flex-col flex-wrap items-center justify-center transition-all duration-300 ease-linear hover:text-secondary ${index === tabIndex ? "text-secondary" : ""}`}
            >
              <span
                className={`mb-4 inline-block h-6 w-6 rounded-full bg-grey transition-all duration-300 ease-linear group-hover:bg-secondary group-[.text-secondary]:bg-secondary`}
              ></span>
              {item?.year}
            </CustomTab>
          ))}
        </Slider>
      </TabList>
    </Tabs>
  );
};

export default HistoryTab;
