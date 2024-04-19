import React from "react";
import Breadcrumbs from "../../Component/Global/BreadCrumbs";
import Map from "../../Component/Global/Map";

const Branches = () => {
  return (
    <>
      <Breadcrumbs />
      <section className="branches-page">
        <div className="branches-banner">
          <figure className="h-[500px]">
            <img
              src="/assets/images/hero/1.png"
              className="h-full object-cover object-center"
              alt="Batas"
            />
          </figure>
        </div>
        <div className="branches-wrapper section-break">
          <div className="branch-form pb-16">
            <div className="container mx-auto">
              <div className="heading-wrapper mb-7 text-center">
                <h4 className="heading">
                  Covering Expanse: Our Branch Network
                </h4>
              </div>
              <form action="">
                <div className="-mx-5 flex flex-row">
                  <div className="form-group w-1/3 px-5">
                    <select name="province" className="form-control" id="">
                      <option value="" disabled selected>
                        Select Province
                      </option>
                      <option value="">1</option>
                      <option value="">2</option>
                    </select>
                  </div>
                  <div className="form-group w-1/3 px-5">
                    <select name="province" className="form-control" id="">
                      <option value="" disabled selected>
                        select District
                      </option>
                      <option value="">1</option>
                      <option value="">2</option>
                    </select>
                  </div>
                  <div className="form-group w-1/3 px-5">
                    <select name="province" className="form-control" id="">
                      <option value="" disabled selected>
                        Select city
                      </option>
                      <option value="">Bhaktapur</option>
                      <option value="">Kathmandu</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="branch-map">
            <Map />
          </div>
        </div>
      </section>
    </>
  );
};

export default Branches;
