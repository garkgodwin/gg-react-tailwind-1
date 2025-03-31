import React from "react";
import { NavLink } from "react-router";

const NavbarLink = ({ to, text }) => {
  return (
    <li className="color-primary">
      <NavLink to={to} className="text-black">
        {text}
      </NavLink>
    </li>
  );
};

export default NavbarLink;
