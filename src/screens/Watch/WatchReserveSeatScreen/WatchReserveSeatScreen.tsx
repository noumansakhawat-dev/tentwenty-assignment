import { FC } from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import dayjs from 'dayjs';
import { CinemaHall } from './components';
import { useStyles } from './WatchReserveSeatScreen.styles';

import { AppHeader } from '~/components';
import { WatchStackParamList } from '~/navigation/stack';

type WatchReserveSeatScreenProps = NativeStackScreenProps<WatchStackParamList, 'WatchReserveSeatScreen'>;

export const WatchReserveSeatScreen: FC<WatchReserveSeatScreenProps> = ({ navigation, route }) => {
  const { movieTitle, date, time, cinema } = route.params;
  const styles = useStyles();

  // Sample data that matches the cinema layout in the screenshot
  // Each number represents the number of seats in that row
  const seatsPerRow = [
    // First few rows with varying seat counts
    18, 24, 24, 24, 25, 25, 25, 25, 25, 25
  ];

  return (
    <View style={styles.container}>
      <AppHeader
        variant='center'
        navigation={navigation as any}
        title={movieTitle}
        description={`${dayjs(date).format('MMM D, YYYY')} ${time} | ${cinema}`}
      />
      <CinemaHall seatsPerRow={seatsPerRow} />
    </View>
  );
};
