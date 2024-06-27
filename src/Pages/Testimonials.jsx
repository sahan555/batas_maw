import React from "react";
import Breadcrumbs from "../Component/Global/BreadCrumbs";
import useGet from "../Global/Apis/useGet";

const Testimonials = () => {
  const { data: testimonals } = useGet("testimonials");
  return (
    <>
      <Breadcrumbs />
      <section className="testi-page section-break  bg-light-grey bg-opacity-40">
        <div className="side-padding">
          <div className="mx-auto max-w-[1200px] ">
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
