import React, { useState } from "react";
import Breadcrumbs from "../../Component/Global/BreadCrumbs";
import Map from "../../Component/Global/Map";
import { MapData } from "../../Global/Datas/MapData";

const Branches = () => {
  const mapData = MapData;
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState([]);
  const foundItem = mapData.find((item) => item.province === province);

  const handleProvinceChange = (e) => {
    setProvince(e.target.value);
    setDistrict(foundItem)
  };
console.log(province)
console.log(district)

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
                    <select
                      name="province"
                      className="form-control"
                      onChange={handleProvinceChange}
                    >
                      <option value="">Select Province</option>
                      {mapData?.map((item, index) => (
                        <option value={item.province} key={index}>
                          {item.province}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group w-1/3 px-5">
                    <select
                      name="district"
                      className="form-control"
                    >
                    
                      <option value="">Select District</option>
                      {district?.district?.map((item, index) => (
                          <option value={item.name} key={index}>
                            {item.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="form-group w-1/3 px-5">
                    <select
                      name="city"
                      className="form-control"
                    >
                      <option value="">Select City</option>
                      <option value="Bhaktapur">Bhaktapur</option>
                      <option value="Kathmandu">Kathmandu</option>
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
