import React, { useMemo } from "react";
// import { productData } from "../../../Global/Datas/HomeData";
import ProductCard from "../../Global/ProductCard";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Slider from "react-slick";
import useGet from "../../../Global/Apis/useGet";

const SimilarVehicles = ({ data, exclude }) => {
  const { data: cate } = useGet("categories");
  const similarItems = useMemo(() => {
    if (!cate || !data) return [];
    const categories = cate.find((item) => item?.name === data);
    if (!categories) return [];
    const filterCate = categories.products.filter(
      (item) => item.slug !== exclude,
    );
    const newCate = {
      ...categories,
      products: filterCate,
    };
    return newCate;
  }, [cate, data, exclude]);
  console.log(similarItems?.products);
  var ProductSlider = {
    dots: true,
    arrows: false,
    infinite: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    responsive: [
      {
        breakpoint: 1441,
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
    <div className="similar-section section-break bg-[#EFEFEF]">
      <div className="side-padding">
        <div className="container mx-auto">
          <div className="heading-wrapper pb-6">
            <h4 className="heading text-lg capitalize ">
              similar products at our dealership
            </h4>
          </div>
          <div className="flex w-full flex-wrap gap-y-8">
            <Slider {...ProductSlider} className="custom-slider w-full">
              {similarItems?.products?.map((item, index) => (
                <React.Fragment key={index}>
                  <ProductCard
                    key={index}
                    index={index}
                    col={false}
                    slider={true}
                    title={item?.name}
                    image={
                      item?.images?.length > 0 ? item?.images : item?.image
                    }
                    desc={item?.description}
                    slug={item?.slug}
                    download={item?.pdf}
                  />
                </React.Fragment>
              ))}
            </Slider>
          </div>
          <div className="view-all mt-8 pt-8 text-center">
            <Link
              to="/vehicles/"
              className="group inline-flex items-center gap-3 text-secondary"
            >
              View all products
              <HiOutlineArrowLongRight className="text-2xl duration-300 group-hover:ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarVehicles;
