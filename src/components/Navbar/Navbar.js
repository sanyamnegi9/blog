import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className=" px-8 flex items-center justify-between h-14 bg-slate-700">
      <h2 className="text-slate-50 text-[2.2rem] italic">Blogs</h2>
      <div className="hidden md:block">
        <Link to="/" className="mx-3 px-4 py-2 rounded-xl hover:bg-slate-500 text-slate-50 font-medium">
          Home
        </Link>
        <Link to="/about" className="mx-3 px-4 py-2 rounded-xl hover:bg-slate-500 text-slate-50 font-medium">
          About
        </Link>
        <Link to="/blogs" className="mx-3 px-4 py-2 rounded-xl hover:bg-slate-500 text-slate-50 font-medium">
          Blogs
        </Link>
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
    </div>
  );
};

export default Navbar;
