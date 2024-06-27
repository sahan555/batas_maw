import React from "react";
import { Link } from "react-router-dom";

const VideoSection = ({ data: video }) => {
  return (
    <section className="video-section section-break">
      <div className="side-padding">
        <div className="container mx-auto">
          <div className="heading-wrapper pb-[50px] text-center">
            <h2 className="heading mb-2">videos</h2>
            <p className=" mx-auto max-w-[850px] text-grey">
              Welcome to our video gallery! Explore a selection of videos
              showcasing our products, their features, and customer
              testimonials. Discover the quality and performance that Batas Maw
              offers.
            </p>
          </div>
          <div className="video-wrapper">
            <div className="mx-auto grid w-full max-w-[1200px] grid-flow-col grid-cols-1 gap-2 sm:grid-cols-2 sm:grid-rows-2 md:gap-5">
              {video?.[0]?.type?.slice(0, 3)?.map((item, index) => (
                <div
                  key={index}
                  className={`col-span-full ${index % 3 === 0 ? "  sm:col-span-8 sm:row-span-2" : index % 2 === 0 ? "sm:col-span-1" : "sm:col-span-1 sm:row-span-1"}`}
                >
                  <div
                    className={`iframe-wrapper h-[220px] w-full ${index % 3 === 0 && "sm:h-full  sm:min-h-[400px]"}  `}
                  >
                    <iframe
                      src={item}
                      title="YouTube video player"
                      className="h-full w-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
            <div className="btn-wrapper pt-8 text-center">
              <Link
                className="btn-transparent skew-btn inline-block px-8 py-2 uppercase text-primary before:border-primary hover:text-white hover:before:bg-primary"
                to="/"
              >
                View All Videos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
