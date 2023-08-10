import { useState, useCallback } from 'react';

export const useFetchMovies = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchApi = useCallback(async responses => {
    setIsLoading(true);
    try {
      const data = await responses;
      setData(data);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  }, []);
  return { data, isLoading, error, fetchApi };
};
