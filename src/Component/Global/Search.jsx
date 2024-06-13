import React from "react";
import { Input } from "./Input";
import { MdSearch } from "react-icons/md";

const Search = ({classname}) => {
  return (
    <>
      <form action="" className={`lg:max-w-[200px] w-full lg:p-0 lg:border-0 p-2 border-b border-solid border-[#dddddd] ${classname}`}>
        <div className="form-group relative">
          <Input classname="form-control py-1.5 px-6 pr-8 w-full focus:shadow-none focus:outline-none border border-solid border-light-grey focus:border-primary" placeholder="Search" type="text" name="search" />
          <button type="submit" className="absolute right-1.5 top-1.5 text-2xl hover:text-primary transition-all  ">
            <MdSearch />
          </button>
        </div>
      </form>
    </>
  );
};

export default Search;
