import React from "react";

const Button = ({className="", handleClick , children}) => {
  return <button onClick={(e) => {
    e.preventDefault(); handleClick(e);
  }} className={`primary-bg-color text-white p-3 rounded-md cursor-pointer z-1 ${className}`}>
  {children}
</button>
};

export default Button;
