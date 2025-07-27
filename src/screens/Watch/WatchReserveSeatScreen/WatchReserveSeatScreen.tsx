import { FC, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { Chip } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import dayjs from 'dayjs';
import { SeatColors } from './utils/seatColors';
import { CinemaHall } from './components';
import { useStyles } from './WatchReserveSeatScreen.styles';

import { AppHeader } from '~/components';
import { useTheme } from '~/hooks/useTheme';
import { WatchStackParamList } from '~/navigation/stack';

type WatchReserveSeatScreenProps = NativeStackScreenProps<WatchStackParamList, 'WatchReserveSeatScreen'>;

export const WatchReserveSeatScreen: FC<WatchReserveSeatScreenProps> = ({ navigation, route }) => {
  const { movieTitle, date, time, cinema } = route.params;
  const styles = useStyles();
  const { height } = useWindowDimensions();
  const theme = useTheme();
  const [selectedSeats, setSelectedSeats] = useState<{ rowIndex: number; seatNumber: number }[]>([]);

  const handleSeatSelection = (seats: { rowIndex: number; seatNumber: number }[]) => {
    setSelectedSeats(seats);
    console.log('Selected seats:', seats);
  };

  // Sample data that matches the cinema layout in the screenshot
  const seatRows = [
    {
      seats: 18,
      isVip: false,
      selectedSeats: [5, 6, 7],
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

  const calculateTotalPrice = () => {
    let total = 0;
    selectedSeats.forEach((seat) => {
      const row = seatRows[seat.rowIndex];
      total += row.isVip ? 150 : 50;
    });
    return total;
  };

  const totalPrice = calculateTotalPrice();

  return (
    <View style={styles.container}>
      <AppHeader
        variant='center'
        navigation={navigation as any}
        title={movieTitle}
        description={`${dayjs(date).format('MMM D, YYYY')} ${time} | ${cinema}`}
      />
      <View
        style={{
          height: height * 0.5,
          backgroundColor: theme.colors.lightGray1
        }}>
        <CinemaHall seatRows={seatRows} onSeatSelect={handleSeatSelection} />
      </View>

      {/* Legend and Payment Section */}
      <View style={styles.bottomSection}>
        {/* Legend */}
        <View style={styles.legendContainer}>
          <View style={styles.legendRow}>
            <View style={styles.legendItem}>
              <View style={[styles.legendIndicator, { backgroundColor: SeatColors.selected }]} />
              <Text style={styles.legendText}>Selected</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendIndicator, { backgroundColor: SeatColors.notAvailable }]} />
              <Text style={styles.legendText}>Not available</Text>
            </View>
          </View>
          <View style={styles.legendRow}>
            <View style={styles.legendItem}>
              <View style={[styles.legendIndicator, { backgroundColor: SeatColors.vip }]} />
              <Text style={styles.legendText}>VIP (150$)</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendIndicator, { backgroundColor: SeatColors.regular }]} />
              <Text style={styles.legendText}>Regular (50 $)</Text>
            </View>
          </View>
        </View>

        {/* Selected Seats Counter */}
        <ScrollView style={styles.chipContainer} contentContainerStyle={styles.chipContainerContent}>
          {selectedSeats.map((seat) => (
            <Chip key={`${seat.rowIndex}-${seat.seatNumber}`} style={styles.seatChip} textStyle={styles.chipText}>
              {seat.seatNumber} / {seat.rowIndex + 1} row
            </Chip>
          ))}
        </ScrollView>

        {/* Payment Section */}
        <View style={styles.paymentContainer}>
          <View style={styles.totalPriceContainer}>
            <Text style={styles.totalPriceLabel}>Total Price</Text>
            <Text style={styles.totalPriceValue}>$ {totalPrice}</Text>
          </View>
          <TouchableOpacity style={styles.proceedButton}>
            <Text style={styles.proceedButtonText}>Proceed to pay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
