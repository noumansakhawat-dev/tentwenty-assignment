import { useEffect, useRef, useState } from 'react';
import { IUpcomingMovies } from '../../types';

import { useAxios } from '~/config/Axios';

type Result = IUpcomingMovies['results'][number];
export const useWatchDashboardScreen = () => {
  const [page, setPage] = useState(1);
  const totalPages = useRef(1);
  const [responseData, setResponseData] = useState<Result[]>([]);
  const [isPagesLoaded, setIsPagesLoaded] = useState(false);
  const [isMoreLoading, setIsMoreLoading] = useState(false);

  const [{ data, loading, error }, refetch] = useAxios({
    url: '/movie/upcoming',
    params: {
      language: 'en-US',
      page
    },
    method: 'GET'
  });

  useEffect(() => {
    if (data) {
      totalPages.current = data.total_pages;
      setIsMoreLoading(false);
      if (data.page === 1) {
        setResponseData(data.results);
        return;
      }

      // Filter out duplicates when adding new page data
      setResponseData((prev) => {
        const existingIds = new Set(prev.map((movie: Result) => movie.id));
        const newMovies = data.results.filter((movie: Result) => !existingIds.has(movie.id));
        return [...prev, ...newMovies];
      });
    }
  }, [data]);

  const loadMore = () => {
    if (isPagesLoaded) return;
    if (page < totalPages.current) {
      setPage((prev) => prev + 1);
      setIsMoreLoading(true);
      refetch();
    } else {
      setIsPagesLoaded(true);
    }
  };

  return {
    isLoading: loading,
    isMoreLoading,
    error,
    loadMore,
    isPagesLoaded,
    response: {
      data: responseData,
      page,
      totalPages: totalPages.current
    }
  };
};
