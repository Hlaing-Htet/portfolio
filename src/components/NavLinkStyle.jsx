import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
export function NavLinkStyle({ to, children, text }) {
  const [whileHover, setWhileHover] = useState(false);
  const themeColor = "#c9a227";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? " text-dark_textcolor" : " text-dark_background"
      }
    >
      <div
        className=" relative"
        onMouseEnter={() => setWhileHover(true)}
        onMouseLeave={() => setWhileHover(false)}
      >
        {children}
        {whileHover && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0 }}
            className=" absolute z-10 w-28 text-center top-0 h-full px-3 rounded-sm left-16"
            style={{ backgroundColor: themeColor }}
          >
            {text}
          </motion.p>
        )}
      </div>
    </NavLink>
  );
}
