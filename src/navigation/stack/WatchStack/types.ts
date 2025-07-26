import { IUpcomingMovies } from '~/screens/Watch';

export type WatchStackParamList = {
  WatchDashboardScreen: undefined;
  WatchSearchScreen: {
    upcomingMovies: IUpcomingMovies['results'];
  };
  WatchMovieDetailScreen: {
    movie: IUpcomingMovies['results'][number];
  };
  VideoPlayerScreen: {
    videoKey: string;
    movieTitle: string;
  };
};
