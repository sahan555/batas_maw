import React from "react";
import { Link } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import { BiSupport } from "react-icons/bi";
import { BsTruck } from "react-icons/bs";
import { MdFacebook } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa6";

const FixedSideLinks = ({ settings }) => {
  const sideLinksData = [
    {
      name: "Locate a dealer",
      link: "/about/branches",
      icon: <ImLocation className="mx-auto h-full w-[26px]" />,
    },
    {
      name: settings?.phone,
      link: `tel:${settings?.phone}`,
      icon: <BiSupport className="mx-auto h-full w-[26px]" />,
    },
    {
      name: settings?.phone,
      link: `tel:${settings?.phone}`,
      icon: <BsTruck className="mx-auto h-full w-[26px]" />,
    },
  ];
  const socialData = [
    {
      link: settings?.facebook,
      icon: "/assets/images/icons/social/fb.svg",
    },
    {
      link: settings?.twitter,
      icon: "/assets/images/icons/social/x.svg",
    },
    {
      link: `tel:${settings?.whatapps}`,
      icon: "/assets/images/icons/social/whatsapp.svg",
    },
    {
      link: settings?.linkedin,
      icon: "/assets/images/icons/social/linkedin.svg",
    },
  ];
  const handleScrollUp = (e) => {
    e.preventDefault();
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  return (
    <div className="side-links fixed right-0 top-[50%] z-10 flex translate-y-[-50%] items-center text-sm text-white">
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
        <li className="flex w-[50px] border-b border-white border-opacity-20 group-hover:w-full">
          <ul className="social-icon flex h-0 w-0 flex-grow gap-4 opacity-0 duration-0 group-hover:h-auto group-hover:w-auto group-hover:px-6 group-hover:py-2 group-hover:opacity-100">
            {socialData?.map((item, index) => (
              <li key={index}>
                <Link
                  to={item?.link}
                  target="_blank"
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
        <li className="relative z-[2] flex w-[50px] items-center group-hover:w-full">
          <Link
            to={""}
            onClick={handleScrollUp}
            className=" h-0 w-0 flex-grow capitalize opacity-0 duration-0 hover:text-primary group-hover:h-auto group-hover:w-auto group-hover:px-6 group-hover:py-3 group-hover:opacity-100"
          >
            Back To Top
          </Link>
          <div className="icon relative h-[50px] w-[50px] bg-[#1C1C1C] text-primary">
            <FaArrowUp className="mx-auto h-full w-[18px]" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FixedSideLinks;
