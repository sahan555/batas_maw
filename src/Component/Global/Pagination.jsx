import React, { forwardRef, useEffect, useMemo, useState } from "react";

const Pagination = forwardRef(({ data, view, setDataFromChild }, ref) => {
  const executeScroll = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const [viewProduct, setViewProduct] = useState(view);
  const [currentPage, setCurrentPage] = useState(1);

  const totalProduct = data?.length;
  const totalViewInPage = Math.ceil(totalProduct / viewProduct);

  const currentProducts = useMemo(() => {
    const start = (currentPage - 1) * viewProduct;
    return data?.slice(start, start + viewProduct);
  }, [currentPage, viewProduct, data]);
  useEffect(() => {
    setDataFromChild(currentProducts);
  }, [currentProducts, setDataFromChild]);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    executeScroll();
  };
  return (
    <>
      {totalProduct > viewProduct && (
        <div className="pagination flex justify-center pt-10 ">
          <button
            className="skew-btn btn-transparent px-4 py-2 duration-75 before:border-gray-300 before:bg-white hover:text-white hover:before:bg-primary"
            onClick={() => {
              if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
                executeScroll();
              }
            }}
          >
            Prev
          </button>
          {Array.from({ length: totalViewInPage }, (_, index) => (
            <button
              key={index}
              onClick={() => handleClick(index + 1)}
              className={`skew-btn btn-transparent px-4 py-2 duration-75 before:border-gray-300 before:bg-white hover:text-white hover:before:bg-primary ${index + 1 === currentPage ? "text-white before:!bg-primary" : ""}`}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="skew-btn btn-transparent px-4 py-2 duration-75 before:border-gray-300 before:bg-white hover:text-white hover:before:bg-primary"
            onClick={() => {
              if (currentPage < totalViewInPage) {
                setCurrentPage(currentPage + 1);
                executeScroll();
              }
            }}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
});

export default Pagination;
