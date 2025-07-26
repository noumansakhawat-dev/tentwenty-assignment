import { IMovieDetail } from '../../types';

import { useAxios } from '~/config/Axios';

export default ({ movieID }: { movieID: number }) => {
  const [{ data, loading, error }] = useAxios<IMovieDetail>({
    method: 'GET',
    url: `/movie/${movieID}`
  });

  return {
    movie: data,
    isLoading: loading,
    error
  };
};
