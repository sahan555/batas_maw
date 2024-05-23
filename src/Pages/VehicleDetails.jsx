import React from "react";
import Breadcrumbs from "../Component/Global/BreadCrumbs";
import VehicleBrief from "../Component/Vehicles/Details/VehicleBrief";
import DetailTabs from "../Component/Vehicles/Details/DetailTabs";
import DetailReview from "../Component/Vehicles/Details/DetailReview";
import MapSection from "../Component/Home/MapSection";
import SimilarVehicles from "../Component/Vehicles/Details/SimilarVehicles";

const VehicleDetails = () => {
  return (
    <>
      <Breadcrumbs />
      <section className="details-page pt-16">
        <div className="container mx-auto">
          <VehicleBrief />
          <DetailTabs />
          <DetailReview />
          <MapSection />
        </div>
        <SimilarVehicles />
      </section>
    </>
  );
};

export default VehicleDetails;
