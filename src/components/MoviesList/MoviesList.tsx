import { FC } from 'react';
import { FlatList, StyleProp, View, ViewStyle } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import { MovieCard } from './components/MovieCard';

import { useTheme } from '@tentwenty-tech/theme';

import { IUpcomingMovies } from '~/screens/Watch';

type MoviesListProps = {
  isLoading?: boolean;
  data: IUpcomingMovies['results'];
  numColumns?: number;
  onEndReached?: (info: { distanceFromEnd: number }) => void;
  isMoreLoading?: boolean;
  style?: StyleProp<ViewStyle>;
  numberOfLines?: number;
};
export const MoviesList: FC<MoviesListProps> = ({
  data,
  numColumns = 1,
  onEndReached,
  isMoreLoading = false,
  isLoading = false,
  style,
  numberOfLines
}) => {
  const theme = useTheme();

  if (isLoading && data.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator animating={true} color={theme.colors.primary} size={'large'} />
      </View>
    );
  }
  return (
    <FlatList
      data={data}
      style={{ paddingTop: theme.spacing.m }}
      numColumns={numColumns}
      keyExtractor={(item, index) => `upcoming-${item.id}-${index}`}
      renderItem={({ item }) => (
        <MovieCard
          imageUrl={`https://image.tmdb.org/t/p/original${item.backdrop_path || item.poster_path}`}
          title={item.title}
          style={[
            {
              marginHorizontal: theme.spacing.m,
              marginBottom: theme.spacing.m
            },
            style
          ]}
          numberOfLines={numberOfLines}
        />
      )}
      maxToRenderPerBatch={20}
      scrollEventThrottle={16}
      onEndReached={onEndReached}
      onEndReachedThreshold={0}
      contentContainerStyle={{
        paddingBottom: theme.spacing.m
      }}
      ListEmptyComponent={
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Text variant='titleMedium' style={{ color: theme.colors.darkBlueGray }}>
            No movies found
          </Text>
        </View>
      }
      ListFooterComponent={
        isMoreLoading ? (
          <ActivityIndicator
            style={{
              marginVertical: theme.spacing.m
            }}
            animating={true}
            color={theme.colors.primary}
            size={'large'}
          />
        ) : null
      }
    />
  );
};
