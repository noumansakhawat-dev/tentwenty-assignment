import { FC, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler, PinchGestureHandler } from 'react-native-gesture-handler';
import { IconButton } from 'react-native-paper';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
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
  const [zoomLevel, setZoomLevel] = useState(1);

  // Zoom limits
  const MIN_ZOOM = 1;
  const MAX_ZOOM = 2;
  const ZOOM_STEP = 0.2;

  // Animated values for pan and zoom
  const scale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  // Container dimensions for boundary calculation
  const containerWidth = useSharedValue(0);
  const containerHeight = useSharedValue(0);

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

  const handleZoomIn = () => {
    const newZoom = Math.min(zoomLevel + ZOOM_STEP, MAX_ZOOM);
    setZoomLevel(newZoom);
    scale.value = withSpring(newZoom);
  };

  const handleZoomOut = () => {
    const newZoom = Math.max(zoomLevel - ZOOM_STEP, MIN_ZOOM);
    setZoomLevel(newZoom);
    scale.value = withSpring(newZoom);
  };

  // Animated style for pan and zoom
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }, { translateY: translateY.value }, { scale: scale.value }]
  }));

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: theme.spacing.s,
      paddingTop: theme.spacing.l
    },
    scrollContainer: {
      flex: 1
    },
    gestureContainer: {
      justifyContent: 'center',
      alignItems: 'center'
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
      marginRight: theme.spacing.m
    },
    seatsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center'
    },
    seatGap: {
      width: theme.spacing.m
    },
    zoomButtonsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingTop: theme.spacing.s
    },
    zoomButton: {
      backgroundColor: theme.colors.white,
      shadowColor: theme.colors.black,
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4
    }
  });

  return (
    <View style={styles.container}>
      {/* Cinema Hall with Zoom */}
      <GestureHandlerRootView
        style={styles.scrollContainer}
        onLayout={(event) => {
          const { width, height } = event.nativeEvent.layout;
          containerWidth.value = width;
          containerHeight.value = height + 50;
        }}>
        <PanGestureHandler
          onGestureEvent={(event) => {
            'worklet';
            if (scale.value > 1) {
              // Calculate the boundaries based on scale and container size
              const scaledWidth = containerWidth.value * scale.value;
              const scaledHeight = containerHeight.value * scale.value;

              // Calculate maximum allowed translation to keep content within bounds
              const maxTranslateX = Math.max(0, (scaledWidth - containerWidth.value) / 2);
              const maxTranslateY = Math.max(0, (scaledHeight - containerHeight.value) / 2);

              // Clamp translation values to boundaries
              translateX.value = Math.max(-maxTranslateX, Math.min(maxTranslateX, event.nativeEvent.translationX));
              translateY.value = Math.max(-maxTranslateY, Math.min(maxTranslateY, event.nativeEvent.translationY));
            }
          }}>
          <Animated.View style={styles.gestureContainer}>
            <PinchGestureHandler
              onGestureEvent={(event) => {
                'worklet';
                const newScale = Math.min(Math.max(event.nativeEvent.scale, MIN_ZOOM), MAX_ZOOM);
                scale.value = newScale;
                runOnJS(setZoomLevel)(newScale);
              }}>
              <Animated.View style={[styles.hallContainer, animatedStyle]}>
                {seatRows.map((seatRow, rowIndex) => (
                  <View key={rowIndex} style={styles.row}>
                    <Text style={styles.rowLabel}>{rowIndex + 1}</Text>
                    <View style={styles.seatsContainer}>{renderSeatRow(seatRow, rowIndex)}</View>
                  </View>
                ))}
              </Animated.View>
            </PinchGestureHandler>
          </Animated.View>
        </PanGestureHandler>
      </GestureHandlerRootView>

      {/* Zoom in and out buttons */}
      <View style={styles.zoomButtonsContainer}>
        <IconButton
          icon='plus'
          onPress={handleZoomIn}
          size={24}
          style={[styles.zoomButton, { opacity: zoomLevel >= MAX_ZOOM ? 0.5 : 1 }]}
          disabled={zoomLevel >= MAX_ZOOM}
        />
        <IconButton
          icon='minus'
          onPress={handleZoomOut}
          size={24}
          style={[styles.zoomButton, { opacity: zoomLevel <= MIN_ZOOM ? 0.5 : 1 }]}
          disabled={zoomLevel <= MIN_ZOOM}
        />
      </View>
    </View>
  );
};
