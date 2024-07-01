import React, { useRef, useState } from "react";
import Breadcrumbs from "../Component/Global/BreadCrumbs";
import HtmlParse from "../Component/Global/HtmlParse";
import Pagination from "../Component/Global/Pagination";
import useGet from "../Global/Apis/useGet";

const Testimonials = () => {
  const [dataFromChild, setDataFromChild] = useState([]);
  const testimonalRef = useRef(null);
  const { data: testimonals } = useGet("testimonials");

  return (
    <>
      <Breadcrumbs />
      <section className="testi-page section-break  bg-light-grey bg-opacity-40">
        <div className="side-padding">
          <div className="mx-auto max-w-[1200px] ">
            <div className="heading-wrapper pb-6">
              <h1 className="heading">What Our Clients Say About Us</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" ref={testimonalRef}>
              {dataFromChild?.map((item) => (
                <div className="col-span-1" key={item?.id}>
                  <div className="testi-box flex md:flex-row flex-col gap-5 rounded-lg border bg-white p-4">
                    <figure className="h-32 w-32 flex-none overflow-hidden rounded-lg">
                      <img src={item?.image} alt={item?.name} />
                    </figure>
                    <article>
                      <div className="pb-3 text-lg leading-7">
                        <HtmlParse data={item?.description} />
                      </div>
                      <div className="testi-client">
                        <h3 className="text-xl text-secondary ">
                          {item?.name}
                        </h3>
                        <p className="text-sm text-grey">{item?.designation}</p>
                      </div>
                    </article>
                  </div>
                </div>
              ))}
              
            </div>
            <Pagination
                ref={testimonalRef}
                data={testimonals}
                view={8}
                setDataFromChild={setDataFromChild}
              />
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
