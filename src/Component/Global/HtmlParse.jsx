import React from "react";
import parse from "html-react-parser";

const HtmlParse = ({data}) => {
  return <>{data && parse(data)}</>;
};

export default HtmlParse;
