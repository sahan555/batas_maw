import React from "react";
import Article from "../../Component/Global/Article";
import { vehicleArticle } from "../../Global/Datas/VehicleData";
import Breadcrumbs from "../../Component/Global/BreadCrumbs";
import VehicleTabs from "../../Component/Vehicles/VehicleTabs";
import useGet from "../../Global/Apis/useGet";
import { useLayoutData } from "../../Global/Context/Layout";
import MetaHelmet from "../../Component/Global/MetaHelmet";
import Loading from "../../Component/Global/Loading";

const Generator = () => {
  const { data: staticData } = useGet("static-content");
  const { settings, cate, cateLoading } = useLayoutData();
  if (cateLoading || !cate) {
    return <Loading />;
  }
  return (
    <>
      <MetaHelmet
        title={`Generator | ${settings?.meta_title !== undefined ? settings?.meta_title : "Batas Maw"}`}
      />
      <Breadcrumbs />
      <section className="Generator-page section-break bg-light-grey bg-opacity-40">
        <div className="side-padding">
          <div className="container mx-auto">
            <Article
              title={"Generators"}
              desc={
                "Our generators are designed for durability and efficiency. Whether for industrial use, backup power, or continuous operations, our generators deliver unmatched performance and reliability."
              }
              headClass={""}
            />
            <VehicleTabs data={cate} generator={true} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Generator;
