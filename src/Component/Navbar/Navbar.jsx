import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { SubMenu } from "../../Global/Datas/SubMenu";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavbarMenu } from "../../Global/Datas/NavbarMenu";
import Search from "../Global/Search";
import TopContact from "./TopContact";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const navbar = useRef(null);
  const newDiv = document.createElement("div");
  newDiv.classList.add("overflow-background");

  const handleNavbar = () => {
    if (navbar.current) {
      if (!document.body.contains(newDiv)) {
        document.body.appendChild(newDiv);
      }
      navbar.current.classList.toggle("menu-show");
      document.body.classList.toggle("height-fixed");
    }
  };

  const handleClose = () => {
    if (navbar.current) {
      if (document.body.contains(newDiv)) {
        document.body.removeChild(newDiv);
      }
      navbar.current.classList.toggle("menu-show");
      document.body.classList.toggle("height-fixed");
    }
  };
  newDiv.addEventListener("click", function () {
    if (navbar.current) {
      if (document.body.contains(newDiv)) {
        document.body.removeChild(newDiv);
      }
      navbar.current.classList.toggle("menu-show");
      document.body.classList.toggle("height-fixed");
    }
  });
  return (
    <>
      <header>
        <nav>
          <div className="navbar-top py-1 lg:py-2">
            <div className="side-padding">
              <div className="container mx-auto flex flex-row flex-wrap items-center justify-between">
                <div className="navbar-brand">
                  <Link to="/" className="block  w-[160px] lg:w-[200px]">
                    <img src="/assets/images/logo.png" alt="" />
                  </Link>
                </div>
                <div className="nbar-top-links ml-20 mr-auto hidden xl:block">
                  <ul className="flex flex-wrap gap-6">
                    {SubMenu.slice(0, 3).map((item, index) => (
                      <li key={index}>
                        <Link to="/" className="uppercase  hover:text-primary">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <TopContact classname={"hidden lg:block"} />
                <div className="mobile-menu-toggler block lg:hidden">
                  <button
                    type="button"
                    className="text-xl"
                    onClick={handleNavbar}
                  >
                    <RxHamburgerMenu />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={navbar}
            className="navbar-bottom hidden bg-light-grey bg-opacity-80 [box-shadow:0px_12px_13px_0px_rgba(0,_0,_0,_0.19)] lg:block scroll-smooth overflow-y-scroll lg:overflow-auto"
          >
            <div className="md:side-padding">
              <div className="container mx-auto flex h-full flex-col flex-wrap lg:h-auto lg:flex-row lg:items-center lg:justify-between ">
                <figure className="mobile-logo order-1 block h-[80px] border-b border-solid border-[#dddddd] px-4 py-2 lg:hidden">
                  <img
                    src="/assets/images/logo.png"
                    alt="Batas Maw"
                    className="object-cover object-center"
                  />
                </figure>
                <ul className="navbar-group order-3 mb-2 flex flex-col border-b  border-solid border-[#dddddd] pb-2 lg:-order-none lg:m-0 lg:flex-row lg:border-0 lg:p-0">
                  {NavbarMenu.map((item, index) => (
                    <li key={index}>
                      <NavLink
                        activeclassname="is-active"
                        className="block px-[15px] py-4 uppercase  hover:text-primary lg:inline-block lg:text-sm  xl:px-6 xl:text-base"
                        to={item.slug}
                      >
                        {item.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <TopContact classname={"lg:hidden block order-4"} />
                <Search classname={"lg:-order-none order-2"} />
                <div
                  className="btn-wrapper absolute -left-11 top-2 block rounded-[50%] bg-primary p-[1px] text-3xl text-white lg:hidden"
                  onClick={handleClose}
                >
                  <IoClose />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
