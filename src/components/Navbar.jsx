import { Link, NavLink } from "react-router-dom";
import {
  FaBars,
  FaCross,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaXmark,
} from "react-icons/fa6";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // navItems
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/services", link: "Services" },
    { path: "about/", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact", link: "Contact" },
  ];
  return (
    <header className="bg-black text-white fixed to-0 left-0 right-0">
      <nav className="px-6 py-4 max-w-7xl mx-auto flex justify-between border-b border-green-100">
        <Link to="/" className="text-2xl font-bold ">
          <span className=" text-green-400">B</span>logs
        </Link>

        {/* Lg devices */}
        <div className="md:flex gap-12 text-lg hidden">
          {navItems.map(({ path, link }, index) => (
            <NavLink key={index} to={path}>
              {link}
            </NavLink>
          ))}
        </div>

        {/* social, login */}
        <div className="lg:flex gap-4 items-center hidden">
          <Link to="/" className="hover:text-green-400">
            <FaInstagram className="w-5 h-5" />
          </Link>
          <Link to="/" className="hover:text-green-400">
            <FaTwitter className="w-5 h-5" />
          </Link>
          <button className="bg-green-400 ml-2 px-6 py-2 font-medium rounded hover:bg-white hover:text-green-400 transition-all duration-200 ease-in">
            Login
          </button>
        </div>

        {/* mobile menu button */}
        <div className="text-white md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className=" cursor-pointer hover:text-green-400"
          >
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* mobile menu items */}
      <div className="">
        <div className="md:hidden space-y-4 text-center px-4 py-3 text-lg flex flex-col">
          {navItems.map(({ path, link }, index) => (
            <NavLink className="hover:bg-slate-50 hover:text-green-400" key={index} to={path}>
              {link}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
