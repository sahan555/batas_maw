import React from "react";
// import { object } from "yup";

export const CompareTable = ({ children }) => {
  return (
    <div className="compare-table relative w-full overflow-x-auto whitespace-normal">
      <table className="w-full text-left text-sm text-[#484848] rtl:text-right dark:text-[#484848]">
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};
export const CompareTr = ({ children, name, data, innerdata,vitraData }) => {
  return (

    <tr className="capitalize odd:bg-white even:bg-gray-100 ">
      {children ? (
        children
      ) : (
        <>
          <td>{name}</td>
          {data?.map((item, index) => (
            <td key={index}>{item[innerdata] ? (!vitraData ? item[innerdata]: item[innerdata][vitraData]) : ''}</td>
          ))}
        </>
      )}
    </tr>
  );
};
// export const CompareTd = ({ data, item }) => {
//   return (
//     <>
//       {data?.map((item, index) => (
//         <td key={index}>{item}</td>
//       ))}
//     </>
//   );
// };
