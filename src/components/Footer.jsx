import React from "react";
import LinkedIcon from "../assets/in-logo/in-logo/LI-In-Bug.png";
import GithubIcon from "../assets/github_logos/PNG/GitHub_Invertocat_Dark.png";
import company from "../config/company";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-transparent shadow-2xl text-black py-8 mt-8">
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-1">About {company.name}</h3>
            <p className="text-sm">
              {company.description} <br />
              <a href="mailto:info@company.com" className="text-teal-400">{company.email}</a>
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-1">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="hover:text-teal-400">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-teal-400">About</NavLink>
              </li>
              <li>
                <NavLink to="/services" className="hover:text-teal-400">Services</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-teal-400">Contact</NavLink>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/garkgodwin/" target="_blank" rel="noopener noreferrer" className="w-auto">
                <img src={LinkedIcon} alt="LinkedIn" className="w-[24px]" />
              </a>
              <a href="https://github.com/garkgodwin" target="_blank" rel="noopener noreferrer" className="w-auto">
                <img src={GithubIcon} alt="Github" className="w-[24px]" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} {company.name}. All Rights Reserved.</p>
          <div className="mt-2 space-x-4">
            <NavLink to="/terms" className="hover:text-teal-400">Terms & Conditions</NavLink>
            <span>|</span>
            <NavLink to="/privacy-policy" className="hover:text-teal-400">Privacy Policy</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
