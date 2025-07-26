import { useEffect, useMemo, useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { debounce } from 'lodash';
import { IUpcomingMovies } from '../../types';

import { useAxios } from '~/config/Axios';
import { WatchStackParamList } from '~/navigation/stack';

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
  const debouncedSearch = useMemo(
    () =>
      debounce((query: string) => {
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
      // Cancel any pending debounced calls when clearing search
      debouncedSearch.cancel();
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

  // Cleanup debounced function on unmount
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

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
