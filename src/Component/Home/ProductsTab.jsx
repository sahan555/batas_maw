import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { SubMenu } from "../../Global/Datas/SubMenu";
import ProductCard from "../Global/ProductCard";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { productData } from "../../Global/Datas/HomeData";

const ProductsTab = () => {
  var ProductSlider = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable:false,
  };
  return (
    <>
      <section className="h-products section-break">
        <div className="container mx-auto">
          <h2 className="heading">products</h2>
          <div className="products-tab">
            <Tabs>
              <div className="tab-headings transfrom  mx-[9px] mb-5 flex -skew-x-[20deg] flex-row flex-wrap items-center justify-between bg-light-grey bg-opacity-50">
                <h4 className="transfrom before:transfrom relative z-0  skew-x-[20deg] px-20 py-2.5 text-white before:absolute before:inset-0 before:-z-[1] before:-skew-x-[20deg] before:bg-primary before:content-[''] ">
                  Featured
                </h4>
                <TabList className="transfrom flex skew-x-[20deg]">
                  {SubMenu.map((item) => (
                    <Tab
                      key={item.id}
                      className="cursor-pointer px-4 font-medium uppercase last:pr-8 focus:outline-none"
                    >
                      {item.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <div className="tab-content pb-10">
                {
                  // Using a for loop to iterate over items
                  (() => {
                    const jsxElements = [];
                    for (let i = 0; i < SubMenu.length; i++) {
                      jsxElements.push(
                        <TabPanel key={i}>
                          <Slider {...ProductSlider} className="product-slider">
                            {productData.map((item, index) => (
                              <div key={index}>
                                <Link to='/vehicles/vehicle-details'>
                                <ProductCard
                                  heading={true}
                                  title={item.title}
                                  image={item.multiImg}
                                />
                                </Link>
                              </div>
                            ))}
                          </Slider>
                        </TabPanel>,
                      );
                    }
                    return jsxElements;
                  })()
                }
              </div>
            </Tabs>
          </div>
          <div></div>
          <div className="btn-wrapper pt-6 text-center">
            <Link
              className="btn-transparent skew-btn inline-block px-8 py-2 uppercase text-primary before:border-primary hover:text-white hover:before:bg-primary"
              to="/vehicles"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsTab;
