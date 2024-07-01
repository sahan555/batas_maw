import React, { useRef, useState } from "react";
import Breadcrumbs from "../Component/Global/BreadCrumbs";
import { Gallery, GalleryBox, GalleryLink } from "../Component/Global/Gallery";
import Pagination from "../Component/Global/Pagination";
import useGet from "../Global/Apis/useGet";

const GalleryPage = () => {
  const [dataFromChild, setDataFromChild] = useState([]);
  const [dataVideo, setDataVideo] = useState([]);
  const videoRef = useRef(null);
  const galleryRef = useRef(null);
  const { data: galleries} = useGet("galleries");

  return (
    <>
      <Breadcrumbs />
      <section className="gallery-page bg-light-grey bg-opacity-40">
        <div className="side-padding">
          <div className="section-break container mx-auto">
            {galleries?.video.length > 0 && (
              <div className="video-section pb-14" ref={videoRef}>
                <div className="heading-wrapper pb-4">
                  <h2 className="heading !text-secondary">Our Videos</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {dataVideo?.map((item) => (
                    <div className="col-span-1">
                      <div className="iframe-wrapper h-[400px] overflow-hidden rounded-lg">
                        <iframe
                          src={item}
                          title="YouTube video player"
                          className="h-full w-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  ))}
                </div>
                <Pagination
                  ref={videoRef}
                  data={galleries?.video?.[0]?.type}
                  view={2}
                  setDataFromChild={setDataVideo}
                />
              </div>
            )}
              <>
                <div className="gallery-section" ref={galleryRef}>
                  <div className="heading-wrapper pb-4">
                    <h2 className="heading !text-secondary">Our Gallery</h2>
                  </div>
                  <Gallery titleId="gallerypage">
                    <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 gap-6">
                      {dataFromChild?.map((item, index) => (
                        <GalleryBox
                          key={index}
                          classname={"bg-white rounded-lg overflow-hidden"}
                        >
                          <GalleryLink
                            data={item}
                            index={index}
                            classname={`block h-[300px] w-full focus:outline-none `}
                          />
                        </GalleryBox>
                      ))}
                    </div>
                    <Pagination
                      ref={galleryRef}
                      data={galleries?.gallery?.[0]?.images}
                      view={8}
                      setDataFromChild={setDataFromChild}
                    />
                  </Gallery>
                </div>
              </>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
