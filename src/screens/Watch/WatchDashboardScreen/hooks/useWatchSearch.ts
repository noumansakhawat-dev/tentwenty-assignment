import { useCallback, useEffect, useRef, useState } from 'react';
import { IUpcomingMovies } from '../../types';

import { useAxios } from '~/config/Axios';
import { debounce } from '~/utils/debounce';

type Result = IUpcomingMovies['results'][number];

export const useWatchSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const totalPages = useRef(1);
  const [responseData, setResponseData] = useState<Result[]>([]);
  const [isPagesLoaded, setIsPagesLoaded] = useState(false);
  const [isMoreLoading, setIsMoreLoading] = useState(false);

  // Determine which endpoint to use based on search query
  const isSearching = debouncedSearchQuery.trim().length > 0;
  const apiUrl = isSearching ? '/search/movie' : '/movie/upcoming';
  const apiParams = isSearching
    ? {
        language: 'en-US',
        page,
        query: debouncedSearchQuery
      }
    : {
        language: 'en-US',
        page
      };

  const [{ data, loading, error }, refetch] = useAxios({
    url: apiUrl,
    params: apiParams,
    method: 'GET'
  });

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((query: string) => {
      setDebouncedSearchQuery(query);
      setPage(1); // Reset to first page when searching
      setResponseData([]); // Clear existing results
      setIsPagesLoaded(false);
    }, 1000),
    []
  );

  // Handle search query changes
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      debouncedSearch(searchQuery);
    }
  }, [searchQuery, debouncedSearch]);

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
    },
    searchQuery,
    setSearchQuery,
    isSearching
  };
};
