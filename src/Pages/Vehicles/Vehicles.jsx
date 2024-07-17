import React from "react";
import Article from "../../Component/Global/Article";
import { vehicleArticle } from "../../Global/Datas/VehicleData";
import Breadcrumbs from "../../Component/Global/BreadCrumbs";
import VehicleTabs from "../../Component/Vehicles/VehicleTabs";
import useGet from "../../Global/Apis/useGet";
import { useLayoutData } from "../../Global/Context/Layout";
import MetaHelmet from "../../Component/Global/MetaHelmet";
import Loading from "../../Component/Global/Loading";

const Vehicles = () => {
  const { data: cate,isLoading } = useGet("categories");
  const { data: staticData } = useGet("static-content");
  const { settings } = useLayoutData();
  if (isLoading || !cate) {
    return <Loading />;
  }
  return (
    <>
      <MetaHelmet title={`Vehicles | ${settings?.meta_title !== undefined? settings?.meta_title :'Batas Maw'}`} />
      <Breadcrumbs />
      <section className="vehicles-page section-break bg-light-grey bg-opacity-40">
        <div className="side-padding">
          <div className="container mx-auto">
            <Article
              title={vehicleArticle.title}
              desc={staticData?.vehicle_page_desc}
              headClass={""}
            />
            <VehicleTabs data={cate} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Vehicles;
