import React from "react";
import HtmlParse from "./HtmlParse";
import { Link } from "react-router-dom";

const BlogCard = ({ data, slug }) => {
  return (
    <div className="blog-box overflow-hidden rounded-lg border bg-white h-full">
      <figure className="h-[300px]  bg-white">
        <img
          src={data?.image}
          alt={data?.name}
          className="object-cover object-center"
        />
      </figure>
      <article className="border-t p-4 ">
        <h2 className="line-clamp-1 text-xl text-primary">
          <Link
            to={`${slug ? slug : ""}${data?.slug}`}
            className="hover:underline"
          >
            {data?.name}
          </Link>
        </h2>
        <span className="text-xs text-black opacity-60">
          {data?.created_at}
        </span>
        <div className="line-clamp-3 text-balance pt-3 text-grey">
          <HtmlParse data={data?.description} />
        </div>
      </article>
      <div className="btn-wrapper  px-4 pb-4">
        <Link
          to={`${slug ? slug : ""}${data?.slug}`}
          className="btn-transparent  inline-block px-8 py-2 uppercase text-secondary before:border-secondary hover:text-white hover:before:bg-secondary"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
