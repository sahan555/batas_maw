import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SubMenu } from "../../Global/Datas/SubMenu";
import { MdLocalPhone, MdOutlineMailOutline } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavbarMenu } from "../../Global/Datas/NavbarMenu";
import Search from "../Global/Search";

const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <div className="navbar-top py-2">
            <div className="container mx-auto flex flex-row flex-wrap items-center justify-between">
              <div className="navbar-brand">
                <Link to="/" className="inline-block w-[200px]">
                  <img src="./assets/images/logo.png" alt="" />
                </Link>
              </div>
              <div className="nbar-top-links ml-20 mr-auto hidden md:block">
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
              <div className="top-contact">
                <ul className="flex flex-wrap gap-6 text-grey ">
                  <li className="flex flex-wrap items-center">
                    <MdLocalPhone className="mr-2 text-lg text-primary" />
                    <a href="#!" className="mr-2 inline-block hover:text-primary">
                      01 - 4520025
                    </a>
                    /
                    <a href="#!" className="mx-2 inline-block hover:text-primary">
                      4541031
                    </a>
                    /
                    <a href="#!" className="mx-2 inline-block hover:text-primary">
                      4536532
                    </a>
                    /
                    <a href="#!" className="ml-2 inline-block hover:text-primary">
                      9802311655
                    </a>
                  </li>
                  <li className="flex  flex-wrap items-center">
                    <MdOutlineMailOutline className="mr-2 mt-[2px] text-lg text-primary" />
                    <a
                      href="mailto:info@batasmaw.com"
                      className="flex flex-wrap items-center"
                    >
                      <span className=" hover:text-primary">info@batasmaw.com</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mobile-menu-toggler block md:hidden">
                <button>
                  <RxHamburgerMenu />
                </button>
              </div>
            </div>
          </div>
          <div className="navbar-bottom bg-light-grey bg-opacity-80">
            <div className="container mx-auto flex flex-row flex-wrap items-center justify-between">
              <ul className="navbar-group flex">
                {NavbarMenu.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      activeclassname="is-active"
                      className="uppercase px-6 py-4 inline-block hover:text-primary"
                      to={item.slug}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <Search/>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
