import React from "react";
import { useState } from "react";
import { Connect } from ".";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";

import logo from "../../images/logo.png";


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [view, setView] = useState(false);


  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex list-none flex-row justify-between items-center flex-initial">
        <li className="py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          <Link to="/">Home</Link>
        </li>
        <li className="py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
        <Link to="/Markets">Register</Link>
        </li>
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
        <Link to="/Markets">Login</Link>
        </li>
      </ul>
    </nav>
    //<Outlet />
  );
};

export default Navbar;
