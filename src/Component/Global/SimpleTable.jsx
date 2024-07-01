import React from "react";

const SimpleTable = ({ data }) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
        <tbody>
          {/* {data?.map((item, index) => (
                <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800" key={index}>
                  <td className="px-6 py-4">{}</td>
                </tr>
              ))} */}
          {data?.map((item) => (
            <tr
              key={item?.id}
              className="capitalize odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800  [&:not(:last-child)]:border-b"
            >
              <td className="px-6 py-4 w-1/2">{item?.name}</td>
              <td className="px-6 py-4 w-1/2">{item?.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SimpleTable;
