import React, { useMemo } from "react";
import { CompareTr, CompareTable } from "../../Global/CompareTable";
import Slider from "react-slick";
import { IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";

const CompareDetails = ({ compareWith, compareTo, compareAll }) => {
  var CompareSlider = {
    dots: true,
    arrows: false,
    infinite: false,
    autoplay: false,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const getUniqueSpecs = (products, specKey) => {
    const specSet = new Set();
    products?.forEach((product) => {
      if (product[specKey]) {
        product[specKey].forEach((spec) => {
          specSet.add(spec.name);
        });
      }
    });
    return Array.from(specSet);
  };
  const getSpecValue = (specifications, specName) => {
    const spec = specifications?.find((spec) => spec.name === specName);
    return spec ? spec.value : "-";
  };
  const productSpecification = useMemo(() => getUniqueSpecs(compareAll, "product_specification"), [compareAll]);

  return (
    <>
      <section className="compare-details pb-16">
        <div className="container mx-auto">
          <div className="heading-wrapper stripe-wrapper mb-3 max-w-[600px] before:bg-primary after:bg-primary">
            <h2 className="heading stripe z-[1] flex items-center gap-4 py-2 pr-[60px] uppercase !text-white">
              {compareTo?.name} VS {compareWith?.name}
            </h2>
          </div>
          <div className="brief-table">
            <CompareTable>
              <CompareTr>
                <td className="w-1/3"></td>
                {compareAll?.map((item, index) => (
                  <td key={index} className="w-1/3">
                    {item?.images ? (
                      <Slider
                        {...CompareSlider}
                        className="product-slider-img w-[200px] lg:w-[300px] xl:w-[400px]"
                      >
                        {item?.images?.map((imgItem, index) => (
                          <div key={index}>
                            <figure className="h-[160px] lg:h-[298px]">
                              <img
                                src={imgItem?.image}
                                alt={item?.name}
                                className="object-cover object-center"
                              />
                            </figure>
                          </div>
                        ))}
                      </Slider>
                    ) : item?.image ? (
                      <figure className="h-[298px]">
                        <img
                          src={item?.image}
                          alt={item?.name}
                          className="object-cover object-center"
                        />
                      </figure>
                    ) : (
                      "-"
                    )}
                  </td>
                ))}
              </CompareTr>
              <CompareTr>
                <td className="w-1/3">Model</td>
                {compareAll?.map((item, index) => (
                  <React.Fragment key={index}>
                    {item ? (
                      <td className="w-1/3" key={index}>
                        <h4 className="text-secondary">{item?.name}</h4>
                      </td>
                    ) : (
                      <td>-</td>
                    )}
                  </React.Fragment>
                ))}
              </CompareTr>
              {/* <CompareTr>
                <td>Ratings</td>
                {compareAll?.map((item, index) => (
                  <React.Fragment key={index}>
                    {item ? (
                      <td key={index}>
                        <div className="rating flex items-start gap-3">
                          <ul className="flex gap-2 text-base">
                            {Array.from({ length: 5 }, (_, index) => (
                              <li
                                key={index}
                                className={
                                  index < item?.rating
                                    ? "text-[#FFB157]"
                                    : "text-grey"
                                }
                              >
                                <IoStar />
                              </li>
                            ))}
                          </ul>
                          <p>{item?.rating} Rating</p>
                        </div>
                      </td>
                    ) : (
                      <td>-</td>
                    )}
                  </React.Fragment>
                ))}
              </CompareTr> */}
              <CompareTr>
                <td className="w-1/3">Brochure</td>
                {compareAll?.map((item, index) => (
                  <React.Fragment key={index}>
                    {item ? (
                      <td className="w-1/3" key={index}>
                        <Link
                          to={item?.pdf}
                          className="group flex gap-3"
                          target="_blank"
                        >
                          <figure className="h-[20px] w-[20px]">
                            <img
                              src="/assets/images/icons/download.svg"
                              alt={item?.name}
                            />
                          </figure>
                          <p className="duration-200 group-hover:text-primary">
                            Download Brochure
                          </p>
                        </Link>
                      </td>
                    ) : (
                      <td>-</td>
                    )}
                  </React.Fragment>
                ))}
              </CompareTr>
            </CompareTable>
          </div>
          <div className="performance-table pt-16">
            <div className="heading-wrapper bg-secondary bg-opacity-10 p-3">
              <h3 className="heading flex items-center gap-4 !text-xl !text-secondary">
                <img
                  src="/assets/images/icons/performance.svg"
                  className="h-[30px] w-[30px]"
                  alt=""
                />
                Specification
              </h3>
            </div>
            <CompareTable>
              {productSpecification?.map((specName, index) => (
                <React.Fragment key={index}>
                  <CompareTr>
                    <td className="w-1/3">{specName}</td>
                    {compareAll?.map((item,idx) => (
                      <td key={idx} className="w-1/3">
                        {getSpecValue(item["product_specification"], specName)}
                      </td>
                    ))}
                  </CompareTr>
                </React.Fragment>
              ))}
            </CompareTable>
          </div>
          {/*
          <div className="dimension-table pt-10">
            <div className="heading-wrapper bg-secondary bg-opacity-10 p-3">
              <h3 className="heading flex items-center gap-4 !text-xl !text-secondary">
                <img
                  src="/assets/images/icons/dimen.svg"
                  className="h-[30px] w-[30px]"
                  alt=""
                />
                Dimensions
              </h3>
            </div>
            <CompareTable>
              <CompareTr
                name={`Length`}
                data={compareAll}
                innerdata={`dimensions`}
                vitraData={`length`}
              />
              <CompareTr
                name={`Width`}
                data={compareAll}
                innerdata={`dimensions`}
                vitraData={`width`}
              />
              <CompareTr
                name={`Height`}
                data={compareAll}
                innerdata={`dimensions`}
                vitraData={`height`}
              />
              <CompareTr
                name={`Wheelbase`}
                data={compareAll}
                innerdata={`dimensions`}
                vitraData={`wheelbase`}
              />
              <CompareTr
                name={`Ground Clearance`}
                data={compareAll}
                innerdata={`dimensions`}
                vitraData={`clearance`}
              />
              <CompareTr
                name={`Minimum Turning Radius`}
                data={compareAll}
                innerdata={`dimensions`}
                vitraData={`turning`}
              />
            </CompareTable>
          </div>
          <div className="transmission-table pt-10">
            <div className="heading-wrapper bg-secondary bg-opacity-10 p-3">
              <h3 className="heading flex items-center gap-4 !text-xl !text-secondary">
                <img
                  src="/assets/images/icons/transmission.svg"
                  className="h-[30px] w-[30px]"
                  alt=""
                />
                Transmission & Loading Capacity
              </h3>
            </div>
            <CompareTable>
              <CompareTr
                name={`Transmission`}
                data={compareAll}
                innerdata={`transmission`}
                vitraData={`transmission`}
              />
              <CompareTr
                name={`Payload (Kgs)`}
                data={compareAll}
                innerdata={`transmission`}
                vitraData={`payload`}
              />
              <CompareTr
                name={`GVW / GCW (Kgs)`}
                data={compareAll}
                innerdata={`transmission`}
                vitraData={`gvw`}
              />
              <CompareTr
                name={`Kerb Weight (Kgs)`}
                data={compareAll}
                innerdata={`transmission`}
                vitraData={`kerb`}
              />
            </CompareTable>
          </div>
          <div className="brake-table pt-10">
            <div className="heading-wrapper bg-secondary bg-opacity-10 p-3">
              <h3 className="heading flex items-center gap-4 !text-xl !text-secondary">
                <img
                  src="/assets/images/icons/brake.svg"
                  className="h-[30px] w-[30px]"
                  alt=""
                />
                BRAKES SUSPENSION
              </h3>
            </div>
            <CompareTable>
              <CompareTr
                name={`Brakes`}
                data={compareAll}
                innerdata={`brake`}
                vitraData={`brake`}
              />
              <CompareTr
                name={`Parking Brakes`}
                data={compareAll}
                innerdata={`brake`}
                vitraData={`parking`}
              />
              <CompareTr
                name={`Front Axle`}
                data={compareAll}
                innerdata={`brake`}
                vitraData={`axle`}
              />
            </CompareTable>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default CompareDetails;
