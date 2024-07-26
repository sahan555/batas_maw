import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SubMenu } from "../../Global/Datas/SubMenu";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavbarMenu } from "../../Global/Datas/NavbarMenu";
import Search from "../Global/Search";
import TopContact from "./TopContact";
import { IoClose } from "react-icons/io5";
import useMediaQuery from "../../Global/Hooks/useMediaQuery";
import { FaChevronDown } from "react-icons/fa6";

const Navbar = () => {
  const isMobileDevice = useMediaQuery("(max-width: 1023px)");
  const navbar = useRef(null);
  const newDiv = useRef(null);
  const [openChildNav, setOpenChildNav] = useState(false);
  useEffect(() => {
    newDiv.current = document.createElement("div");
    newDiv.current.classList.add("overflow-background");
    const handleOverflowClick = () => {
      closeNavbar();
    };
    newDiv.current.addEventListener("click", handleOverflowClick);
    return () => {
      if (newDiv.current) {
        newDiv.current.removeEventListener("click", handleOverflowClick);
        if (document.body.contains(newDiv.current)) {
          document.body.removeChild(newDiv.current);
        }
      }
    };
  }, []);

  const openNavbar = () => {
    if (!navbar.current) return;
    if (!document.body.contains(newDiv.current)) {
      document.body.appendChild(newDiv.current);
    }
    navbar.current.classList.add("menu-show");
    document.body.classList.add("height-fixed");
  };

  const closeNavbar = () => {
    if (!navbar.current) return;
    if (document.body.contains(newDiv.current)) {
      document.body.removeChild(newDiv.current);
    }
    navbar.current.classList.remove("menu-show");
    document.body.classList.remove("height-fixed");
  };

  const handleNavbar = () => {
    if (isMobileDevice) {
      if (!navbar.current) return;

      if (navbar.current.classList.contains("menu-show")) {
        closeNavbar();
      } else {
        openNavbar();
      }
    }
  };
  const handleMouseEnter = (item) => {
    if (item?.children && !isMobileDevice) {
      setOpenChildNav((prev) => !prev);
    }
  };
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
                    {SubMenu?.slice(0, 3).map((item, index) => (
                      <li key={index}>
                        <Link
                          to="/vehicles"
                          className="uppercase  hover:text-primary"
                        >
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
            className="navbar-bottom hidden overflow-y-auto scroll-smooth bg-light-grey bg-opacity-80 [box-shadow:0px_12px_13px_0px_rgba(0,_0,_0,_0.19)] lg:block lg:overflow-visible"
          >
            <div className="md:side-padding">
              <div className="container relative mx-auto flex h-full flex-col flex-wrap lg:h-auto lg:flex-row lg:items-center lg:justify-between">
                <figure className="mobile-logo order-1 block h-[80px] border-b border-solid border-[#dddddd] px-4 py-2 md:px-0 lg:hidden">
                  <img
                    src="/assets/images/logo.png"
                    alt="Batas Maw"
                    className="object-contain object-left"
                  />
                </figure>
                <ul className="navbar-group order-3 mb-2 flex flex-col border-b  border-solid border-[#dddddd] pb-2 lg:-order-none lg:m-0 lg:flex-row lg:border-0 lg:p-0">
                  {NavbarMenu.map((item, index) => (
                    <li
                      key={index}
                      className="group relative"
                      onMouseEnter={() => handleMouseEnter(item)}
                      onMouseLeave={() => setOpenChildNav(false)}
                    >
                      <NavLink
                        activeclassname="is-active"
                        className={`block px-[15px] py-4 uppercase  hover:text-primary lg:inline-block lg:text-sm xl:px-4  xl:text-base 2xl:px-6 ${item?.children && isMobileDevice && "flex items-center justify-between "}`}
                        to={item?.slug ? item?.slug : "#!"}
                        onClick={
                          item?.children
                            ? (e) => {
                                e.preventDefault();
                                if (isMobileDevice) {
                                  setOpenChildNav((prev) => !prev);
                                }
                              }
                            : handleNavbar
                        }
                      >
                        {item.title}
                        {item?.children && isMobileDevice ? (
                          <FaChevronDown />
                        ) : (
                          ""
                        )}
                      </NavLink>
                      {item?.children && (
                        <>
                          <ul
                            className={`${openChildNav ? "hello !block" : ""} dropdown-menu -left-3 top-full z-20 hidden  bg-secondary text-white    lg:absolute lg:w-[200px] lg:max-w-[200px] `}
                          >
                            {item?.children?.map((item, index) => (
                              <li key={index}>
                                <NavLink
                                  className="block w-full px-[15px] py-3  uppercase hover:bg-black hover:bg-opacity-20 lg:inline-block  lg:text-sm xl:px-6 xl:text-base"
                                  to={item.slug}
                                  onClick={() => {
                                    handleNavbar();
                                    setOpenChildNav((prev) => !prev);
                                  }}
                                >
                                  {item.name}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
                <TopContact classname={"lg:hidden block order-4 pb-11"} />
                <Search
                  classname={"lg:-order-none order-2"}
                  handleNavbar={handleNavbar}
                />
                <div
                  className="btn-wrapper absolute right-[10px] top-5 block rounded-[50%] bg-primary p-[1px] text-3xl text-white md:right-0 lg:hidden"
                  onClick={handleNavbar}
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
