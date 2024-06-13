import React from "react";
import { MdLocalPhone, MdOutlineMailOutline } from "react-icons/md";

const TopContact = ({ classname }) => {
  return (
    <div className={`top-contact  ${classname}`}>
      <ul className="flex-wrap gap-6 px-4 text-grey lg:flex lg:p-0">
        <li className="relative flex-wrap items-center pl-8 leading-8 lg:flex lg:pl-0 lg:leading-normal">
          <MdLocalPhone className="absolute left-1 top-[5px] mr-2 text-lg text-primary lg:static" />
          <a
            href="#!"
            className="block hover:text-primary lg:mr-2 lg:inline-block"
          >
            01 - 4520025
          </a>
          <span className="hidden lg:inline-block">/</span>
          <a
            href="#!"
            className="block hover:text-primary lg:mx-2 lg:inline-block"
          >
            4541031
          </a>
          <span className="hidden lg:inline-block">/</span>

          <a
            href="#!"
            className="block hover:text-primary lg:mx-2 lg:inline-block"
          >
            4536532
          </a>
          <span className="hidden lg:inline-block">/</span>

          <a
            href="#!"
            className="block hover:text-primary lg:ml-2 lg:inline-block"
          >
            9802311655
          </a>
        </li>
        <li className="relative flex-wrap items-center pl-8 leading-8 lg:flex lg:pl-0 lg:leading-normal">
          <MdOutlineMailOutline className="absolute left-1 top-[5px] mr-2 mt-[2px] text-lg text-primary lg:static" />
          <a
            href="mailto:info@batasmaw.com"
            className="flex flex-wrap items-center"
          >
            <span className=" hover:text-primary">info@batasmaw.com</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TopContact;
