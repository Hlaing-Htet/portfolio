import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Photo from "../assets/homeColor.png";

const DashboradPage = () => {
  const themeColor = "#c9a227";

  return (
    <div className=" grid grid-cols-5">
      <div className=" col-span-1  h-screen dark:bg-dark_background_soft">
        {/* <figure className="w-24 h-24 overflow-hidden rounded-full mx-auto">
          <img
            src={Photo}
            className=" object-contain "
            alt=""
            style={{ backgroundColor: themeColor }}
          />
        </figure> */}
        <Link to={"/"}>
          <h1
            className=" text-2xl font-bold text-center m-5 underline"
            style={{ color: themeColor }}
          >
            DashBoard
          </h1>
        </Link>
        <ul className=" mt-20">
          <li className=" bg-dark_textcolor mb-2   text-center w-4/5 mx-auto">
            <NavLink
              to={"home"}
              className={({ isActive }) =>
                isActive
                  ? " text-dark_textcolor block p-2 bg-dark_background border border-dark_textcolor"
                  : " text-dark_background p-2 block"
              }
            >
              Home
            </NavLink>
          </li>
          <li className=" bg-dark_textcolor mb-2   text-center w-4/5 mx-auto">
            <NavLink
              to={"about"}
              className={({ isActive }) =>
                isActive
                  ? " text-dark_textcolor block p-2 bg-dark_background border border-dark_textcolor"
                  : " text-dark_background p-2 block"
              }
            >
              About
            </NavLink>
          </li>
          <li className=" bg-dark_textcolor mb-2   text-center w-4/5 mx-auto">
            <NavLink
              to={"skills"}
              className={({ isActive }) =>
                isActive
                  ? " text-dark_textcolor block p-2 bg-dark_background border border-dark_textcolor"
                  : " text-dark_background p-2 block"
              }
            >
              Skills
            </NavLink>
          </li>
          <li className=" bg-dark_textcolor mb-2   text-center w-4/5 mx-auto">
            <NavLink
              to={"projects"}
              className={({ isActive }) =>
                isActive
                  ? " text-dark_textcolor block p-2 bg-dark_background border border-dark_textcolor"
                  : " text-dark_background p-2 block"
              }
            >
              Projects
            </NavLink>
          </li>
          <li className=" bg-dark_textcolor mb-2   text-center w-4/5 mx-auto">
            <NavLink
              to={"contact"}
              className={({ isActive }) =>
                isActive
                  ? " text-dark_textcolor block p-2 bg-dark_background border border-dark_textcolor"
                  : " text-dark_background p-2 block"
              }
            >
              Contact
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
