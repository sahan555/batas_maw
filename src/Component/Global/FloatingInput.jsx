import React from "react";

const FloatingInput = ({ type, name, classname, labelname, onchange,min,max }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        className={`peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-center text-sm text-white focus:outline-none  focus:ring-0 ${classname}`} min={min} max={max}
        placeholder=" "
        onChange={onchange}
      />
      <label
        className={`absolute left-[50%] top-3 -z-10 origin-[0] -translate-x-[50%] -translate-y-6  transform whitespace-nowrap text-center font-hermes-thin text-xs uppercase  text-white duration-300 peer-placeholder-shown:-translate-y-1 peer-placeholder-shown:text-sm peer-focus:-translate-y-6 peer-focus:text-xs peer-[.error]:text-red-500`}
      >
        {labelname}
      </label>
    </>
  );
};

export default FloatingInput;
