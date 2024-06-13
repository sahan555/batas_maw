import { useEffect, useState } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const listener = () => setMatches(mediaQuery.matches);

    mediaQuery.addEventListener("change", listener);

    // Initial check
    setMatches(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
