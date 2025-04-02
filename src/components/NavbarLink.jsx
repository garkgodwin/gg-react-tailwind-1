import React from "react";
import { NavLink } from "react-router";

const NavbarLink = ({ to, text }) => {
  return (
      <NavLink to={to}>
        {text}
      </NavLink>
  );
};

export default NavbarLink;
