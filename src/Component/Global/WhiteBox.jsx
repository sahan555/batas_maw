import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const WhiteBox = ({ details, link, name, slug }) => {
  console.log(details);
  return (
    <>
      {link ? (
        <Link to={slug}>
          <div className="opening-box group relative border border-l-0 border-gray-300 p-6 outline-0 before:absolute before:left-0 before:top-[-1px] before:h-[calc(100%+2px)] before:w-2.5 before:bg-secondary before:content-['']">
            <h5 className="pb-6 text-xl uppercase">{name}</h5>
            <HiArrowLongRight className="ml-auto text-4xl text-secondary duration-300 ease-in-out group-hover:mr-2" />
          </div>
        </Link>
      ) : (
        <>
          <div className="opening-box group relative border border-l-0 border-gray-300 px-6 py-4 outline-0 before:absolute before:left-0 before:top-[-1px] before:h-[calc(100%+2px)] before:w-2.5 before:bg-secondary before:content-['']">
            {Object.keys.length > 0 ? (
              <>
                <article>
                  <h5 className="asdsad text-xl uppercase text-secondary">{details?.name}</h5>
                  <ul className="text-sm text-grey">
                    <li>
                      <p className="text-xs  mb-2">{details?.created_at}</p>
                    </li>
                    <li>
                      <p className="line-clamp-1">
                        Location : <span>{details?.location}</span>
                      </p>
                    </li>
                  </ul>
                </article>
              </>
            ) : (
              <h5 className="pb-6 text-xl uppercase">{name}</h5>
            )}
            <HiArrowLongRight className="ml-auto text-4xl text-secondary duration-300 ease-in-out group-hover:mr-2" />
          </div>
        </>
      )}
    </>
  );
};

export default WhiteBox;
