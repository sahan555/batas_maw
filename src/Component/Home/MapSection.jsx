import React from "react";
import Map from "../Global/Map";

const MapSection = () => {
  return (
    <section className="map-section bg-white">
      <div className="grid-cols-5 grid">
        <div className="col-span-9">
          <Map />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
