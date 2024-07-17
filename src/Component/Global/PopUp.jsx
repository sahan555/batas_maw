import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const PopUp = ({ children, onloadPop, delay }) => {
  const [show, setShow] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const popupDuration = 30 * 60 * 1000;

  useEffect(() => {
    const lastPopupTime = sessionStorage.getItem("lastPopupTime");
    const currentTime = new Date().getTime();

    if (
      onloadPop &&
      (!lastPopupTime || currentTime - lastPopupTime > popupDuration)
    ) {
      setShow(true);
      sessionStorage.setItem("lastPopupTime", currentTime.toString());
    }
  }, [onloadPop, popupDuration]);

  const handlePopup = () => {
    setShow(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (delay) {
        setShowPopup(true);
      }
    }, 6000);

    return () => clearTimeout(timer); 
  }, [delay]);

  return (
    <>
      {showPopup ? (
        <div
          className={`popup-wrapper fixed inset-0 z-20 flex items-center justify-center duration-300 ${show ? "" : "top-full"}`}
        >
          <div className="popup relative z-30 m-auto max-h-[800px] w-full max-w-[800px] p-4">
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
      ) : (
        ""
      )}
    </>
  );
};

export default PopUp;
