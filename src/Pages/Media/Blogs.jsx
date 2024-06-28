import React, { useRef, useState } from "react";
import Breadcrumbs from "../../Component/Global/BreadCrumbs";
import useGet from "../../Global/Apis/useGet";
import Article from "../../Component/Global/Article";
import Pagination from "../../Component/Global/Pagination";
import BlogCard from "../../Component/Global/BlogCard";
import Loading from "../../Component/Global/Loading";

const Blogs = () => {
  const { data ,isLoading} = useGet("blogs");
  const [dataFromChild, setDataFromChild] = useState([]);
  const blogRef = useRef(null);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Breadcrumbs />
      <section className="blog-page bg-light-grey bg-opacity-40">
        <div className="side-padding">
          <div className="section-break container mx-auto">
            <Article title={"Our Blogs"} headClass={""} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" ref={blogRef}>
              {dataFromChild?.map((item) => (
                <div className="col-span-1" key={item?.id}>
                  <BlogCard data={item} />
                </div>
              ))}
            </div>
            <Pagination
              ref={blogRef}
              data={data}
              view={8}
              setDataFromChild={setDataFromChild}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
