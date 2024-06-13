import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Breadcrumbs from "../Component/Global/BreadCrumbs";

const Form = () => {
  return (
    <>
      <Breadcrumbs />
      <section className="form-page section-break">
        <div className="side-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:grid-cols-3 xl:grid-cols-4">
              <div className="col-span-1">
                <div className="opening-box relative border border-l-0 border-gray-300 p-6 before:absolute before:left-0 before:top-[-1px] before:h-[calc(100%+2px)] before:w-2.5 before:bg-secondary before:content-['']">
                  <Link to="/forms/support">
                    <h5 className="pb-6 text-xl uppercase">
                      Customer Support Form
                    </h5>
                    <HiArrowLongRight className="ml-auto text-4xl text-secondary" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
