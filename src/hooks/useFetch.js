import { useState, useEffect } from "react";

export default function useFetch(services, optionDefault, immidiate = false) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetch = async (options) => {
    try {
      setIsLoading(true);
      const res = await services(options);
      setData(res);
    } catch (error) {
      setError(error.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (immidiate) {
      fetch(optionDefault);
    }
  }, []);

  return { data, error, isLoading, fetch };
}