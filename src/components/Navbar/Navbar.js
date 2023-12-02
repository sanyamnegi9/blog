import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserIcon from "../UserIcon";

// -------NavLink active style--------
// style={({ isActive }) => {
//   return { color: isActive ? "red" : "green" };
// }}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" px-8 flex items-center justify-between h-14 bg-slate-700">
      <h2 className="text-slate-50 text-[2.2rem] italic">Blogs</h2>
      <div className="gap-4 hidden md:flex">
        <NavLink
          to="/"
          className={` px-4 py-2 rounded-xl font-medium ${({ isActive }) =>
            isActive
              ? "bg-slate-500 text-red-600"
              : "hover:bg-slate-500 text-green-600"}`}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={` px-4 py-2 rounded-xl  font-medium ${({ isActive }) =>
            isActive
              ? "bg-slate-500 text-red-600"
              : "hover:bg-slate-500 text-green-600"}`}
        >
          About
        </NavLink>

        <NavLink
          to="/blogs"
          className={` px-4 py-2 rounded-xl  font-medium ${({ isActive }) =>
            isActive
              ? "bg-slate-500 text-red-600"
              : "hover:bg-slate-500 text-green-600"}`}
        >
          Blogs
        </NavLink>
        <UserIcon />
      </div>

      {/* mobile menu */}
      <div
        className="md:hidden text-slate-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <FontAwesomeIcon icon={faXmark} size="xl" />
        ) : (
          <FontAwesomeIcon icon={faBars} size="xl" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
