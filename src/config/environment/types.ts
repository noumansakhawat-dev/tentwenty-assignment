export type AppEnvironment = 'develop';

export type AppConfig = {
  application_id: string;
  baseURL: string;
  environment: AppEnvironment;
  theMovieDbApiKey: string;
};
