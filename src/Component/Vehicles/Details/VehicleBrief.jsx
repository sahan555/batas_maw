import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import HtmlParse from "../../Global/HtmlParse";
import VehicleGallery from "./VehicleGallery";
// import useScrollToElement from "../../../Global/Hooks/useScrollToElement";

const VehicleBrief = ({
  data,
  reviewScroll,
  mapScroll,
  resale,
  genset = false,
}) => {
  const [bigNav, setBigNav] = useState(null);
  const [smallNav, setSmallNav] = useState(null);
  let bigSliderRef = useRef(null);
  let smallSliderRef = useRef(null);
  const vehicleLinks = [
    {
      icon: "/assets/images/icons/download.svg",
      name: "Download Brochure",
      link: data?.pdf,
      target: "_blank",
    },
    {
      icon: "/assets/images/icons/compare.svg",
      name: "Compare",
      link: `${genset ? "/generators/compare/" : "/vehicles/compare/"}${data?.slug}`,
    },
    {
      icon: "/assets/images/icons/pin.svg",
      name: "Find a dealer",
      link: "#!",
      onclick: mapScroll,
    },
    {
      icon: "/assets/images/icons/Inquiry.svg",
      name: "Inquiry",
      link: `${genset ? "/generators/inquiry/" : "/vehicles/inquiry/"}${data?.slug}`,
    },
    {
      icon: "/assets/images/icons/star.svg",
      name: "Reviews",
      link: "#!",
      onclick: reviewScroll,
    },
  ];
  useEffect(() => {
    setBigNav(bigSliderRef);
    setSmallNav(smallSliderRef);
  }, []);
  return (
    <div className="details-brief pb-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="col-span-1">
          <VehicleGallery data={data} />
        </div>
        <div className="-order-1 col-span-1 lg:-order-none">
          <div className="details-info">
            <div className="heading-wrapper">
              <h1 className="heading pb-4 capitalize md:pb-2">
                {data?.name ?? data?.resale_product_name}
              </h1>
            </div>
            {data?.product_features?.length > 0 && !resale && (
              <div className="details-vehicle pb-8">
                <h5 className="bg-[#D5D5D5] px-4 py-3">
                  {genset ? "Eicher Genset" : "Vehicle Data"}
                </h5>
                <div className="grid grid-cols-2 gap-6 border-4 border-solid border-[#D5D5D5] p-4">
                  {data?.product_features?.map((item) => (
                    <div
                      className="col-span-auto flex flex-col xl:flex-row xl:items-center xl:gap-5"
                      key={item?.id}
                    >
                      <div className="data-li w-[140px] flex-none items-center gap-2 xl:flex">
                        {/* <figure className="h-[40px] w-[40px] flex-none text-left">
                          <img
                            src={item?.icon}
                            alt={item?.name}
                            className="object-scale-down"
                          />
                        </figure> */}
                        <p>{item?.name}</p>
                      </div>
                      <h6 className="text-secondary">{item?.value}</h6>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {resale && Object.keys(data?.vehicle_details).length > 0 && (
              <div className="details-vehicle pb-8">
                <h5 className="bg-[#D5D5D5] px-4 py-3">Vehicle Data</h5>
                <div className="grid grid-cols-2 gap-6 border-4 border-solid border-[#D5D5D5] p-4">
                  {Object.entries(data?.vehicle_details).map(([key, value]) => (
                    <React.Fragment key={key}>
                      {value && (
                        <div
                          className="col-span-auto flex flex-col xl:flex-row xl:items-center xl:gap-5"
                          key={key}
                        >
                          <div className="data-li w-[140px] flex-none items-center gap-2 capitalize xl:flex">
                            <p>{key.replace(/_/g, " ")}</p>
                          </div>
                          <h6 className="text-secondary">{value}</h6>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
            <div className="details-desc pb-8 leading-7 tracking-wide">
              <HtmlParse data={data?.description} />
            </div>
            {resale && (
              <>
                {data?.features?.length > 0 && (
                  <div className="details-features mb-4">
                    <HtmlParse data={data?.features} />
                  </div>
                )}
                <div className="btn-wrapper">
                  <Link
                    to={`/resale/inquiry/${data?.slug}`}
                    className="skew-btn btn-full inline-block border-0 px-8 py-3 before:bg-primary hover:opacity-90"
                  >
                    Inquiry Now
                  </Link>
                </div>
              </>
            )}

            {!resale && (
              <div className="details-link">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {vehicleLinks?.map((item, index) => (
                    <div className="col-span-1" key={index}>
                      <Link
                        to={item?.link}
                        className="group flex gap-3"
                        onClick={item?.onclick}
                        target={item?.target}
                      >
                        <figure className="h-[20px] w-[20px]">
                          <img src={item?.icon} alt={item?.name} />
                        </figure>
                        <p className="duration-200 group-hover:text-primary">
                          {item?.name}
                        </p>
                        <figure className="flex-none duration-200 group-hover:ml-2">
                          <img src="/assets/images/icons/arrow.svg" alt="" />
                        </figure>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleBrief;
