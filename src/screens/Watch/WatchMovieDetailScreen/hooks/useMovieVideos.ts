import { IMovieVideo } from '../../types';

import { useAxios } from '~/config/Axios';

export const useMovieVideos = ({ movieID }: { movieID: number }) => {
  const [{ data, loading, error }] = useAxios<IMovieVideo>({
    method: 'GET',
    url: `/movie/${movieID}/videos`
  });

  // Find the first official trailer from YouTube
  const getTrailerKey = () => {
    if (!data?.results) return null;

    const trailer = data.results.find((video) => video.site === 'YouTube' && video.type === 'Trailer' && video.official === true);

    // Fallback to any YouTube trailer if no official one found
    return trailer?.key || data.results.find((video) => video.site === 'YouTube')?.key || null;
  };

  return {
    videos: data,
    trailerKey: getTrailerKey(),
    isLoading: loading,
    error
  };
};
