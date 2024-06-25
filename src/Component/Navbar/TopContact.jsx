import React from "react";
import { MdLocalPhone, MdOutlineMailOutline } from "react-icons/md";
import useGet from "../../Global/Apis/useGet";
import { Link } from "react-router-dom";

const TopContact = ({ classname }) => {
  const { data: settings } = useGet("settings");
  return (
    <div className={`top-contact  ${classname}`}>
      <ul className="flex-wrap gap-6 px-4 text-grey lg:flex lg:p-0">
        <li className="relative flex-wrap items-center pl-8 leading-8 lg:flex lg:pl-0 lg:leading-normal">
          <MdLocalPhone className="absolute left-1 top-[5px] mr-2 text-lg text-primary lg:static" />
          <Link
            to="tel:+977014520025"
            className="block hover:text-primary lg:mr-2 lg:inline-block"
          >
            01 - 4520025
          </Link>
          <span className="hidden lg:inline-block">/</span>
          <Link
            to="tel:+977014541031"
            className="block hover:text-primary lg:mx-2 lg:inline-block"
          >
            4541031
          </Link>
          <span className="hidden lg:inline-block">/</span>

          <Link
            to="tel:+977014536532"
            className="block hover:text-primary lg:mx-2 lg:inline-block"
          >
            4536532
          </Link>
          <span className="hidden lg:inline-block">/</span>

          <Link
            to={`tel:${settings?.phone}`}
            className="block hover:text-primary lg:ml-2 lg:inline-block"
          >
            {settings?.phone}
          </Link>
        </li>
        <li className="relative flex-wrap items-center pl-8 leading-8 lg:flex lg:pl-0 lg:leading-normal">
          <MdOutlineMailOutline className="absolute left-1 top-[5px] mr-2 mt-[2px] text-lg text-primary lg:static" />
          <Link
            to={`mailto:${settings?.email}`}
            className="flex flex-wrap items-center"
          >
            <span className=" hover:text-primary">{settings?.email}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TopContact;
