import React from "react";
import useGetById from "../../Global/Apis/useGetById";
import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "../../Component/Global/BreadCrumbs";
import HtmlParse from "../../Component/Global/HtmlParse";
// import BlogCard from "../../Component/Global/BlogCard";
import { CgSoftwareDownload } from "react-icons/cg";
import useGet from "../../Global/Apis/useGet";
import { useLayoutData } from "../../Global/Context/Layout";
import MetaHelmet from "../../Component/Global/MetaHelmet";

const MediaDetails = () => {
  const { settings } = useLayoutData();

  const { slug } = useParams();
  const { data: details } = useGetById("blogs", slug);
  const { data: recent } = useGet("recent-blogs");

  return (
    <>
      <MetaHelmet title={`Media | ${settings?.meta_title}`} />
      <Breadcrumbs data={details?.name} />
      <section className="media-details section-break bg-light-grey bg-opacity-40">
        <div className="side-padding">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
              <div className="col-span-2">
                <div className="media-box">
                  <div className="media-heading pb-4">
                    <div className="heading-wrapper">
                      <h1 className="heading mb-2">{details?.name}</h1>
                    </div>
                    <div className="media-date flex text-center ">
                      <h3 className="rounded-lg bg-secondary px-3 py-1 text-white">
                        08 <span>{"Mayasdfgh"?.slice(0, 3)}</span> 2024
                      </h3>
                    </div>
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
                  <div className="btn-wrapper">
                    <Link
                      target="_blank"
                      to={""}
                      className={`btn-full skew-btn inline-flex gap-2 px-8 py-2 uppercase text-white before:bg-primary hover:opacity-90`}
                    >
                      <CgSoftwareDownload className="text-xl" />
                      Download
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1 ">
                <div className="heading-wrapper mb-5">
                  <h2 className="heading capitalize">recent Media</h2>
                </div>
                <div className="media-groups grid grid-cols-2 gap-6">
                  {recent?.slice(0, 2)?.map((item, index) => (
                    <div
                      className="col-span-full sm:col-span-1 lg:col-span-full"
                      key={index}
                    >
                      <div className="media-box group relative  h-full border border-l-0 border-gray-300 bg-white p-6 outline-0 before:absolute before:left-0 before:top-[-1px] before:h-[calc(100%+2px)] before:w-2.5 before:bg-secondary before:content-['']">
                        <Link
                          to={`/media/${item?.slug}`}
                          className="flex items-start gap-4"
                        >
                          <div className="media-date h-14  w-14 flex-none text-center ">
                            <h3 className="text-xl">08</h3>
                            <span>{"Mayasdfgh"?.slice(0, 3)}</span>
                          </div>
                          <div className="media-brief">
                            <h2 className="mb-2 line-clamp-1 text-secondary hover:underline">
                              {item?.name}
                            </h2>
                            <p className="line-clamp-3">{item?.excerpt}</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="btn-wrapper pt-6 text-center">
                  <Link
                    className="btn-transparent skew-btn inline-block px-8 py-2 uppercase text-primary before:border-primary hover:text-white hover:before:bg-primary"
                    to="/media"
                  >
                    View All Media
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

export default MediaDetails;
