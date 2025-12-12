import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <header className="shadow-lg sticky top-0 italic">
        <nav className="flex justify-around  p-3">
          <div className="flex gap-7 text-lg items-center justify-center">
            <div className="font-bold text-3xl first-letter:text-red-500">
              Zaptro
            </div>
            <div>Add Address</div>
          </div>

          <div className="flex items-center justify-center">
            <ul className="flex gap-5 ">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `relative text-xl font-medium text-black 
     after:content-[''] after:absolute after:left-0 after:-bottom-1
     after:h-[2px] after:bg-red-500 after:w-0 
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
     after:h-[2px] after:bg-red-500 after:w-0 
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
     after:h-[2px] after:bg-red-500 after:w-0 
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
     after:h-[2px] after:bg-red-500 after:w-0 
     after:transition-all after:duration-300 
     hover:after:w-full
     ${isActive ? "after:w-full text-black" : ""}`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/Cart" className="cursor-pointer">
                  <FaShoppingCart size={30} />
                </NavLink>
              </li>
              <li>
                <button className="bg-red-500 text-white w-[73px] h-[32px] rounded cursor-pointer">
                  Sign in
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
