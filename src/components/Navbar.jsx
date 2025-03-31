import React, {useState, useEffect} from "react";
import NavbarLink from "./NavbarLink";
import {PhoneIcon }from '@heroicons/react/24/solid';
import NavbarBrand from "./NavbarBrand";
import company from "../config/company";

const navs = [
  {
    to: "/",
    text: "Home",
  },
  {
    to: "/about",
    text: "About",
  },
  {
    to: "/services",
    text: "Services",
  },
  {
    to: "/contact",
    text: "Contact",
  },
];

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

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
      className={`px-16 flex justify-between fixed top-0 left-0 w-screen z-1000 transition-colors ${
        scrolling ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <NavbarBrand/>
      <nav className="flex">
        <ul className="flex justify-end items-center gap-4 font-thin">
          {navs.map((item, index) => {
            return (
              <NavbarLink key={index} to={item.to} text={item.text} />
            );
          })}
          <li className="flex gap-1">
          <PhoneIcon width={16}/>
          <span>{company.phone}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
