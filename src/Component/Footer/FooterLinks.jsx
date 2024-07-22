import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = ({ title, data, showList, className,slug }) => {
  return (
    <div className={`footer-links mb-[30px] ${className}`}>
      {title && (
        <h4 className="relative mb-2 inline-block pb-0.5 pr-3 text-base font-medium uppercase before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[1px] before:bg-green before:content-['']">
          {title}
        </h4>
      )}
      <ul>
        {data?.slice(0, showList)?.map((item, index) => (
          <li className="mb-3 uppercase text-[rgba(240,_240,_240,_0.75)]" key={index}>
            <Link
              to={`${slug ? slug : ''}${item?.slug}`}
              title={item?.name}
              className={`hover:underline line-clamp-1 ${title === false ? "text-white relative inline-block pb-0.5 xl:pr-3 text-base before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[1px] before:bg-green before:content-[''] hover:xl:pr-5 hover:no-underline" : ""}`}
            >
              {item?.name}
            </Link>
          </li>
        ))}
      </ul>
      {data.length > showList && (
        <div className="btn-wrapper">
          <Link
            to={slug}
            className="btn-transparent skew-btn inline-block w-full  max-w-[140px] py-1 text-center text-sm uppercase text-white hover:before:bg-white hover:text-secondary"
          >
            more
          </Link>
        </div>
      )}
    </div>
  );
};

export default FooterLinks;
