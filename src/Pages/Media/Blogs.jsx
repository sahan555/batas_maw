import React from "react";
import Breadcrumbs from "../../Component/Global/BreadCrumbs";
import useGet from "../../Global/Apis/useGet";
import HtmlParse from "../../Component/Global/HtmlParse";
import { Link } from "react-router-dom";
import Article from "../../Component/Global/Article";

const Blogs = () => {
  const { data } = useGet("blogs");
  return (
    <>
      <Breadcrumbs />
      <section className="blog-page">
        <div className="side-padding">
          <div className="container mx-auto section-break">
            <Article
              title={'Our Blogs'}
              headClass={""}
            />{" "}
            <div className="grid grid-cols-3 gap-8">
              {data?.map((item) => (
                <div className="col-span-1" key={item?.id}>
                  <div className="blog-box">
                    <figure>
                      <img src={item?.image} alt={item?.name} />
                    </figure>
                    <article>
                      <h2>{item?.name}</h2>
                      <span>{item?.created_at}</span>
                      <div className="line-clamp-3">
                        <HtmlParse data={item?.description} />
                      </div>
                    </article>
                    <div className="btn-wrapper">
                      <Link to={item?.slug}>View More</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
