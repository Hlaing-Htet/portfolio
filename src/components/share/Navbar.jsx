import { NavLinkStyle } from "./NavLinkStyle";

import React from "react";

import { AiFillHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { AiFillProject } from "react-icons/ai";
import { AiFillContacts } from "react-icons/ai";
const Navbar = () => {
  const themeColor = "#c9a227";

  return (
    <nav>
      <div
        className="flex flex-col z-20 gap-10 justify-center  h-screen w-14 "
        style={{ backgroundColor: themeColor }}
      >
        <NavLinkStyle to={"/"} text="HOME">
          <AiFillHome className=" w-full text-2xl" />
        </NavLinkStyle>
        <NavLinkStyle to={"/about"} text="ABOUT">
          <SiAboutdotme className=" w-full text-2xl" />
        </NavLinkStyle>
        <NavLinkStyle to={"/skills"} text="SKILLS">
          <GiSkills className=" w-full text-2xl" />
        </NavLinkStyle>
        <NavLinkStyle to={"/projects"} text="PROJECTS">
          <AiFillProject className=" w-full text-2xl" />
        </NavLinkStyle>
        <NavLinkStyle to={"/contact"} text="CONTACT">
          <AiFillContacts className=" w-full text-2xl" />
        </NavLinkStyle>
      </div>
    </nav>
  );
};

export default Navbar;
