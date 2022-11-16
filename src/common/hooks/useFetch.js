import { useEffect, useState } from "react";

const useFetch = (service) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const getData = async () => {
    setIsLoading(true);
    try {
      const res = await service();
      setData(res);
      console.log(service);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetch;
