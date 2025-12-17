import React, { useState } from "react";
import { FaShoppingCart, FaMapMarkerAlt, FaCaretDown } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import axios from "axios";
function Navbar() {
  const [menu, setMenu] = useState(false);
  const closeMenu = () => {
    setMenu(false);
  };
  const openMenu = () => {
    setMenu(true);
  };

  const [openDropDown, setDropDown] = useState(false);

  const [location, setLocation] = useState(null);

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
      try {
        const location = await axios.get(url);
        const exactLocation = location.data.address;
        setLocation(exactLocation);
        setDropDown(false);
      } catch (error) {
        console.log(error);
      }
    });
  };

  const navLinkClasses = ({ isActive }) =>
    `relative text-xl font-medium text-black 
     after:content-[''] after:absolute after:left-0 after:-bottom-1
     after:h-[2px] after:bg-red-500 after:w-0 
     after:transition-all after:duration-300 
     hover:after:w-full
     ${isActive ? "after:w-full text-black" : ""}`;
  return (
    <>
      <header className=" shadow-lg sticky top-0 italic z-10 h-19 flex justify-center items-center bg-white">
        <nav className="flex md:justify-around md:p-3 p-4 justify-between w-full">
          <div className="flex gap-5 text-lg items-center justify-center max-w-7xl">
            <Link
              to="/"
              className="font-bold md:text-3xl text-2xl first-letter:text-red-500"
            >
              Zaptro
            </Link>
            <div
              className="flex gap-2 justify-center items-center relative cursor-pointer "
              onClick={() => setDropDown((prev) => !prev)}
            >
              <FaMapMarkerAlt size={20} color="red" />
              <div className="md:text-lg select-none text-[14px] ">
                {location ? (
                  <div className="-space-y-1 ">
                    <p>{location.city || location.town || location.village}</p>
                    <p>{location.state}</p>
                  </div>
                ) : (
                  "Add Address"
                )}
              </div>
              <FaCaretDown
                size={20}
                className={`transition-transform ${
                  openDropDown ? "rotate-180" : ""
                }`}
              />
              {openDropDown ? (
                <div className="md:w-50 w-35 h-20 md:h-30 z-10 absolute top-12 bg-gray-50 flex justify-center items-center rounded shadow-lg transition-all duration-300 ease-in-out">
                  <span
                    className="bg-red-500 p-1 text-white  rounded cursor-pointer  md:text-[18px] text-[14px]"
                    onClick={getLocation}
                  >
                    Detect my location
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          <div
            className={` md:flex md:opacity-100 md:translate-x-0 md:pointer-events-auto ${
              menu
                ? "translate-x-0 opacity-100 pointer-events-auto"
                : "translate-x-full opacity-0 pointer-events-none"
            } md:items-center md:justify-center md:static md:h-auto md:w-auto absolute right-0 top-0 h-screen bg-white w-[50vw] transition-all duration-300 ease-in-out  `}
          >
            <ul className=" md:flex md:flex-row md:gap-5 flex flex-col gap-7 md:p-0 p-10 w-full md:justify-center md:items-center ">
              <li>
                <NavLink to="/" className={navLinkClasses} onClick={closeMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Products"
                  className={navLinkClasses}
                  onClick={closeMenu}
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/About"
                  className={navLinkClasses}
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contact"
                  className={navLinkClasses}
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/Cart"
                  className="cursor-pointer relative"
                  onClick={closeMenu}
                >
                  <FaShoppingCart size={30} />
                  <span className=" absolute -top-2 md:-right-3 left-5 flex items-center justify-center w-5 h-5 bg-red-500 text-white rounded-full text-xs">
                    0
                  </span>
                </NavLink>
              </li>
              <li className="text-center ml-5">
                <SignedOut>
                  <SignInButton className="bg-red-500 text-white md:w-18.25 md:h-8 rounded cursor-pointer w-full h-9 text-[17px] " />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </li>
              <li className="absolute bottom-18 text-[18px] md:hidden inline-block">
                Made with ❤️ by Kamal
              </li>
            </ul>
          </div>
          {menu ? (
            <div className="z-10 md:hidden " onClick={closeMenu}>
              <FiX size={30} className="cursor-pointer absolute right-5" />
            </div>
          ) : (
            ""
          )}

          <div className={`md:hidden`} onClick={openMenu}>
            <FiMenu size={28} className="cursor-pointer" />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
