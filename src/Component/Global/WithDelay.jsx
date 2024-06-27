// utils/withDelay.js
import React, { useState, useEffect } from "react";
import Loading from "./Loading";

const withDelay = (WrappedComponent, delay = 300) => {
  return (props) => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsReady(true);
      }, delay);

      // Cleanup the timer when the component is unmounted
      return () => clearTimeout(timer);
    }, [delay]);

    // Optionally, render a placeholder or null while waiting
    return isReady ? <WrappedComponent {...props} /> : <Loading/>;
  };
};

export default withDelay;
