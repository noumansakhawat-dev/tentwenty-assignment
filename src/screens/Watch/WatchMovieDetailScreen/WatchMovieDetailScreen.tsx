import { FC } from 'react';
import { StatusBar, View } from 'react-native';
import { ScrollView } from 'react-native';
import { ActivityIndicator, Appbar, Button, Text } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import dayjs from 'dayjs';
import { GenreTag } from './components/GenreTag';
import { MovieDetailBackgroundImage } from './components/MovieDetailBackgroundImage';
import { useMovieVideos } from './hooks/useMovieVideos';
import useWatchMovieDetail from './hooks/useWatchMovieDetail';
import { genresColors } from './utils/genresColors';
import { useStyles } from './WatchMovieDetailScreen.styles';

import { AppHeader } from '~/components';
import { useTheme } from '~/hooks/useTheme';
import { WatchStackParamList } from '~/navigation/stack';

type WatchMovieDetailScreenProps = NativeStackScreenProps<WatchStackParamList, 'WatchMovieDetailScreen'>;

export const WatchMovieDetailScreen: FC<WatchMovieDetailScreenProps> = ({ navigation, route }) => {
  const theme = useTheme();
  const styles = useStyles();
  const {
    movie: { id: movieID }
  } = route.params;
  const { movie, isLoading } = useWatchMovieDetail({ movieID });
  const { trailerKey } = useMovieVideos({ movieID });

  const handleWatchTrailer = () => {
    if (trailerKey) {
      navigation.navigate('VideoPlayerScreen', {
        videoKey: trailerKey,
        movieTitle: movie?.title || 'Movie Trailer'
      });
    }
  };

  if (isLoading)
    return (
      <View style={styles.container}>
        <View style={styles.loadingContainer}>
          <AppHeader title='Watch' hideSearchButton navigation={navigation as any} />
          <ActivityIndicator size='large' color={theme.colors.primary} animating={true} />
        </View>
      </View>
    );

  if (!movie) {
    return (
      <View style={styles.container}>
        <AppHeader title='Watch' hideSearchButton navigation={navigation as any} />
        <View style={styles.loadingContainer}>
          <Text variant='titleMedium'>Movie not found</Text>
        </View>
      </View>
    );
  }
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle='light-content' />
      <MovieDetailBackgroundImage
        imageUrl={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        header={
          <View style={styles.headerContainer}>
            <Appbar.BackAction color={theme.colors.white} onPress={() => navigation.goBack()} />
            <Appbar.Content title='Watch' color={theme.colors.white} />
          </View>
        }
        contentContainerStyle={styles.imageContainer}>
        <Text variant='titleMedium' style={styles.movieTitle}>
          {movie.title}
        </Text>
        <Text style={styles.releaseDate}>{`In Theaters ${dayjs(movie.release_date).format('MMMM D, YYYY')}`}</Text>

        <View style={styles.buttonsContainer}>
          <Button mode='contained' style={styles.getTicketsButton} labelStyle={styles.buttonText}>
            Get Tickets
          </Button>
          <Button
            mode='outlined'
            style={styles.watchTrailerButton}
            labelStyle={styles.buttonText}
            icon='play'
            onPress={handleWatchTrailer}
            disabled={!trailerKey}>
            Watch Trailer
          </Button>
        </View>
      </MovieDetailBackgroundImage>

      <View style={styles.contentContainer}>
        <View style={styles.genresSection}>
          <Text style={styles.genresTitle} variant='titleMedium'>
            Genres
          </Text>

          <View style={styles.genresList}>
            {movie.genres.map((genre, index) => {
              const color = genresColors[index % genresColors.length];

              return (
                <GenreTag
                  key={index}
                  title={genre.name}
                  color={color}
                  style={{ marginRight: theme.spacing.xxxs, marginBottom: theme.spacing.xxxs }}
                />
              );
            })}
          </View>
        </View>

        <View style={styles.overviewSection}>
          <Text style={styles.overviewTitle} variant='titleMedium'>
            Overview
          </Text>
          <Text style={styles.overviewText} variant='bodyMedium'>
            {movie.overview}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
