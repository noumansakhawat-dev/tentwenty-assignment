import type { AppConfig } from '~/config/environment/types';

// Mobile app configs for DEV, used for test builds
export const appConfig: AppConfig = {
  application_id: 'com.theohealth',
  baseURL: 'http://dev.theohealth.com',
  environment: 'develop',
  theMovieDbApiKey: process.env['THE_MOVIE_DB_API_KEY'] || ''
};
