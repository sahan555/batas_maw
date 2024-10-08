import React from "react";
import CompareField from "../../Global/CompareField";
const CompareSearch = ({ data, slug, compare }) => {
  return (
    <section className="compare-search pb-6 pt-10">
      <div className="container mx-auto">
        <div className="max-w-[1000px]">
          <form className="flex gap-6 lg:gap-16 flex-wrap sm:flex-nowrap">
            <div className="form-group flex w-full sm:w-1/2 flex-wrap items-center gap-3">
              <label>Compare:</label>
              <input
                type="text"
                value={slug?.name}
                disabled
                className="flex-grow border border-gray-300 bg-white py-2 pl-2 w-full sm:w-auto"
              />
            </div>
            <CompareField
              title={"Compare With"}
              slug={slug}
              data={data}
              compare={compare}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default CompareSearch;
