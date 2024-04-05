import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { SubMenu } from "../../Global/Datas/SubMenu";
import ProductCard from "../Global/ProductCard";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const ProductsTab = () => {
  var ProductSlider = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
                  {SubMenu.map((item, index) => (
                    <Tab
                      key={index}
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
                        <TabPanel>
                          <Slider {...ProductSlider} className="product-slider">
                            <div>
                              <ProductCard
                                heading={true}
                                title="PRO 1049 C FSD"
                                image="./assets/images/product/1.png"
                              />
                            </div>
                            <div>
                              <ProductCard
                                heading={true}
                                title="PRO 1059 C HSD"
                                image="./assets/images/product/2.png"
                              />
                            </div>
                            <div>
                              <ProductCard
                                heading={true}
                                title="PRO 1055 C DSD"
                                image="./assets/images/product/3.png"
                              />
                            </div>
                            <div>
                              <ProductCard
                                heading={true}
                                title="PRO 1114 XP TRUCK"
                                image="./assets/images/product/4.png"
                              />
                            </div>
                            <div>
                              <ProductCard
                                heading={true}
                                title="PRO 1049 C FSD"
                                image="./assets/images/product/1.png"
                              />
                            </div>
                            <div>
                              <ProductCard
                                heading={true}
                                title="PRO 1059 C HSD"
                                image="./assets/images/product/2.png"
                              />
                            </div>
                            <div>
                              <ProductCard
                                heading={true}
                                title="PRO 1055 C DSD"
                                image="./assets/images/product/3.png"
                              />
                            </div>
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
          <div className="btn-wrapper text-center pt-6">
            <Link
              className="inline-block btn-transparent skew-btn px-8 py-2 text-primary before:border-primary hover:text-white hover:before:bg-primary uppercase"
              to="/"
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
