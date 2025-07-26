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
  WatchSelectDateTimeScreen: {
    movie: IUpcomingMovies['results'][number];
  };
  WatchReserveSeatScreen: {
    movieTitle: string;
    date: string;
    time: string;
    cinema: string;
  };
};
