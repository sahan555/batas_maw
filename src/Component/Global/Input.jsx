import React, { Children } from "react";

export const Input = ({
  type,
  name,
  id,
  value,
  placeholder,
  as,
  cols,
  rows,
  children,
  classname,
}) => {
  if (as === "textarea") {
    return (
      <textarea
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        cols={cols}
        rows={rows}
        className={classname}
      ></textarea>
    );
  } else if (as === "select") {
    return (
      <select name={name} id={id} className={classname}>
        {children}
      </select>
    );
  }
  return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        className={classname}
      />
    </>
  );
};
