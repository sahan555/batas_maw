import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToHash = (debounceDelay = 100) => {
  const location = useLocation();

  useEffect(() => {
    let animationFrame;
    let debounceTimer;

    const scrollToHash = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    const handleHashChange = () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);

      if (debounceTimer) clearTimeout(debounceTimer);

      debounceTimer = setTimeout(() => {
        animationFrame = requestAnimationFrame(scrollToHash);
      }, debounceDelay);
    };

    scrollToHash();

    window.addEventListener("hashchange", handleHashChange);

    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      if (animationFrame) cancelAnimationFrame(animationFrame);
      if (debounceTimer) clearTimeout(debounceTimer);
    };
  }, [debounceDelay, location]);
};

export default useScrollToHash;
