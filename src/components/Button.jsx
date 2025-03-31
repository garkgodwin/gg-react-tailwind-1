import React from "react";

const Button = ({handleClick , children}) => {
  return <button onClick={(e) => {
    e.preventDefault(); handleClick(e);
  }} className="primary-bg-color text-white p-3 rounded-md cursor-pointer z-1">
  {children}
</button>
};

export default Button;
