import { useEffect, useState } from "react";

const useFetch = (service, onInit = true) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [canFech, setCanFetch] = useState(onInit);

  const getData = async () => {
    setIsLoading(true);
    try {
      const res = await service();
      console.log(res);
      setData(res);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (canFech) {
      getData();
    }
  }, [canFech]);

  return {
    data,
    isLoading,
    error,
    setCanFetch,
  };
};

export default useFetch;
