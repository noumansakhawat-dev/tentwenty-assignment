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
  const seatRows = [
    {
      seats: 18,
      isVip: false,
      selectedSeats: [ 5, 6, 7],
      unavailableSeats: [1, 3]
    },
    {
      seats: 24,
      isVip: false,
      selectedSeats: [],
      unavailableSeats: [8, 9, 10]
    },
    {
      seats: 26,
      isVip: false,
      selectedSeats: [12, 13],
      unavailableSeats: [1, 2]
    },
    {
      seats: 26,
      isVip: false,
      selectedSeats: [],
      unavailableSeats: [15, 16, 17]
    },
    {
      seats: 26,
      isVip: false,
      selectedSeats: [5, 6, 7, 8],
      unavailableSeats: []
    },
    {
      seats: 26,
      isVip: false,
      selectedSeats: [],
      unavailableSeats: [20, 21]
    },
    {
      seats: 26,
      isVip: false,
      selectedSeats: [10, 11],
      unavailableSeats: [1, 24, 25, 26]
    },
    {
      seats: 26,
      isVip: false,
      selectedSeats: [],
      unavailableSeats: [3, 4, 5]
    },
    {
      seats: 26,
      isVip: false,
      selectedSeats: [14, 15, 16],
      unavailableSeats: []
    },
    {
      seats: 26,
      isVip: true,
      selectedSeats: [],
      unavailableSeats: [21]
    }
  ];

  return (
    <View style={styles.container}>
      <AppHeader
        variant='center'
        navigation={navigation as any}
        title={movieTitle}
        description={`${dayjs(date).format('MMM D, YYYY')} ${time} | ${cinema}`}
      />
      <CinemaHall seatRows={seatRows} />
    </View>
  );
};
