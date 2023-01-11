import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
export function NavLinkStyle({ to, children, text }) {
  const [whileHover, setWhileHover] = useState(false);
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? " text-textcolor" : " text-darkbackground"
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
            className=" absolute z-10 bg-primary w-28 text-center top-0 h-full px-3 rounded-sm left-16"
          >
            {text}
          </motion.p>
        )}
      </div>
    </NavLink>
  );
}
