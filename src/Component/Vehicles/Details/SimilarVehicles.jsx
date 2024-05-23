import React from "react";
import { productData } from "../../../Global/Datas/HomeData";
import ProductCard from "../../Global/ProductCard";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const SimilarVehicles = () => {
  return (
    <div className="similar-section section-break bg-[#EFEFEF]">
      <div className="container mx-auto">
        <div className="heading-wrapper pb-6">
          <h4 className="heading text-lg capitalize ">
            similar products at our dealership
          </h4>
        </div>
        <div className="-mx-4 flex flex-wrap gap-y-8">
          {productData.slice(0, 4).map((item, index) => (
            <ProductCard
              index={index}
              col={true}
              slider={true}
              title={item.title}
              image={item.multiImg}
              desc={item.desc}
            />
          ))}
        </div>
        <div className="view-all pt-8">
          <Link to="" className="group inline-flex gap-3 items-center text-secondary">
            View all products
            <HiOutlineArrowLongRight className="duration-300 group-hover:ml-2 text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SimilarVehicles;
