import React, { useRef, useState } from "react";
import MetaHelmet from "../Component/Global/MetaHelmet";
import { useLayoutData } from "../Global/Context/Layout";
import Breadcrumbs from "../Component/Global/BreadCrumbs";
import Pagination from "../Component/Global/Pagination";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import useGet from "../Global/Apis/useGet";
import Loading from "../Component/Global/Loading";

const SpareServices = () => {
  const { settings } = useLayoutData();
  const [dataFromChild, setDataFromChild] = useState([]);
  const { data, isLoading } = useGet("spare-parts");
  const servicesRef = useRef(null);

  var PartSlider = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  if (isLoading || !data) {
    return <Loading />;
  }
  return (
    <>
      <MetaHelmet
        title={`Spare Services | ${settings?.meta_title !== undefined ? settings?.meta_title : "Batas Maw"}`}
      />

      <Breadcrumbs />
      <section className="spare-page section-break  bg-white">
        <div className="side-padding">
          <div className="container mx-auto">
            <div className="heading-wrapper">
              <h1 className="heading mb-4">Spare Services</h1>
            </div>
            <div className="serives-group" ref={servicesRef}>
              <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                {dataFromChild?.map((item, index) => (
                  <div
                    className="service-box group relative col-span-1 overflow-hidden rounded-xl border bg-white p-4"
                    key={index}
                    title={item?.parts_name}
                  >
                    <Slider {...PartSlider} className="product-slider-img">
                      {item?.images?.map((image, index) => (
                        <figure className="h-40 bg-white" key={index}>
                          <img
                            src={image}
                            alt={item?.parts_name}
                            className="object-contain object-center"
                          />
                        </figure>
                      ))}
                    </Slider>

                    <h3 className="line-clamp-2 text-center text-xl text-secondary">
                      {item?.parts_name}
                    </h3>
                    <div className="service-download absolute inset-x-0 bottom-[-80px] bg-secondary text-white duration-300  group-hover:bottom-0">
                      <Link
                        target="_blank"
                        to={item?.detail_file}
                        className="flex items-center justify-center py-3 text-xl"
                      >
                        <MdOutlineFileDownload className="pr-2 text-3xl" />
                        Download Pdf
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <Pagination
                ref={servicesRef}
                data={data}
                view={10}
                setDataFromChild={setDataFromChild}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpareServices;
