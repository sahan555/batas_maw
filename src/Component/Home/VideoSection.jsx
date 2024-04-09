import React from "react";
import { Link } from "react-router-dom";

const VideoSection = () => {
  return (
    <section className="video-section section-break">
      <div className="container mx-auto">
        <div className="heading-wrapper pb-[50px] text-center">
          <h2 className="heading mb-2">videos</h2>
          <p className=" mx-auto max-w-[850px] text-grey">
            lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum
            dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit
            amet, consectetur adipiscing elit.lorem ipsum dolor sit amet,
            consectetur adipiscing elit.lorem ipsum dolor sit amet,{" "}
          </p>
        </div>
        <div className="video-wrapper">
          <div className="mx-auto grid w-full max-w-[1200px] grid-flow-col grid-rows-2 gap-5">
            <div className="col-span-8 row-span-2">
              <div className="iframe-wrapper h-full w-full">
                <iframe
                  src="https://www.youtube.com/embed/oumUXgQGAe8?si=78nbr5Dwd7Qh3Kcf"
                  title="YouTube video player"
                  className="h-full w-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-span-1">
              <div className="iframe-wrapper h-[220px] w-full">
                <iframe
                  src="https://www.youtube.com/embed/RriGBtqoaG8?si=hZ2WcfDn7fgunXkO"
                  title="YouTube video player"
                  className="h-full w-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-span-1 row-span-1">
              <div className="iframe-wrapper h-[220px] w-full">
                <iframe
                  src="https://www.youtube.com/embed/6J3qa-LuHE8?si=JJuT0QNWBA7ozrXJ"
                  title="YouTube video player"
                  className="h-full w-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="btn-wrapper pt-8 text-center">
            <Link
              className="btn-transparent skew-btn inline-block px-8 py-2 text-primary before:border-primary hover:text-white hover:before:bg-primary uppercase"
              to="/"
            >
              View All Videos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
