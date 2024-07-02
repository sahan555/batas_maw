import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { baseUrl } from "./BaseUrl";

let requestMap = {};

const useGet = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      if (requestMap[url]) {
        // console.log(`Waiting for existing request for ${url}`);
        const existingPromise = await requestMap[url];
        setData(existingPromise.data.data);
      } else {
        const newPromise = axios.get(`${baseUrl}${url}`);
        requestMap[url] = newPromise;
        const response = await newPromise;
        setData(response.data.data);
      }
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
      delete requestMap[url];
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error };
};
export default useGet;
