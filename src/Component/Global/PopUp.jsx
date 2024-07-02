import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const PopUp = ({ children, onloadPop }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasShownPopup = sessionStorage.getItem('hasShownPopup');

    if (onloadPop && !hasShownPopup) {
      setShow(true);
      // Set the flag in sessionStorage to indicate the popup has been shown
      sessionStorage.setItem('hasShownPopup', 'true');
    }
  }, [onloadPop]);

  const handlePopup = () => {
    setShow(false);
  };

  return (
    <div
      className={`popup-wrapper inset-0 z-20 flex items-center justify-center duration-300 fixed ${show ? "" : "top-full"}`}
    >
      <div className="popup relative z-30 m-auto max-h-[800px] max-w-[800px] p-4">
        {children}
        <div className="popup-close absolute right-1 top-1">
          <div
            className="btn-wrapper block cursor-pointer rounded-[50%] bg-primary p-[1px] text-3xl text-white"
            onClick={handlePopup}
          >
            <IoClose />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0 bg-black bg-opacity-60"></div>
    </div>
  );
};

export default PopUp;
