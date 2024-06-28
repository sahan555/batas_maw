import React from "react";
import useGetById from "../../Global/Apis/useGetById";
import Loading from "../../Component/Global/Loading";
import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "../../Component/Global/BreadCrumbs";
import HtmlParse from "../../Component/Global/HtmlParse";
import useGet from "../../Global/Apis/useGet";
import BlogCard from "../../Component/Global/BlogCard";

const BlogDetails = () => {
  const { slug } = useParams();
  const { data: details, isLoading } = useGetById("blogs", slug);
  const { data: recent } = useGet("recent-blogs");
  console.log(details);
  if (isLoading || !details) {
    return <Loading />;
  }

  return (
    <>
      <Breadcrumbs data={details?.name} />
      <section className="blog-details section-break bg-light-grey bg-opacity-40">
        <div className="side-padding">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
              <div className="col-span-2">
                <div className="blog-box">
                  <div className="heading-wrapper mb-4">
                    <h1 className="heading !text-primary">{details?.name}</h1>
                    <span className="text-xs text-black opacity-60">
                      {details?.created_at}
                    </span>
                  </div>
                  <figure className="mb-4 h-[400px] overflow-hidden rounded-2xl border bg-white">
                    <img
                      src={details?.image}
                      alt={details?.name}
                      className="object-cover object-center"
                    />
                  </figure>
                  <div className="leading-7 [&>*]:mb-2">
                    <HtmlParse data={details?.description} />
                  </div>
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1 ">
                <div className="heading-wrapper mb-5">
                  <h2 className="heading capitalize">recent Blogs</h2>
                </div>
                <div className="blog-groups grid grid-cols-2 gap-6">
                  {recent?.slice(0, 2)?.map((item, index) => (
                    <div className="col-span-full sm:col-span-1 lg:col-span-full" key={index}>
                      <BlogCard data={item} slug={"/blog/"} />
                    </div>
                  ))}
                  
                </div>
                <div className="btn-wrapper pt-6 text-center">
                    <Link
                      className="btn-transparent skew-btn inline-block px-8 py-2 uppercase text-primary before:border-primary hover:text-white hover:before:bg-primary"
                      to="/blog"
                    >
                      View All Blogs
                    </Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
