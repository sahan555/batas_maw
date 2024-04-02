import React from "react";

const ProductCard = ({ heading, title, image }) => {
  if (heading === true) {
    return (
      <>
        <div className="product-box">
          <article>
            <h4 className="bg-light-grey bg-opacity-65 text-black font-medium text-center text-xl py-3 px-2">{title}</h4>
          </article>
          <figure className="h-[298px]">
            <img src={image} alt={title} className="object-cover object-center" />
          </figure>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="product-box">
        <article>
        </article>
        <figure>
          <img src={image}   alt={title} />
        </figure>
          <h4>{title}</h4>
      </div>
    </>
  );
};

export default ProductCard;
