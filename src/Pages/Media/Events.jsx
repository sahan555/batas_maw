import React, { useRef, useState } from "react";
import Breadcrumbs from "../../Component/Global/BreadCrumbs";
import HtmlParse from "../../Component/Global/HtmlParse";
import { Link } from "react-router-dom";
import Article from "../../Component/Global/Article";
import Pagination from "../../Component/Global/Pagination";
import useGet from "../../Global/Apis/useGet";
import { useLayoutData } from "../../Global/Context/Layout";
import MetaHelmet from "../../Component/Global/MetaHelmet";

const Events = () => {
  const { settings } = useLayoutData();

  const { data } = useGet("events");
  const [dataFromChild, setDataFromChild] = useState([]);
  const eventRef = useRef(null);
  return (
    <>
      <MetaHelmet title={`Event | ${settings?.meta_title}`} />

      <Breadcrumbs />
      <section className="event-page bg-light-grey bg-opacity-40">
        <div className="side-padding">
          <div className="section-break container mx-auto">
            <Article title={"Our Events"} headClass={""} />
            <div
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              ref={eventRef}
            >
              {dataFromChild?.map((item, index) => (
                <div
                  className={`${index % 3 === 0 ? "col-span-1 md:col-span-2" : "col-span-1"}`}
                  key={item?.id}
                >
                  <div className="event-box h-full overflow-hidden rounded-lg border bg-white">
                    <article className="border-b p-4 ">
                      <h2 className="line-clamp-1 text-xl text-primary">
                        <Link to={item?.slug} className="hover:underline">
                          {item?.name}
                        </Link>
                      </h2>
                      <span className="text-xs text-black opacity-60">
                        {item?.created_at}
                      </span>
                    </article>
                    <figure className="h-[300px] bg-white">
                      <img
                        src={item?.image}
                        alt={item?.name}
                        className="object-cover object-center"
                      />
                    </figure>
                    <div className="border-t p-4 ">
                      <div className="line-clamp-3 text-balance pt-3 text-grey">
                        <HtmlParse data={item?.description} />
                      </div>
                    </div>
                    <div className="btn-wrapper  px-4 pb-4">
                      <Link
                        to={item?.slug}
                        className="btn-transparent  inline-block px-8 py-2 uppercase text-secondary before:border-secondary hover:text-white hover:before:bg-secondary"
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Pagination
              ref={eventRef}
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

export default Events;
