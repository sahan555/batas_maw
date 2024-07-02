import React from "react";

const SimpleTable = ({ data }) => {
  return (
    <div className="relative max-h-[400px] overflow-auto overflow-x-auto custom-scrollbar">
      <table className="w-full text-left text-sm  text-grey rtl:text-right">
        <tbody>
          {/* {data?.map((item, index) => (
                <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800" key={index}>
                  <td className="px-6 py-4">{}</td>
                </tr>
              ))} */}
          {data?.map((item) => (
            <tr
              key={item?.id}
              className="capitalize odd:bg-white even:bg-gray-100  [&:not(:last-child)]:border-b"
            >
              <td className="w-1/2 px-6 py-4">{item?.name}</td>
              <td className="w-1/2 px-6 py-4">{item?.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SimpleTable;
