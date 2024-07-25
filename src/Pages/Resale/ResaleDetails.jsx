import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../Component/Global/BreadCrumbs";
import VehicleBrief from "../../Component/Vehicles/Details/VehicleBrief";
import DetailTabs from "../../Component/Vehicles/Details/DetailTabs";
import SimilarVehicles from "../../Component/Vehicles/Details/SimilarVehicles";
import useGetById from "../../Global/Apis/useGetById";
import Loading from "../../Component/Global/Loading";
import MetaHelmet from "../../Component/Global/MetaHelmet";
import Error from "../Error";

const ResaleDetails = () => {
  const { slug } = useParams();
  const { data: details, isLoading, error } = useGetById("resales", slug);
  if (error) {
    return <Error />;
  }
  if (isLoading || !details) {
    return <Loading />;
  }

  return (
    <>
      <MetaHelmet
        title={
          details?.meta_title !== undefined
            ? `${details.meta_title} | BatasMaw`
            : `${details?.resale_product_name} | BatasMaw`
        }
        description={details?.meta_description}
        keyword={details?.meta_keywords}
      />

      <Breadcrumbs data={details?.resale_product_name} />
      <section className="details-page py-16">
        <div className="side-padding">
          <div className="container mx-auto">
            <VehicleBrief data={details} resale={true} />
            <DetailTabs data={details} resale={true} />
          </div>
        </div>
      </section>

      <SimilarVehicles
        data={details?.category_name}
        exclude={slug}
        resale={true}
      />
    </>
  );
};

export default ResaleDetails;
