import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { AiFillProject } from "react-icons/ai";
import { AiFillContacts } from "react-icons/ai";
const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-col z-20 gap-10 justify-center bg-primary h-screen w-14 fixed top-0 left-0">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? " text-textcolor" : " text-darkbackground"
          }
        >
          <AiFillHome className=" w-full text-2xl" />
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? " text-textcolor" : " text-darkbackground"
          }
        >
          <SiAboutdotme className=" w-full text-2xl" />
        </NavLink>
        <NavLink
          to={"/skills"}
          className={({ isActive }) =>
            isActive ? " text-textcolor" : " text-darkbackground"
          }
        >
          <GiSkills className=" w-full text-2xl" />
        </NavLink>
        <NavLink
          to={"/projects"}
          className={({ isActive }) =>
            isActive ? " text-textcolor" : " text-darkbackground"
          }
        >
          <AiFillProject className=" w-full text-2xl" />
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive ? " text-textcolor" : " text-darkbackground"
          }
        >
          <AiFillContacts className=" w-full text-2xl" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
