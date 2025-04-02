import React, { useState, useEffect } from "react";
import NavbarLink from "./NavbarLink";
import { PhoneIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import NavbarBrand from "./NavbarBrand";
import company from "../config/company";

const navs = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About" },
  { to: "/services", text: "Services" },
  { to: "/contact", text: "Contact" },
];

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{ height: "80px" }}
      className={`px-6 md:px-16 flex justify-between items-center fixed top-0 left-0 w-full z-50 transition-colors  ${
        scrolling ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <NavbarBrand />

      {/* Mobile menu toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-gray-700 focus:outline-none cursor-pointer transition-all "
      >
        {
          menuOpen ? 
          <XMarkIcon color="black" width={18}/> : 
          <Bars3Icon color="black" width={18}/>
        }
      </button>

      {/* Navbar links */}
      <nav className={`absolute top-[90px] md:top-auto w-100 md:w-auto h-100 md:h-auto 
        ${menuOpen ? "-right-0": "-right-[100%]"} 
        md:right-16 
        md:flex bg-white md:bg-inherit transition-[right]
        drop-shadow-md
        `}>
        <ul className="flex flex-col md:flex-row py-10 md:py-0 md:gap-6 items-center font-normal md:ml-10">
          {navs.map((item, index) => (
          <li className="flex gap-1 items-center p-4 md:p-0 border-b-2 md:border-b-0 w-100">
            <NavbarLink key={index} to={item.to} text={item.text} />
          </li>
          ))}
          <li className="flex gap-1 items-center p-4 md:p-0 border-b-2 md:border-b-0 w-100">
            <PhoneIcon width={16} />
            <span>{company.phone}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
