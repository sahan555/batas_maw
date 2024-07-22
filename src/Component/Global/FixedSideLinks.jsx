import React from "react";
import { Link } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import { BiSupport } from "react-icons/bi";
import { BsTruck } from "react-icons/bs";
import { MdFacebook } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa6";

const FixedSideLinks = ({ settings }) => {
  const handleScrollUp = (e) => {
    e.preventDefault();
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    
  };
  const sideLinksData = [
    {
      name: "Locate a dealer",
      link: "/about/branches",
      icon: <ImLocation className="mx-auto h-full w-[18px] md:w-[26px]" />,
    },
    {
      name: settings?.phone,
      link: `tel:${settings?.phone}`,
      icon: <BiSupport className="mx-auto h-full w-[18px] md:w-[26px]" />,
    },
    {
      name: settings?.phone,
      link: `tel:${settings?.phone}`,
      icon: <BsTruck className="mx-auto h-full w-[18px] md:w-[26px]" />,
    },
    {
      socials: [
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
      ],
      icon: <MdFacebook className="mx-auto h-full w-[18px] md:w-[26px]" />,
    },
    {
      name: "Back To Top",
      link: `#!`,
      onClick:  handleScrollUp ,
      icon: <FaArrowUp className="mx-auto h-[18px] md:h-full w-[18px] md:w-[18px]" />,
    },
  ];

  return (
    <div className="side-links fixed right-0 top-[50%] z-10 flex translate-y-[-50%] items-center text-sm text-white">
      <ul
        className="
      group ml-auto w-[44px] max-w-[280px] bg-[#363636] hover:w-full md:w-[50px] "
      >
        {sideLinksData?.map((item, index) => (
          <li
            key={index}
            className="relative z-[2] flex w-[44px] items-center border-b  border-white border-opacity-20 group-hover:w-full md:w-[50px]"
          >
            {item?.link ? (
              <Link
                to={item?.link}
                onClick={item?.onClick}
                className=" flex h-0 w-0 flex-grow items-center capitalize opacity-0 duration-0 hover:text-primary group-hover:h-[44px] md:group-hover:h-[50px] group-hover:w-auto group-hover:px-6 group-hover:py-0 group-hover:opacity-100"
              >
                {item?.name}
              </Link>
            ) : (
              <ul className="social-icon flex h-0 w-0 flex-grow items-center gap-4 opacity-0 duration-0 group-hover:h-[44px] md:group-hover:h-[50px] group-hover:w-auto group-hover:px-6 group-hover:py-0 group-hover:opacity-100">
                {item?.socials?.map((social, index) => (
                  <li key={index}>
                    <Link
                      to={social?.link}
                      target="_blank"
                      className="inline-flex h-[30px] w-[30px] items-center  justify-center rounded-[50%] bg-white duration-300"
                    >
                      <img src={social?.icon} alt="socials" />
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            <div className="icon relative h-[44px] w-[44px] bg-[#1C1C1C] text-primary md:h-[50px] md:w-[50px] flex items-center">
              {item?.icon}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FixedSideLinks;
