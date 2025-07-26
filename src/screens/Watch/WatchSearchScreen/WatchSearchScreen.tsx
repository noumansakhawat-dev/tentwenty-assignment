import { FC } from 'react';
import { SafeAreaView, useWindowDimensions, View } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SearchedMoviesList } from './components/SearchedMoviesList';
import { useWatchSearchScreen } from './hooks/useWatchSearchScreen';

import { AppHeader, MoviesList } from '~/components';
import { useTheme } from '~/hooks/useTheme';
import { WatchStackParamList } from '~/navigation/stack';

type WatchSearchScreenProps = NativeStackScreenProps<WatchStackParamList, 'WatchSearchScreen'>;

export const WatchSearchScreen: FC<WatchSearchScreenProps> = ({ navigation, route }) => {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const { response, isSearching, searchQuery, setSearchQuery } = useWatchSearchScreen();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.lightGray }}>
      <AppHeader.SearchBar
        onSearchClose={() => {
          navigation.goBack();
        }}
        searchQuery={searchQuery}
        onSearchChange={(query) => setSearchQuery(query)}
      />

      {response.isSearched || isSearching ? (
        <View>
          {response.data.length > 0 && (
            <View
              style={{
                marginHorizontal: theme.spacing.m,
                marginBottom: theme.spacing.xxxs,
                marginTop: theme.spacing.m
              }}>
              <Text
                style={{
                  color: theme.colors.darkBlueGray,
                  marginBottom: theme.spacing.xxs
                }}
                variant='labelLarge'>
                Top Results
              </Text>
              <Divider />
            </View>
          )}
          <SearchedMoviesList data={response.data} isSearching={isSearching} />
        </View>
      ) : (
        <MoviesList
          data={response.data}
          numColumns={2}
          style={{
            marginLeft: theme.spacing.s,
            marginRight: 0,
            marginBottom: theme.spacing.s,
            height: 120,
            width: width * 0.44
          }}
          numberOfLines={2}
        />
      )}
    </SafeAreaView>
  );
};
