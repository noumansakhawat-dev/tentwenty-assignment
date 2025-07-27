import type { AppConfig } from '~/config/environment/types';

// Mobile app configs for DEV, used for test builds
export const appConfig: AppConfig = {
  application_id: 'com.theohealth',
  baseURL: 'https://api.themoviedb.org/3',
  environment: 'develop',
  theMovieDbApiKey: process.env['THE_MOVIE_DB_API_KEY'] || ''
};

export const loadEnv = () => {
  const theMovieDbApiKey = process.env.THE_MOVIE_DB_API_KEY;
  if (!theMovieDbApiKey) {
    throw new Error('THE_MOVIE_DB_API_KEY is not set');
  }

  return {
    theMovieDbApiKey
  };
};
