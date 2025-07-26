import { useCallback, useEffect, useMemo, useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { IUpcomingMovies } from '../../types';

import { useAxios } from '~/config/Axios';
import { WatchStackParamList } from '~/navigation/stack';
import { debounce } from '~/utils/debounce';

export const useWatchSearchScreen = () => {
  const route = useRoute<RouteProp<WatchStackParamList, 'WatchSearchScreen'>>();
  const { upcomingMovies } = route.params;
  const [data, setData] = useState<{ data: IUpcomingMovies['results']; isSearched: boolean }>({
    data: upcomingMovies,
    isSearched: false
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [{ data: searchData, loading, error }, executeSearch] = useAxios(
    {
      url: '/search/movie',
      params: {
        language: 'en-US',
        include_adult: false,
        query: '' // This will be overridden by the execute function
      },
      method: 'GET'
    },
    {
      manual: true,
      useCache: false
    }
  );

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((query: string) => {
      // Pass the query parameter to executeSearch
      executeSearch({
        params: {
          language: 'en-US',
          include_adult: false,
          query: query
        }
      });
    }, 1000),
    [executeSearch]
  );

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      // Call API, but add debounce
      debouncedSearch(searchQuery);
    } else {
      setData({
        data: upcomingMovies,
        isSearched: false
      });
    }
  }, [searchQuery, upcomingMovies, debouncedSearch]);

  useEffect(() => {
    if (searchData && searchQuery.trim().length > 0) {
      setData({
        data: searchData.results,
        isSearched: true
      });
    }
  }, [searchData, searchQuery]);

  return useMemo(
    () => ({
      searchQuery,
      setSearchQuery,
      response: data,
      isSearching: loading,
      error
    }),
    [searchQuery, setSearchQuery, data, loading, error]
  );
};
