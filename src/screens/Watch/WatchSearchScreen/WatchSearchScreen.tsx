import { FC } from 'react';
import { SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppHeader, MoviesList } from '~/components';
import { useTheme } from '~/hooks/useTheme';
import { WatchStackParamList } from '~/navigation/stack';

type WatchSearchScreenProps = NativeStackScreenProps<WatchStackParamList, 'WatchSearchScreen'>;

export const WatchSearchScreen: FC<WatchSearchScreenProps> = ({ navigation, route }) => {
  const { upcomingMovies } = route.params;
  const theme = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.lightGray }}>
      <AppHeader.SearchBar
        onSearchClose={() => {
          navigation.goBack();
        }}
        searchQuery=''
        onSearchChange={() => {}}
      />
      <MoviesList data={upcomingMovies} />
    </SafeAreaView>
  );
};
