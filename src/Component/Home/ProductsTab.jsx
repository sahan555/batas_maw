import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { SubMenu } from "../../Global/Datas/SubMenu";
import ProductCard from "../Global/ProductCard";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import useMediaQuery from "../../Global/Hooks/useMediaQuery";
import { FaChevronDown } from "react-icons/fa6";
import useGet from "../../Global/Apis/useGet";
// import useGetById from "../../Global/Apis/useGetById";

const ProductsTab = () => {
  const { data: cate } = useGet("categories");
  const [activeTabName, setActiveTabName] = useState("Featured");
  const isMobileDevice = useMediaQuery("(max-width: 1023px)");
  const [mobileNav, setMobileNav] = useState(false);
  const toggleMobileNav = () => {
    setMobileNav((prevMobileNav) => !prevMobileNav);
  };
  const handleTab = (name) => {
    if (isMobileDevice) {
      setMobileNav(false);

      setActiveTabName(name);
    }
  };
  useEffect(() => {
    if (isMobileDevice) {
      setActiveTabName(SubMenu[0].name);
    }
  }, [isMobileDevice]);
  var ProductSlider = {
    dots: true,
    arrows: false,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="h-products section-break">
        <div className="side-padding">
          <div className="container mx-auto">
            <h2 className="heading lg:lb-0 pb-2">products</h2>
            <div className="products-tab">
              <Tabs>
                <div className="tab-headings transfrom  relative mb-5 flex flex-row flex-wrap items-center justify-between bg-light-grey bg-opacity-50 lg:mx-[9px] lg:-skew-x-[20deg]">
                  <h4
                    className={`transfrom before:transfrom relative z-0 px-8 py-2.5 capitalize text-white before:absolute before:inset-0 before:-z-[1] before:bg-primary before:content-[''] lg:skew-x-[20deg] lg:px-10 lg:before:-skew-x-[20deg] xl:px-20 ${isMobileDevice && "relative block w-full"}`}
                    onClick={toggleMobileNav}
                  >
                    {activeTabName}
                    {isMobileDevice && (
                      <>
                        <span className="absolute inset-y-0 right-0 flex w-[50px] items-center justify-center">
                          <FaChevronDown />
                        </span>
                      </>
                    )}
                  </h4>
                  <TabList
                    className={`transfrom hidden lg:flex lg:skew-x-[20deg] ${isMobileDevice && mobileNav && "absolute inset-x-0 bottom-auto top-full z-10 !block flex-col bg-[#e8e8e9]"}`}
                  >
                    {cate?.map((item) => (
                      <Tab
                        key={item?.id}
                        className={`cursor-pointer px-3 font-medium uppercase focus:outline-none xl:px-4 xl:last:pr-8 ${isMobileDevice && "px-8 py-4"} `}
                        onClick={() => handleTab(item?.name)}
                      >
                        {item?.name}
                      </Tab>
                    ))}
                  </TabList>
                </div>
                <div className="tab-content pb-10">
                  {cate?.map((item) => (
                    <TabPanel key={item?.id}>
                      <Slider {...ProductSlider} className="product-slider">
                        {item?.products?.map((product, index) => (
                          <div key={index}>
                            <Link to={`/vehicles/${product?.slug}`}>
                              <ProductCard
                                heading={true}
                                title={product?.name}
                                image={product?.image}
                              />
                            </Link>
                          </div>
                        ))}
                      </Slider>
                    </TabPanel>
                  ))}
                </div>
              </Tabs>
            </div>
            <div className="btn-wrapper pt-6 text-center">
              <Link
                className="btn-transparent skew-btn inline-block px-8 py-2 uppercase text-primary before:border-primary hover:text-white hover:before:bg-primary"
                to="/vehicles"
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsTab;
