import React from "react";
import {
  MdLocalPhone,
  MdLocationOn,
  MdOutlineMailOutline,
  MdOutlinePhoneAndroid,
} from "react-icons/md";
import FooterLinks from "./FooterLinks";
import {
  extralink,
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

const Footer = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
      />
      <FixedSideLinks />
      <footer className="bg-secondary pt-[80px] text-sm text-white">
        <div className="side-padding">
          <div className="container mx-auto pb-[80px]">
            <div className="grid grid-cols-7 gap-8 xl:grid-cols-5">
              <div className="col-span-full md:col-span-3 xl:col-span-2">
                <div className="footer-logo mb-10 text-white">
                  <figure className="w-full max-w-[300px]">
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
                      <a
                        href="#!"
                        className="mr-2 inline-block hover:underline"
                      >
                        01 - 4520025
                      </a>
                      /
                      <a
                        href="#!"
                        className="mx-2 inline-block hover:underline"
                      >
                        4541031
                      </a>
                      /
                      <a
                        href="#!"
                        className="mx-2 inline-block hover:underline"
                      >
                        4536532
                      </a>
                      /
                      <a
                        href="#!"
                        className="ml-2 inline-block hover:underline"
                      >
                        9802311655
                      </a>
                    </div>
                  </li>
                  <li className="relative py-2 pl-[40px]">
                    <MdOutlinePhoneAndroid className="absolute bottom-0 left-0 top-0 m-auto h-[30px] w-[30px] rounded-full bg-green p-1 text-center text-lg text-white" />
                    <a
                      href="tel:+9779802311655"
                      className="inline-block hover:underline"
                    >
                      (+977) 9802311655
                    </a>
                  </li>

                  <li className="relative py-2 pl-[40px]">
                    <MdOutlineMailOutline className="absolute bottom-0 left-0 top-0 m-auto h-[30px] w-[30px] rounded-full bg-green p-1 text-center text-lg text-white" />
                    <a
                      href="mailto:info@batasmaw.com"
                      className="flex flex-wrap items-center"
                    >
                      <span className=" inline-block hover:underline">
                        info@batasmaw.com
                      </span>
                    </a>
                  </li>
                  <li className="relative py-2 pl-[40px]">
                    <MdLocationOn className="absolute bottom-0 left-0 top-0 m-auto h-[30px] w-[30px] rounded-full bg-green p-1 text-center text-lg text-white" />
                    <span>Tangal Chowk, Laxmi Narayan Temple , Kathmandu</span>
                  </li>
                  <li className="relative py-2 pl-[40px]">
                    <span className="capitalize text-green">
                      open time: 09:30 am to 5:30 pm
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-span-full md:col-span-2 xl:col-span-1">
                {footerLinks
                  .filter((item) => item.title === "trucks")
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
                  .filter((item) => item.title === "tipper")
                  ?.map((item, index) => (
                    <FooterLinks
                      title={item.title}
                      data={item.list}
                      showList={3}
                      className="mb-5"
                      key={index}
                    />
                  ))}
                {footerLinks
                  .filter((item) => item.title === "bus")
                  ?.map((item, index) => (
                    <FooterLinks
                      title={item.title}
                      data={item.list}
                      showList={3}
                      className="mb-5"
                      key={index}
                    />
                  ))}
                <FooterLinks data={extralink} title={false} />
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
                    <Link to="/" className="hover:text-primary">
                      <FaFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:text-primary">
                      <FaXTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:text-primary">
                      <FaYoutube />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:text-primary">
                      <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="makecall  -order-1 w-full flex-none bg-green text-xl text-white transition-all duration-300 hover:opacity-90 lg:order-none lg:w-auto lg:flex-initial">
                <Link
                  to="tel:0000000"
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
                  <span className="pl-1 md:pl-0 md:block">By Onviro Tech</span>
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
