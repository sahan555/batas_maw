import React from "react";
import { Helmet } from "react-helmet-async";
import { useLayoutData } from "../../Global/Context/Layout";

const MetaHelmet = ({ title, description, keyword }) => {
  const { settings } = useLayoutData();
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title ? title : "Batas Maw"}</title>
      <meta
        name="keywords"
        content={keyword ? keyword : settings?.meta_keywords}
      />
      <meta
        name="description"
        content={description ? description : settings?.meta_description}
      />
    </Helmet>
  );
};

export default MetaHelmet;
