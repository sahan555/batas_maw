import React from "react";
import useGetById from "../../Global/Apis/useGetById";
import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "../../Component/Global/BreadCrumbs";
import HtmlParse from "../../Component/Global/HtmlParse";
import BlogCard from "../../Component/Global/BlogCard";
import useGet from "../../Global/Apis/useGet";
import MetaHelmet from "../../Component/Global/MetaHelmet";

const EventDetails = () => {
  const { slug } = useParams();
  const { data: details } = useGetById("events", slug);
  const { data: recent } = useGet("recent-events");
  return (
    <>
      <MetaHelmet
        title={
          details?.meta_title !== undefined
            ? `${details.meta_title} | BatasMaw`
            : "BatasMaw"
        }
        description={details?.meta_description}
        keyword={details?.meta_keywords}
      />
      <Breadcrumbs data={details?.name} />
      <section className="events-details section-break bg-light-grey bg-opacity-40">
        <div className="side-padding">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-3 ">
              <div className="col-span-2">
                <div className="events-box">
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
                  <h2 className="heading capitalize">recent Events</h2>
                </div>
                <div className="blog-groups grid grid-cols-2 gap-6">
                  {recent?.slice(0, 2)?.map((item, index) => (
                    <div
                      className="col-span-full sm:col-span-1 lg:col-span-full"
                      key={index}
                    >
                      <BlogCard data={item} slug={"/events/"} />
                    </div>
                  ))}
                </div>
                <div className="btn-wrapper pt-6 text-center">
                  <Link
                    className="btn-transparent skew-btn inline-block px-8 py-2 uppercase text-primary before:border-primary hover:text-white hover:before:bg-primary"
                    to="/events"
                  >
                    View All Events
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

export default EventDetails;
