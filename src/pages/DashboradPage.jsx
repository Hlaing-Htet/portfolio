import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Photo from "../assets/homeColor.png";

const DashboradPage = () => {
  const themeColor = "#c9a227";

  return (
    <div className=" grid grid-cols-5">
      <div className=" col-span-1  h-screen dark:bg-dark_background_soft">
        <Link to={"/"}>
          <h1
            className=" text-2xl font-bold text-center m-5 underline"
            style={{ color: themeColor }}
          >
            DashBoard
          </h1>
        </Link>
        <ul className=" mt-20">
          <li className=" bg-dark_background mb-2   text-center w-4/5 mx-auto">
            <NavLink
              to={"home"}
              className={({ isActive }) =>
                isActive
                  ? " bg-dark_textcolor block p-2"
                  : " text-dark_textcolor p-2 block"
              }
            >
              Home
            </NavLink>
          </li>
          <li className=" bg-dark_background mb-2   text-center w-4/5 mx-auto">
            <NavLink
              to={"about"}
              className={({ isActive }) =>
                isActive
                  ? " bg-dark_textcolor block p-2 "
                  : " text-dark_textcolor p-2 block"
              }
            >
              About
            </NavLink>
          </li>
          <li className=" bg-dark_background mb-2   text-center w-4/5 mx-auto">
            <NavLink
              to={"skills"}
              className={({ isActive }) =>
                isActive
                  ? " bg-dark_textcolor block p-2 "
                  : " text-dark_textcolor p-2 block"
              }
            >
              Skills
            </NavLink>
          </li>
          <li className=" bg-dark_background mb-2   text-center w-4/5 mx-auto">
            <NavLink
              to={"projects"}
              className={({ isActive }) =>
                isActive
                  ? " bg-dark_textcolor block p-2 "
                  : " text-dark_textcolor p-2 block"
              }
            >
              Projects
            </NavLink>
          </li>
          <li className=" bg-dark_background mb-2   text-center w-4/5 mx-auto">
            <NavLink
              to={"contact"}
              className={({ isActive }) =>
                isActive
                  ? " bg-dark_textcolor block p-2 "
                  : " text-dark_textcolor p-2 block"
              }
            >
              Contact
            </NavLink>
          </li>
          <li className=" bg-dark_background mb-2   text-center w-4/5 mx-auto">
            <NavLink
              to={"themes"}
              className={({ isActive }) =>
                isActive
                  ? " bg-dark_textcolor block p-2 "
                  : " text-dark_textcolor p-2 block"
              }
            >
              Themes
            </NavLink>
          </li>
        </ul>
      </div>
      <div className=" col-span-4 dark:bg-dark_background">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboradPage;
