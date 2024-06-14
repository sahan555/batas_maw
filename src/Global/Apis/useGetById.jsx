import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import { baseUrl } from "./BaseUrl";

const useGetById = (url,id) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDataById = useCallback(async (id) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${baseUrl}${url}/${id}`);
      const fetchedData = response?.data?.data;
      setData(fetchedData);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [url]); 

  useEffect(() => {
    if (url && id) {
      fetchDataById(id);
    }
  }, [fetchDataById, id, url]);

  return { fetchDataById, data, isLoading, error };
};

export default useGetById;
