import React from "react";
import { Link } from "react-router-dom";

const Article = ({ title, desc, headClass, grey, slug,btnName }) => {
  return (
    <div className="heading-wrapper mb-10 text-center">
      <h1 className={`heading mb-3 ${headClass}`}>{title}</h1>
      <p className={`mx-auto w-full max-w-[900px] ${grey && "text-grey"}`}>
        {desc}
      </p>
      {slug && (
        <div className="btn-wrapper pt-8">
          <Link
            className="btn-full skew-btn inline-block px-8 py-2 uppercase text-white before:bg-primary hover:opacity-90" to={slug}
          >
            {btnName}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Article;
