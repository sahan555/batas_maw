import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { baseUrl } from "./BaseUrl";

const useGet = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${baseUrl}${url}`);
      const fetchedData = response?.data?.data;
      setData((prevData) =>
        JSON.stringify(prevData) !== JSON.stringify(fetchedData)
          ? fetchedData
          : prevData
      );
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error };
};

export default useGet;
