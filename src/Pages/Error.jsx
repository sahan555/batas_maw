import React from "react";
import Breadcrumbs from "../Component/Global/BreadCrumbs";

const Error = () => {
  return (
    <>
      <Breadcrumbs />
      <div id="error-page" className=" section-break">
        <div className="container mx-auto text-center">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
        </div>
      </div>
    </>
  );
};

export default Error;
