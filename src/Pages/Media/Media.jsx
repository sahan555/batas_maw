import React, { useRef, useState } from "react";
import Breadcrumbs from "../../Component/Global/BreadCrumbs";
import { Link } from "react-router-dom";
import Article from "../../Component/Global/Article";
import Pagination from "../../Component/Global/Pagination";
import useGet from "../../Global/Apis/useGet";
import { useLayoutData } from "../../Global/Context/Layout";
import MetaHelmet from "../../Component/Global/MetaHelmet";
import Loading from "../../Component/Global/Loading";

const Media = () => {
  const { settings } = useLayoutData();

  const { data, isLoading } = useGet("blogs");
  const [dataFromChild, setDataFromChild] = useState([]);
  const mediaRef = useRef(null);
  if (isLoading || !data) {
    return <Loading />;
  }
  return (
    <>
      <MetaHelmet
        title={`Media | ${settings?.meta_title !== undefined ? settings?.meta_title : "Batas Maw"}`}
      />
      <Breadcrumbs />
      <section className="media-page bg-light-grey bg-opacity-40">
        <div className="side-padding">
          <div className="section-break container mx-auto">
            <Article title={"Our Media"} headClass={""} />
            <div
              className="grid grid-cols-1 gap-8 lg:grid-cols-2 "
              ref={mediaRef}
            >
              {dataFromChild?.map((item) => (
                <div className="col-span-1" key={item?.id}>
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
            <Pagination
              ref={mediaRef}
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

export default Media;
