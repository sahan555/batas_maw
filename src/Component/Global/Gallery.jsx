import React, { useEffect } from "react";
import "photoswipe/style.css";
const handleImageLoad = (index, event) => {
    const { naturalWidth, naturalHeight } = event.target;
    const aElement = event.target.parentNode;

    aElement.setAttribute("data-pswp-width", naturalWidth);
    aElement.setAttribute("data-pswp-height", naturalHeight);
  };
export const Gallery = ({ children,titleId }) => {
  useEffect(() => {
    const initializePhotoSwipe = async () => {
      const [PhotoSwipeModule] = await Promise.all([import("photoswipe")]);

      const { default: PhotoSwipeLightbox } = await import(
        "photoswipe/lightbox"
      );

      // Create a new instance of PhotoSwipeLightbox
      const lightbox = new PhotoSwipeLightbox({
        gallerySelector: `#${titleId}`,
        childSelector: "a",
        mainClass: "pswp--custom",
        preload: [1, 4],
        preloaderDelay: 1,
        fade: true,
        pswpModule: () => PhotoSwipeModule,
      });

      lightbox.init();

      return () => {
        lightbox.destroy();
      };
    };

    initializePhotoSwipe();
  }, [titleId]);
 
  return (
    <div className="pswp-gallery" id={titleId}>
      {children}
    </div>
  );
};

export const GalleryBox = ({ key, classname, children }) => {
  return (
    <div key={key} className={classname}>
      {children}
    </div>
  );
};
export const GalleryLink = ({data,index,classname}) => {
  return (
    <a
      href={data?.image}
      data-index={index}
      target="_blank"
      rel="noreferrer"
      className={classname}
    >
      <img
        src={data?.image}
        alt={`${data?.title ? data?.title : `gallery-${index}`}`}
        className="h-full w-full object-cover object-center"
        onLoad={(event) => handleImageLoad(index, event)}
      />
    </a>
  );
};
