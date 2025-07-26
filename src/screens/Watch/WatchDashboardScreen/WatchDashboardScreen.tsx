import { FC } from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useWatchDashboardScreen } from './hooks/useWatchDashboardScreen';

import { AppHeader, MoviesList } from '~/components';
import { useTheme } from '~/hooks/useTheme';
import { WatchStackParamList } from '~/navigation/stack';

type WatchDashboardScreenProps = NativeStackScreenProps<WatchStackParamList, 'WatchDashboardScreen'>;
export const WatchDashboardScreen: FC<WatchDashboardScreenProps> = ({ navigation }) => {
  const theme = useTheme();
  const { response, isLoading, isMoreLoading, loadMore, isPagesLoaded } = useWatchDashboardScreen();

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.lightGray }}>
      <AppHeader
        title={'Watch'}
        navigation={navigation as any}
        hideBackButton
        onSearchPress={() => {
          navigation.navigate('WatchSearchScreen', {
            upcomingMovies: response.data
          });
        }}
      />

      <MoviesList
        isLoading={isLoading}
        data={response.data}
        onEndReached={() => {
          if (isMoreLoading || isPagesLoaded) {
            return;
          }
          loadMore();
        }}
        isMoreLoading={isMoreLoading}
      />
    </View>
  );
};
