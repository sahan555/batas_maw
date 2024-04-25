import React, { useState } from "react";
import Map from "../Global/Map";
import { IoIosSearch } from "react-icons/io";
import { MdLocationOn, MdOutlineEmail, MdPhone } from "react-icons/md";
import { MapData } from "../../Global/Datas/MapData";
import { Link } from "react-router-dom";
import { useLayoutData } from "../../Global/Context/Layout";

const MapSection = () => {
  const { city, setCity, coordinate, setCoordinate } = useLayoutData();

  const handleCityInput = (event) => {
    setCity(event.target.value.toLowerCase());
    setCoordinate("");
  };

  const handleCitySearch = (event) => {
    event.preventDefault();
    const cityValue = event.target.elements.searchCity.value.toLowerCase();
    setCity(cityValue);
    setCoordinate("");
    // console.log("Searching for city:", city);
  };
  const renderServiceCenter = (item, index) => (
    <div
      className="dealer-box  border-b border-solid border-light-grey p-10"
      key={index}
    >
      <div className="heading-wrapper mb-3">
        <h6 className="heading !text-lg uppercase">
          {item?.name}
          <span className="ml-6 text-base capitalize text-secondary">
            {item?.type}
          </span>
        </h6>
      </div>
      <div className="dealer-info flex items-center justify-between">
        <ul className="w-[70%] break-all leading-8 text-grey">
          <li className="relative pl-8 ">
            <MdLocationOn className="absolute left-0 top-[6px] text-xl" />
            {item?.address}
          </li>
          <li className="relative pl-8 ">
            <MdPhone className="absolute left-0 top-[6px] text-xl" />
            {item?.phone}
          </li>
          <li className="relative pl-8 ">
            <MdOutlineEmail className="absolute left-0 top-[6px] text-xl" />
            {item?.email}
          </li>
          <li className="relative pl-8 ">website</li>
          <li className="relative pl-8 text-secondary">
            opens until {item?.closingtime}
          </li>
        </ul>
        <div className="btn-wrapper w-[30%]">
          <button
            className="skew-btn btn-transparent flex w-full items-center justify-center gap-2 px-4 py-2 text-sm uppercase text-primary before:border-primary hover:text-white hover:before:bg-primary"
            onClick={() => setCoordinate(item)}
          >
            View on Map
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="map-section">
      <div className="grid grid-cols-11">
        <div className="col-span-7">
          <Map
            city={city}
            coordinate={coordinate}
            setCoordinate={setCoordinate}
            setCity={setCity}
          />
        </div>
        <div className="col-span-4">
          <div className="dealer-wrapper pb-13 relative h-full w-full max-w-[508px]">
            <div className="heading-wrapper p-10 pb-5">
              <h4 className="heading">
                <span className="text-primary">locate</span> a dealer
              </h4>
            </div>
            <div className="form-wrapper mb-4 px-10">
              <form onSubmit={handleCitySearch} className="flex">
                <div className="form-group w-full">
                  <input
                    type="text"
                    name="searchCity"
                    value={city}
                    onChange={handleCityInput}
                    placeholder="Enter city name"
                    className="w-full bg-light-grey px-3 py-2 outline-0"
                  />
                </div>
                <div className="btn-wrapper">
                  <button
                    className="btn-full flex h-full w-[50px] items-center justify-center text-xl before:bg-primary hover:opacity-80"
                    type="submit"
                  >
                    <IoIosSearch />
                  </button>
                </div>
              </form>
            </div>
            <div className="dealer-group h-[600px] overflow-y-auto">
              {MapData?.map((item, index) => (
                <div key={index} className="dealer-box-wrapper  ">
                  {city
                    ? item?.servicecenter
                        ?.filter((item) =>
                          item?.city.toLowerCase().includes(city),
                        )
                        .map((item, index) => renderServiceCenter(item, index))
                    : item?.servicecenter?.map((item, index) =>
                        renderServiceCenter(item, index),
                      )}
                </div>
              ))}
            </div>
            <div className="btn-wrapper absolute bottom-0 left-0 right-0">
              <Link
                to="/about/branches"
                className="btn-full block w-full w-full py-2 text-center capitalize before:bg-primary"
              >
                View ALl
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
