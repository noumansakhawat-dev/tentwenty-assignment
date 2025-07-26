import React, { useState } from 'react';
import { Pressable, ScrollView, TouchableOpacity, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import dayjs from 'dayjs';
import { useStyles } from './WatchSelectDateTimeScreen.styles';

import { AppHeader, AppStatusBar } from '~/components';
import { WatchStackParamList } from '~/navigation/stack';

type WatchSelectDateTimeScreenProps = NativeStackScreenProps<WatchStackParamList, 'WatchSelectDateTimeScreen'>;

// Generate next 7 days for date selection
const generateDates = () => {
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const date = dayjs().add(i, 'day');
    dates.push({
      id: i,
      date: date.toDate(),
      dayName: date.format('ddd'),
      dayNumber: date.format('D'),
      monthName: date.format('MMM'),
      fullDate: date.format('YYYY-MM-DD')
    });
  }
  return dates;
};

// Showtime data
const showtimes = [
  {
    id: 1,
    time: '12:30',
    cinema: 'Cinetech + hall 1',
    priceFrom: 50,
    priceTo: 2500,
    currency: '$'
  },
  {
    id: 2,
    time: '13:30',
    cinema: 'Cinetech + hall 2',
    priceFrom: 75,
    priceTo: 3000,
    currency: '$'
  }
];

// Generate seat grid
const generateSeatGrid = () => {
  const rows = 12;
  const seatsPerRow = 25;
  const seats = [];

  for (let row = 0; row < rows; row++) {
    const rowSeats = [];
    for (let seat = 0; seat < seatsPerRow; seat++) {
      const seatNumber = row * seatsPerRow + seat;
      let status = 'available'; // available, occupied, selected

      // Randomly mark some seats as occupied for demo
      if (Math.random() > 0.7) {
        status = 'occupied';
      }

      rowSeats.push({
        id: seatNumber,
        row: row,
        seat: seat,
        status: status
      });
    }
    seats.push(rowSeats);
  }
  return seats;
};

export const WatchSelectDateTimeScreen: React.FC<WatchSelectDateTimeScreenProps> = ({ navigation, route }) => {
  const styles = useStyles();
  const { movie } = route.params;

  const [selectedDate, setSelectedDate] = useState<string>(generateDates()[0].fullDate);
  const [selectedShowtime, setSelectedShowtime] = useState<number | null>(null);

  const dates = generateDates();

  const renderSeatGrid = () => {
    const seatGrid = generateSeatGrid();

    return (
      <View style={styles.seatGrid}>
        {seatGrid.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.seatRow}>
            {row.map((seat) => (
              <View
                key={seat.id}
                style={[
                  styles.seat,
                  seat.status === 'occupied' && styles.occupiedSeat,
                  seat.status === 'selected' && styles.selectedSeat
                ]}
              />
            ))}
          </View>
        ))}
      </View>
    );
  };

  const handleShowtimePress = (showtimeId: number) => {
    setSelectedShowtime(showtimeId);
  };

  const renderShowtimeCard = (showtime: (typeof showtimes)[0]) => {
    const isSelected = selectedShowtime === showtime.id;

    return (
      <Pressable key={showtime.id} style={styles.showtimeItemContainer} onPress={() => handleShowtimePress(showtime.id)}>
        <View style={styles.showtimeCinemaHeader}>
          <Text style={styles.showtimeTime} variant='bodyMedium'>
            {showtime.time}
          </Text>
          <Text style={styles.showtimeCinema} variant='bodySmall'>
            {showtime.cinema}
          </Text>
        </View>

        <View style={[styles.seatCardContainer, isSelected && styles.selectedSeatCardContainer]}>{renderSeatGrid()}</View>

        <View style={styles.showtimeFooter}>
          <Text style={styles.priceText} variant='bodySmall'>
            From
          </Text>
          <Text style={styles.priceTextValue} variant='bodySmall'>
            {showtime.currency}
            {showtime.priceFrom}
          </Text>
          <Text style={styles.priceText} variant='bodySmall'>
            or
          </Text>
          <Text style={styles.priceTextValue} variant='bodySmall'>
            {showtime.currency}
            {showtime.priceTo}
          </Text>
          <Text style={styles.priceText} variant='bodySmall'>
            bonus
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <AppStatusBar barStyle='dark-content' />
      <AppHeader
        variant='center'
        navigation={navigation as any}
        title={movie.title}
        description={`In Theaters ${dayjs(movie.release_date).format('MMMM D, YYYY')}`}
      />

      <View style={styles.content}>
        {/* Date Selection */}
        <View style={styles.dateSectionContainer}>
          <Text style={styles.sectionTitle} variant='titleMedium'>
            Date
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.dateScrollView}
            contentContainerStyle={styles.dateContainer}>
            {dates.map((dateItem) => (
              <TouchableOpacity
                key={dateItem.id}
                onPress={() => setSelectedDate(dateItem.fullDate)}
                disabled={selectedDate === dateItem.fullDate}
                activeOpacity={0.8}
                style={[styles.dateCard, selectedDate === dateItem.fullDate && styles.selectedDateCard]}>
                <Text style={[styles.dateText, selectedDate === dateItem.fullDate && styles.selectedDateText]}>
                  {dateItem.dayNumber} {dateItem.monthName}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Showtimes */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.showtimesContainer}
          contentContainerStyle={styles.showtimesContainerContent}>
          {showtimes.map(renderShowtimeCard)}
        </ScrollView>
      </View>

      {/* Bottom Button */}
      <View style={styles.bottomContainer}>
        <Button
          mode='contained'
          onPress={() => {
            // Handle seat selection navigation
            console.log('Select Seats pressed');
          }}
          disabled={!selectedShowtime || !selectedDate}
          style={[styles.selectSeatsButton, (!selectedShowtime || !selectedDate) && styles.selectSeatsButtonDisabled]}
          labelStyle={styles.buttonText}>
          Select Seats
        </Button>
      </View>
    </View>
  );
};
