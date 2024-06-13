import React from "react";
import { Link } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import { BiSupport } from "react-icons/bi";
import { BsTruck } from "react-icons/bs";
import { MdFacebook } from "react-icons/md";

const FixedSideLinks = () => {
  const sideLinksData = [
    {
      name: "Locate a dealer",
      link: "/about/branches",
      icon: <ImLocation className="mx-auto h-full w-[26px]" />,
    },
    {
      name: "Inquiry",
      link: "/forms/support",
      icon: <BiSupport className="mx-auto h-full w-[26px]" />,
    },
    {
      name: "Service Van",
      link: "/",
      icon: <BsTruck className="mx-auto h-full w-[26px]" />,
    },
  ];
  const socialData = [
    {
      link: "#!",
      icon: "/assets/images/icons/social/fb.svg",
    },
    {
      link: "#!",
      icon: "/assets/images/icons/social/x.svg",
    },
    {
      link: "#!",
      icon: "/assets/images/icons/social/whatsapp.svg",
    },
    {
      link: "#!",
      icon: "/assets/images/icons/social/linkedin.svg",
    },
  ];
  return (
    <div className="side-links fixed top-[50%] translate-y-[-50%] right-0 flex items-center text-sm text-white z-10">
      <ul
        className="
      group ml-auto w-[50px] max-w-[280px] bg-[#363636] hover:w-full"
      >
        {sideLinksData?.map((item, index) => (
          <li
            key={index}
            className="relative z-[2] flex w-[50px] items-center  border-b border-white border-opacity-20 group-hover:w-full"
          >
            <Link
              to={item?.link}
              className=" h-0 w-0 flex-grow capitalize opacity-0 duration-0 hover:text-primary group-hover:h-auto group-hover:w-auto group-hover:px-6 group-hover:py-3 group-hover:opacity-100"
            >
              {item?.name}
            </Link>
            <div className="icon relative h-[50px] w-[50px] bg-[#1C1C1C] text-primary">
              {item?.icon}
            </div>
          </li>
        ))}
        <li className="flex w-[50px] group-hover:w-full">
          <ul className="social-icon flex h-0 w-0 flex-grow gap-4 opacity-0 duration-0 group-hover:h-auto group-hover:w-auto group-hover:px-6 group-hover:py-2 group-hover:opacity-100">
            {socialData?.map((item, index) => (
              <li key={index}>
                <Link
                  to={item?.link}
                  className="inline-flex h-[30px] w-[30px] items-center  justify-center rounded-[50%] bg-white duration-300"
                >
                  <img src={item?.icon} alt="socials" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="icon  h-[50px] w-[50px] bg-[#1C1C1C] text-primary">
            <MdFacebook className="mx-auto h-full w-[26px]" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FixedSideLinks;
