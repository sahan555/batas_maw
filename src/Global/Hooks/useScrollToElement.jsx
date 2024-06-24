const useScrollToElement = (ref) => {
  const scrollToElement = () => {
    if (ref?.current) {
      ref?.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return scrollToElement;
};

export default useScrollToElement;
