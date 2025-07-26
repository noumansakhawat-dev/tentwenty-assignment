import { IUpcomingMovies } from '~/screens/Watch';

export type WatchStackParamList = {
  WatchDashboardScreen: undefined;
  WatchSearchScreen: {
    upcomingMovies: IUpcomingMovies['results'];
  };
};
