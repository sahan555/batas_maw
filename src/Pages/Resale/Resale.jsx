import React from "react";
import Article from "../../Component/Global/Article";
import Breadcrumbs from "../../Component/Global/BreadCrumbs";
import VehicleTabs from "../../Component/Vehicles/VehicleTabs";
import useGet from "../../Global/Apis/useGet";
import MetaHelmet from "../../Component/Global/MetaHelmet";
import { useLayoutData } from "../../Global/Context/Layout";
import Loading from "../../Component/Global/Loading";

const Resale = () => {
  const { resale, resaleLoading, settings } = useLayoutData();
  const { data } = useGet("static-content");
  
  if (resaleLoading || !resale) {
    return <Loading />;
  }
  return (
    <>
      <MetaHelmet
        title={`Resale | ${settings?.meta_title !== undefined ? settings?.meta_title : "Batas Maw"}`}
      />
      <Breadcrumbs />
      <section className="vehicles-page section-break bg-light-grey bg-opacity-40">
        <div className="side-padding">
          <div className="container mx-auto">
            <Article
              title={"Resale"}
              desc={data?.resale_page_desc}
              headClass={""}
            />
            <VehicleTabs data={resale} resale={true} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Resale;
