import React from "react";
import HtmlParse from "./HtmlParse";

const ObjectTable = ({ data }) => {
  return (
    <div className="custom-scrollbar relative max-h-[400px] overflow-auto overflow-x-auto">
      <table className="w-full text-left text-sm  text-grey rtl:text-right">
        <tbody>
          {/* {data?.map((item, index) => (
                <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800" key={index}>
                  <td className="px-6 py-4">{}</td>
                </tr>
              ))} */}
          {Object.entries(data).map(([key, object]) => (
            <tr
              key={key}
              className="capitalize odd:bg-white even:bg-gray-100  [&:not(:last-child)]:border-b"
            >
              <td className="w-1/2 px-6 py-4">{key.replace(/_/g, " ")}</td>
              <td className="w-1/2 px-6 py-4">
                <HtmlParse data={object} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ObjectTable;
