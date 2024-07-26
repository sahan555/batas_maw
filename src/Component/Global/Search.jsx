import React from "react";
import SearchField from "./SearchField";
import { useLayoutData } from "../../Global/Context/Layout";

const Search = ({ classname, handleNavbar }) => {
  const { cate, cateLoading } = useLayoutData();
  const reduceData = cate?.reduce((acc, products) => {
    return acc.concat(products.products);
  }, []);
  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className={`w-full border-b border-solid border-[#dddddd] p-2 lg:max-w-[200px] lg:border-0 lg:p-0 2xl:max-w-[250px] ${classname}`}
      >
        <SearchField
          handleNavbar={handleNavbar}
          placeholder={"Search"}
          data={reduceData}
          loading={cateLoading}
        />
      </form>
    </>
  );
};

export default Search;
