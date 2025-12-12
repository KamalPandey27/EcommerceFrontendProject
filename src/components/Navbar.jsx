import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [menu, setMenu] = useState("hidden");
  const closeMenu = () => {
    setMenu("hidden");
  };
  const openMenu = () => {
    setMenu("flex");
  };
  return (
    <>
      <header className="shadow-lg sticky top-0 italic z-10">
        <nav className="flex md:justify-around md:p-3 p-4 justify-between">
          <div className="flex gap-7 text-lg items-center justify-center">
            <div className="font-bold text-3xl first-letter:text-red-500">
              Zaptro
            </div>
            <div>Add Address</div>
          </div>

          <div
            className={` md:flex ${
              menu === "flex" ? "translate-x-0" : "translate-x-full"
            } md:items-center md:justify-center md:static md:h-auto md:w-auto absolute right-0 top-0 h-screen bg-white w-[50vw] transition-all duration-300 ease-in-out`}
          >
            <ul className=" md:flex md:flex-row md:gap-5 flex flex-col gap-7 md:p-0 p-10 w-full ">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `relative text-xl font-medium text-black 
     after:content-[''] after:absolute after:left-0 after:-bottom-1
     after:h-0.5 after:bg-red-500 after:w-0 
     after:transition-all after:duration-300 
     hover:after:w-full
     ${isActive ? "after:w-full text-black" : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Products"
                  className={({ isActive }) =>
                    `relative text-xl font-medium text-black 
     after:content-[''] after:absolute after:left-0 after:-bottom-1
     after:h-0.5 after:bg-red-500 after:w-0 
     after:transition-all after:duration-300 
     hover:after:w-full
     ${isActive ? "after:w-full text-black" : ""}`
                  }
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/About"
                  className={({ isActive }) =>
                    `relative text-xl font-medium text-black 
     after:content-[''] after:absolute after:left-0 after:-bottom-1
     after:h-0.5 after:bg-red-500 after:w-0 
     after:transition-all after:duration-300 
     hover:after:w-full
     ${isActive ? "after:w-full text-black" : ""}`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contact"
                  className={({ isActive }) =>
                    `relative text-xl font-medium text-black 
     after:content-[''] after:absolute after:left-0 after:-bottom-1
     after:h-0.5 after:bg-red-500 after:w-0 
     after:transition-all after:duration-300 
     hover:after:w-full
     ${isActive ? "after:w-full text-black" : ""}`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li className="md:inline-block  hidden">
                <NavLink to="/Cart" className="cursor-pointer">
                  <FaShoppingCart size={30} />
                </NavLink>
              </li>
              <li>
                <button className="bg-red-500 text-white md:w-18.25 md:h-8 rounded cursor-pointer w-full h-9 text-[18px] ">
                  Sign in
                </button>
              </li>
              <li className="absolute bottom-18 text-[18px] md:hidden inline-block">
                Made with ❤️ by Kamal
              </li>
            </ul>
          </div>
          <div className={`${menu} z-10 md:hidden `} onClick={closeMenu}>
            <FiX size={30} className="cursor-pointer absolute right-5" />
          </div>

          <div className={`md:hidden`} onClick={openMenu}>
            <FiMenu size={28} className="cursor-pointer" />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
