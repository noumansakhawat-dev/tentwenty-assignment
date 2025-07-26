import { FC } from 'react';
import { FlatList, Image, View } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import { getLangNameFromCode } from 'language-name-map';
import { IUpcomingMovies } from '../../types';

import { IconOptionDot } from '@tentwenty-tech/icons';
import { useTheme } from '@tentwenty-tech/theme';

type SearchedMoviesListProps = {
  isSearching?: boolean;
  isMoreLoading?: boolean;
  onEndReached?: (info: { distanceFromEnd: number }) => void;
  data: IUpcomingMovies['results'];
};
export const SearchedMoviesList: FC<SearchedMoviesListProps> = ({
  isSearching = false,
  isMoreLoading = false,
  onEndReached,
  data
}) => {
  const theme = useTheme();

  const renderItem = ({ item }: { item: IUpcomingMovies['results'][number]; index: number }) => {
    const isImageAvailable = item.backdrop_path || item.poster_path;
    const languageName = getLangNameFromCode(item.original_language);
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: theme.spacing.m,
          marginBottom: theme.spacing.s
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',

            flex: 1
          }}>
          {isImageAvailable ? (
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/original${item.backdrop_path || item.poster_path}` }}
              style={{ width: 130, height: 100, borderRadius: theme.spacing.s }}
            />
          ) : (
            <View style={{ width: 130, height: 100, borderRadius: theme.spacing.s, backgroundColor: theme.colors.silver }} />
          )}
          <View
            style={{
              flex: 1,
              marginHorizontal: theme.spacing.s
            }}>
            <Text
              variant='titleSmall'
              style={{
                color: theme.colors.darkBlueGray
              }}>
              {item.title}
            </Text>
            {languageName?.name && (
              <Text
                variant='labelMedium'
                style={{
                  color: theme.colors.silver,
                  marginTop: theme.spacing.xxxs
                }}>
                {languageName.name}
              </Text>
            )}
          </View>
        </View>

        <IconOptionDot color={theme.colors.skyBlue} />
      </View>
    );
  };

  if (isSearching) {
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
      keyExtractor={(item, index) => `seached-${item.id}-${index}`}
      renderItem={renderItem}
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
