import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SeatColors } from '../utils/seatColors';

import { IconSeat } from '@tentwenty-tech/icons';

import { useTheme } from '~/hooks/useTheme';

interface CinemaHallProps {
  seatsPerRow: number[];
}

export const CinemaHall: FC<CinemaHallProps> = ({ seatsPerRow }) => {
  const theme = useTheme();

  // Find the maximum number of seats in any row
  const maxSeats = Math.max(...seatsPerRow);

  // Calculate seat distribution - prioritize middle section first
  const maxSideSeats = 5; // Maximum seats on each side
  const maxMiddleSeats = maxSeats - maxSideSeats * 2; // Reserve space for sides

  const Icon = ({ color }: { color: string }) => {
    return (
      <View style={{ marginHorizontal: 2 }}>
        <IconSeat color={color} size='8' />
      </View>
    );
  };

  const renderSeatRow = (seatCount: number, rowIndex: number) => {
    const seats = [];

    // Calculate how many seats to show in each section for this row
    // Priority: Fill middle first, then distribute remainder to left/right
    const rowMiddleSeats = Math.min(seatCount, maxMiddleSeats);
    const remainingSeats = seatCount - rowMiddleSeats;

    // Distribute remaining seats equally to left and right, max 5 each side
    const rowLeftSeats = Math.min(maxSideSeats, Math.floor(remainingSeats / 2));
    const rowRightSeats = Math.min(maxSideSeats, remainingSeats - rowLeftSeats);

    // Left side seats
    for (let i = 0; i < rowLeftSeats; i++) {
      seats.push(<Icon key={`left-${i}`} color={getSeatColor(rowIndex, i)} />);
    }

    // Gap between left and middle
    if (rowLeftSeats > 0 && rowMiddleSeats > 0) {
      seats.push(<View key='left-gap' style={styles.seatGap} />);
    }

    // Middle seats
    for (let i = 0; i < rowMiddleSeats; i++) {
      seats.push(<Icon key={`middle-${i}`} color={getSeatColor(rowIndex, rowLeftSeats + i)} />);
    }

    // Gap between middle and right
    if (rowMiddleSeats > 0 && rowRightSeats > 0) {
      seats.push(<View key='right-gap' style={styles.seatGap} />);
    }

    // Right side seats
    for (let i = 0; i < rowRightSeats; i++) {
      seats.push(<Icon key={`right-${i}`} color={getSeatColor(rowIndex, rowLeftSeats + rowMiddleSeats + i)} />);
    }

    return seats;
  };

  const getSeatColor = (rowIndex: number, seatIndex: number) => {
    // Sample logic for different seat types based on the screenshot
    if (rowIndex === seatsPerRow.length - 1) {
      return SeatColors.vip; // Last row (VIP)
    }
    if (seatIndex % 7 === 0 || seatIndex % 7 === 1) {
      return SeatColors.notAvailable; // Some seats not available
    }
    return SeatColors.regular; // Regular available seats
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
        {seatsPerRow.map((seatCount, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            <Text style={styles.rowLabel}>{rowIndex + 1}</Text>
            <View style={styles.seatsContainer}>{renderSeatRow(seatCount, rowIndex)}</View>
          </View>
        ))}
      </View>
    </View>
  );
};
