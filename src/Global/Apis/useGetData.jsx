import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "./BaseUrl";

export const fetchData = async (url) => {
  const response = await axios.get(`${baseUrl}${url}`);
  return response.data.data;
};

function useGetData(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let cancelRequest = false;

    const fetchDataFromApi = async () => {
      setIsLoading(true);
      try {
        const fetchedData = await fetchData(url);
        if (!cancelRequest) {
          setData(fetchedData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (url) {
      fetchDataFromApi();
    }

    return () => {
      cancelRequest = true;
    };
  }, [url]);

  return { data, isLoading };
}

export default useGetData;
