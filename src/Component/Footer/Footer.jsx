import React from "react";
import {
  MdLocalPhone,
  MdLocationOn,
  MdOutlineMailOutline,
  MdOutlinePhoneAndroid,
} from "react-icons/md";
import FooterLinks from "./FooterLinks";
import {
  extralink2,
  footerAffiliated,
  footerLinks,
} from "../../Global/Datas/HomeData";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import FixedSideLinks from "../Global/FixedSideLinks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useGet from "../../Global/Apis/useGet";

const Footer = () => {
  const { data: cate } = useGet("categories");
  const { data: settings } = useGet("settings");
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
      />
      <FixedSideLinks settings={settings} />
      <footer className="bg-secondary pt-[80px] text-sm text-white">
        <div className="side-padding">
          <div className="container mx-auto pb-[80px]">
            <div className="grid grid-cols-7 gap-8 xl:grid-cols-5">
              <div className="col-span-full md:col-span-3 xl:col-span-2">
                <div className="footer-logo mb-10 text-white">
                  <figure className="w-full md:max-w-[300px] max-w-[200px]">
                    <img
                      src="/assets/images/logo-white.png"
                      className="w-full object-contain object-center"
                      alt=""
                    />
                  </figure>
                </div>
                <ul className="flex flex-col gap-3 text-sm">
                  <li className="relative py-2 pl-[40px]">
                    <MdLocalPhone className="absolute bottom-0 left-0 top-0 m-auto h-[30px] w-[30px] rounded-full bg-green p-1 text-center text-lg text-white" />
                    <div>
                      <Link
                        to="tel:+977014520025"
                        className="mr-2 inline-block hover:underline"
                      >
                        01 - 4520025
                      </Link>
                      /
                      <Link
                        to="tel:+977014541031"
                        className="mx-2 inline-block hover:underline"
                      >
                        4541031
                      </Link>
                      /
                      <Link
                        to="tel:+977014536532"
                        className="mx-2 inline-block hover:underline"
                      >
                        4536532
                      </Link>
                      /
                      <Link
                        to={`tel:${settings?.phone}`}
                        className="ml-2 inline-block hover:underline"
                      >
                        {settings?.phone}
                      </Link>
                    </div>
                  </li>
                  <li className="relative py-2 pl-[40px]">
                    <MdOutlinePhoneAndroid className="absolute bottom-0 left-0 top-0 m-auto h-[30px] w-[30px] rounded-full bg-green p-1 text-center text-lg text-white" />
                    <Link
                      to={`tel:${settings?.phone}`}
                      className="inline-block hover:underline"
                    >
                      (+977) {settings?.phone}
                    </Link>
                  </li>

                  <li className="relative py-2 pl-[40px]">
                    <MdOutlineMailOutline className="absolute bottom-0 left-0 top-0 m-auto h-[30px] w-[30px] rounded-full bg-green p-1 text-center text-lg text-white" />
                    <Link
                      to={`mailto:${settings?.email}`}
                      className="flex flex-wrap items-center"
                    >
                      <span className=" inline-block hover:underline">
                        {settings?.email}
                      </span>
                    </Link>
                  </li>
                  <li className="relative py-2 pl-[40px]">
                    <MdLocationOn className="absolute bottom-0 left-0 top-0 m-auto h-[30px] w-[30px] rounded-full bg-green p-1 text-center text-lg text-white" />
                    <span>{settings?.location}</span>
                  </li>
                  <li className="relative py-2 pl-[40px]">
                    <span className="capitalize text-green">
                      open time: 09:30 am to 5:30 pm
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-span-full md:col-span-2 xl:col-span-1">
                {cate
                  ?.slice(0,3)
                  ?.map((item, index) => (
                    <FooterLinks
                      title={item?.name}
                      data={item?.products}
                      showList={3}
                      className="mb-5"
                      key={index}
                      slug={"/vehicles/"}
                    />
                  ))}
                
                {/* <FooterLinks data={extralink} title={false} /> */}
              </div>
              <div className="col-span-full md:col-span-2 xl:col-span-1">
                {footerLinks
                  .filter((item) => item.title === "resale")
                  .map((item, index) => (
                    <FooterLinks
                      title={item.title}
                      data={item.list}
                      showList={3}
                      className="mb-5"
                      key={index}
                    />
                  ))}
                {footerLinks
                  .filter((item) => item.title === "media")
                  .map((item, index) => (
                    <FooterLinks
                      title={item.title}
                      data={item.list}
                      className="mb-5"
                      key={index}
                    />
                  ))}
                {footerLinks
                  .filter((item) => item.title === "about us")
                  .map((item, index) => (
                    <FooterLinks
                      title={item.title}
                      data={item.list}
                      className="mb-5"
                      key={index}
                    />
                  ))}
              </div>
              <div className="col-span-full sm:flex xl:col-span-1 xl:block">
                <div className={`footer-links mb-[30px] w-1/2 xl:w-full`}>
                  <ul>
                    {extralink2?.map((item, index) => (
                      <li className="mb-3 text-base uppercase" key={index}>
                        <Link
                          to={item.slug}
                          className={`relative inline-block pb-0.5 pr-3 hover:underline`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="affiliated sm:w-1/2 xl:w-full">
                  <h4 className=" mb-2 text-base uppercase ">
                    AFFILIATED WITH:
                  </h4>
                  <ul>
                    {footerAffiliated.map((item, index) => (
                      <li key={index} className="mb-5 last:mb-0">
                        <figure className="stripe h-[60px] bg-white px-2 pr-20 before:bg-light-grey after:bg-light-grey">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="object-scale-down object-center "
                          />
                        </figure>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright bg-white text-secondary">
          <div className="side-padding">
            <div className="container mx-auto flex flex-wrap items-center justify-between gap-y-4 pt-6 lg:pt-0">
              <div className="socials flex w-full max-w-[356px] items-center gap-6">
                <p className="font-medium uppercase">Get in Touch</p>
                <ul className="flex flex-wrap gap-8 text-xl">
                  <li>
                    <Link
                      to={settings?.facebook}
                      target="_blank"
                      className="hover:text-primary"
                    >
                      <FaFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={settings?.twitter}
                      target="_blank"
                      className="hover:text-primary"
                    >
                      <FaXTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/"}
                      target="_blank"
                      className="hover:text-primary"
                    >
                      <FaYoutube />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={settings?.linkedin}
                      target="_blank"
                      className="hover:text-primary"
                    >
                      <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="makecall  -order-1 w-full flex-none bg-green text-xl text-white transition-all duration-300 hover:opacity-90 lg:order-none lg:w-auto lg:flex-initial">
                <Link
                  to={`tel:${settings?.whatapps}`}
                  className="flex h-full items-center justify-center gap-2 px-20 py-4 "
                >
                  <IoLogoWhatsapp className="text-2xl" /> Make a Call
                </Link>
              </div>
              <div className="copyright-wrap text-sm">
                <p>
                  © 2024
                  <Link to="/" className="hover:underline">
                    BATASMAW Commercial Vehicle
                  </Link>
                  All right reserved
                  <span className="pl-1 md:block md:pl-0">By Onviro Tech</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
