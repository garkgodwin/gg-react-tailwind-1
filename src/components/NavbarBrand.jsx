import React from 'react'
import { NavLink } from 'react-router'
import company from '../config/company'

const NavbarBrand = () => {
  return (
    <NavLink to="/" className="flex items-center">
      <h1 className="text-[32px] font-bold">{company.name}</h1>
    </NavLink>

  )
}

export default NavbarBrand