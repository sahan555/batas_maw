import React from "react";
import Article from "../Component/Global/Article";
import { vehicleArticle } from "../Global/Datas/VehicleData";
import Breadcrumbs from "../Component/Global/BreadCrumbs";
import VehicleTabs from "../Component/Vehicles/VehicleTabs";
import useGet from "../Global/Apis/useGet";

const Resale = () => {
  const { data: cate } = useGet("categories");

  return (
    <>
      <Breadcrumbs />
      <section className="vehicles-page section-break bg-light-grey bg-opacity-40">
        <div className="side-padding">
          <div className="container mx-auto">
            <Article
              title={'Resale'}
              desc={vehicleArticle.desc}
              headClass={""}
            />
            <VehicleTabs data={cate}/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resale;
