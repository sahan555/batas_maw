import React from "react";
import Breadcrumbs from "../Component/Global/BreadCrumbs";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <Breadcrumbs />
      <div
        id="error-page"
        className=" section-break bg-light-grey bg-opacity-40"
      >
        <div className="side-padding">
          <div className="mx-auto max-w-[800px] rounded-lg border bg-white px-6 py-10 text-center">
            <h1 className="mb-3 text-3xl text-primary">Oops! Page Not Found</h1>
            <p className="text-lg leading-7 text-grey">
              It looks like you've stumbled upon a road less traveled. The page
              you are looking for may have been moved, renamed, or simply
              doesn't exist. Don't worry, though! Here are a few options to help
              you get back on track:
            </p>
            <div className="btn-wrapper pt-4">
              <Link
                to={"/"}
                className="btn-transparent skew-btn inline-block px-8 py-2 uppercase text-primary before:border-primary hover:text-white hover:before:bg-primary"
              >
                Go to HomePage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
