import React, { useState } from "react";
import Breadcrumbs from "../../Component/Global/BreadCrumbs";
import Map from "../../Component/Global/Map";
import { MapData } from "../../Global/Datas/MapData";

const Branches = () => {
  const mapData = MapData;
  const [selectedLocation, setSelectedLocation] = useState({
    province: "",
    districtList: [],
    district: "",
    cityList: [],
    city: "",
  });
  const handleLocationSelect = (key, value) => {
    setSelectedLocation((prevState) => ({
      ...prevState,
      [key]: value,
    }));

    if (key === "province") {
      const provinceData = mapData.find((item) => item.province === value);
      if (provinceData) {
        setSelectedLocation((prevState) => ({
          ...prevState,
          districtList: provinceData.district,
          district: "",
          cityList: [],
        }));
      } else {
        setSelectedLocation((prevState) => ({
          ...prevState,
          districtList: [],
          district: "",
          cityList: [],
        }));
      }
    } else if (key === "district") {
      const selectedDistrict = selectedLocation.districtList.find(
        (item) => item.name === value,
      );
      if (selectedDistrict) {
        setSelectedLocation((prevState) => ({
          ...prevState,
          cityList: selectedDistrict.city,
          city: "",
        }));
      } else {
        setSelectedLocation((prevState) => ({
          ...prevState,
          cityList: [],
          city: "",
        }));
      }
    } else if (key === "city") {
      // Update city selection
      setSelectedLocation((prevState) => ({
        ...prevState,
        city: value,
      }));
    }
  };

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
                      onChange={(e) =>
                        handleLocationSelect("province", e.target.value)
                      }
                      value={selectedLocation.province}
                    >
                      <option value="">Select Province</option>
                      {mapData.map((item, index) => (
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
                      onChange={(e) =>
                        handleLocationSelect("district", e.target.value)
                      }
                      value={selectedLocation.district}
                      disabled={!selectedLocation.province}
                    >
                      <option value="">Select District</option>
                      {selectedLocation.districtList.map((item, index) => (
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
                      value={selectedLocation.city}
                      disabled={!selectedLocation.district}
                      onChange={(e) =>
                        handleLocationSelect("city", e.target.value)
                      }
                    >
                      <option value="">Select City</option>
                      {selectedLocation.cityList.map((item, index) => (
                        <option value={item.name} key={index}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="branch-map">
            {console.log(selectedLocation)}
            <Map city={selectedLocation.city} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Branches;
