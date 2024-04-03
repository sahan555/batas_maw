import React from "react";

const Buttons = ({ classname, variant, onclick, skew, children, color }) => {
  return (
    <h1
      className={`
      ${skew === true ? "before:-skew-x-[20deg] before:transform" : null} 
      ${variant === "full" ? `text-white before:bg-${color}` : `text-${color} before:border before:border-solid before:border-[${color}]`} 
      
      ${classname === undefined ? "" : classname}`}
      onClick={onclick}
    >
      {children}
    </h1>
  );
};

export default Buttons;
