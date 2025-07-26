import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { SeatColors } from '../utils/seatColors';

import { IconSeat } from '@tentwenty-tech/icons';

import { useTheme } from '~/hooks/useTheme';

type SeatRow = {
  seats: number; // Total seats in this row
  isVip: boolean; // Is this a VIP row
  selectedSeats: number[]; // Array of selected seat positions (1-indexed)
  unavailableSeats: number[]; // Array of unavailable seat positions (1-indexed)
};

type CinemaHallProps = {
  seatRows: SeatRow[];
};

export const CinemaHall: FC<CinemaHallProps> = ({ seatRows }) => {
  const theme = useTheme();

  // Find the maximum number of seats in any row
  const maxSeats = Math.max(...seatRows.map((row) => row.seats));

  // Calculate seat distribution - prioritize middle section first
  const maxSideSeats = 5; // Maximum seats on each side
  const maxMiddleSeats = maxSeats - maxSideSeats * 2; // Reserve space for sides

  const renderSeatRow = (seatRow: SeatRow, rowIndex: number) => {
    const seats = [];
    const seatCount = seatRow.seats;

    // Calculate how many seats to show in each section for this row
    // Priority: Fill middle first, then distribute remainder to left/right
    const rowMiddleSeats = Math.min(seatCount, maxMiddleSeats);
    const remainingSeats = seatCount - rowMiddleSeats;

    // Distribute remaining seats equally to left and right, max 5 each side
    const rowLeftSeats = Math.min(maxSideSeats, Math.floor(remainingSeats / 2));
    const rowRightSeats = Math.min(maxSideSeats, remainingSeats - rowLeftSeats);

    // Left side seats
    for (let i = 0; i < rowLeftSeats; i++) {
      const seatNumber = i + 1; // 1-indexed seat number
      seats.push(<IconSeat key={`left-${i}`} color={getSeatColor(seatRow, seatNumber)} size='10' />);
    }

    // Gap between left and middle
    if (rowLeftSeats > 0 && rowMiddleSeats > 0) {
      seats.push(<View key='left-gap' style={styles.seatGap} />);
    }

    // Middle seats
    for (let i = 0; i < rowMiddleSeats; i++) {
      const seatNumber = rowLeftSeats + i + 1; // 1-indexed seat number
      seats.push(<IconSeat key={`middle-${i}`} color={getSeatColor(seatRow, seatNumber)} size='10' />);
    }

    // Gap between middle and right
    if (rowMiddleSeats > 0 && rowRightSeats > 0) {
      seats.push(<View key='right-gap' style={styles.seatGap} />);
    }

    // Right side seats
    for (let i = 0; i < rowRightSeats; i++) {
      const seatNumber = rowLeftSeats + rowMiddleSeats + i + 1; // 1-indexed seat number
      seats.push(<IconSeat key={`right-${i}`} color={getSeatColor(seatRow, seatNumber)} size='10' />);
    }

    return seats;
  };

  const getSeatColor = (seatRow: SeatRow, seatNumber: number) => {
    // Check if seat is selected
    if (seatRow.selectedSeats.includes(seatNumber)) {
      return SeatColors.selected;
    }

    // Check if seat is unavailable
    if (seatRow.unavailableSeats.includes(seatNumber)) {
      return SeatColors.notAvailable;
    }

    // Check if it's a VIP row
    if (seatRow.isVip) {
      return SeatColors.vip;
    }

    // Default to regular available seat
    return SeatColors.regular;
  };

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacing.s,
      paddingTop: theme.spacing.l
    },
    hallContainer: {
      justifyContent: 'center'
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: theme.spacing.xs,
      paddingHorizontal: theme.spacing.xxxs
    },
    rowLabel: {
      width: 20,
      fontSize: 12,
      fontWeight: '500',
      color: theme.colors.mutedLavender,
      marginRight: theme.spacing.xxxs
    },
    seatsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center'
    },
    seatGap: {
      width: theme.spacing.m
    }
  });

  return (
    <View style={styles.container}>
      {/* Cinema Hall */}
      <View style={styles.hallContainer}>
        {seatRows.map((seatRow, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            <Text style={styles.rowLabel}>{rowIndex + 1}</Text>
            <View style={styles.seatsContainer}>{renderSeatRow(seatRow, rowIndex)}</View>
          </View>
        ))}
      </View>

      {/* Zoom in and out buttons */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
        <IconButton
          icon='plus'
          onPress={() => {}}
          size={24}
          style={{
            backgroundColor: theme.colors.white,
            shadowColor: theme.colors.black,
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 4
          }}
        />
        <IconButton
          icon='minus'
          onPress={() => {}}
          size={24}
          style={{
            backgroundColor: theme.colors.white,
            shadowColor: theme.colors.black,
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 4
          }}
        />
      </View>
    </View>
  );
};
