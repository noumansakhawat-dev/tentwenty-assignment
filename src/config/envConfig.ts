import type { AppConfig } from '~/config/environment/types';

// Mobile app configs for DEV, used for test builds
export const appConfig: AppConfig = {
  application_id: 'com.theohealth',
  baseURL: 'https://api.themoviedb.org/3',
  environment: 'develop'
};
