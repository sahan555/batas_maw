import { useState, useEffect, useCallback } from 'react';

const useDebounce = (callback, delay) => {
  const [debouncedCallback, setDebouncedCallback] = useState(() => callback);

  useEffect(() => {
    setDebouncedCallback(() => {
      const handler = (...args) => {
        clearTimeout(handler.timer);
        handler.timer = setTimeout(() => callback(...args), delay);
      };
      handler.timer = null;
      return handler;
    });
  }, [callback, delay]);

  return useCallback((...args) => {
    if (debouncedCallback) {
      debouncedCallback(...args);
    }
  }, [debouncedCallback]);
};

export default useDebounce;
