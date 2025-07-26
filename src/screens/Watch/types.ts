export type IUpcomingMovies = {
  dates: {
    maximum: Date;
    minimum: Date;
  };
  page: number;
  results: Array<{
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: 'en' | 'fr' | 'ja';
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: Date;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }>;
  total_pages: number;
  total_results: number;
};
