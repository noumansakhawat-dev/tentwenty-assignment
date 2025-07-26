import { StyleSheet, useWindowDimensions } from 'react-native';

import { useTheme } from '~/hooks/useTheme';

export const useStyles = () => {
  const theme = useTheme();
  const { width } = useWindowDimensions();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.lightGray
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    dateSectionContainer: {},
    sectionTitle: {
      color: theme.colors.black,
      paddingHorizontal: theme.spacing.s
    },
    dateScrollView: {
      flexGrow: 0
    },
    dateContainer: {
      flexGrow: 0,
      paddingHorizontal: theme.spacing.s
    },
    dateCard: {
      backgroundColor: theme.colors.white,
      borderRadius: 10,
      paddingVertical: 8,
      paddingHorizontal: 16,
      marginRight: 8,
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 70
    },
    selectedDateCard: {
      backgroundColor: theme.colors.skyBlue
    },
    dateText: {
      fontSize: 14,
      fontWeight: '500',
      color: theme.colors.black
    },
    selectedDateText: {
      color: theme.colors.white
    },
    showtimesContainer: {
      flexGrow: 0,
      marginTop: theme.spacing.l,
      paddingHorizontal: theme.spacing.s
    },
    showtimesContainerContent: {
      flexGrow: 0,
      paddingRight: theme.spacing.s
    },
    showtimeItemContainer: {
      marginRight: theme.spacing.s
    },
    showtimeCinemaHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.xxxs
    },
    showtimeTime: {
      color: theme.colors.black
    },
    showtimeCinema: {
      marginLeft: theme.spacing.xxs
    },
    seatCardContainer: {
      backgroundColor: theme.colors.white,
      borderRadius: theme.spacing.xs,
      marginBottom: theme.spacing.xxxs,
      padding: theme.spacing.s,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      width: width * 0.7 - theme.spacing.s
    },
    selectedSeatCardContainer: {
      backgroundColor: theme.colors.lightGray,
      borderWidth: 2,
      borderColor: theme.colors.skyBlue
    },
    seatGrid: {
      alignItems: 'center',
      marginVertical: theme.spacing.xs
    },
    seatRow: {
      flexDirection: 'row',
      marginBottom: theme.spacing.xxxs
    },
    seat: {
      width: theme.spacing.xxxs,
      height: theme.spacing.xxxs,
      borderRadius: 3,
      marginHorizontal: 1,
      backgroundColor: theme.colors.skyBlue
    },
    occupiedSeat: {
      backgroundColor: theme.colors.mutedLavender
    },
    selectedSeat: {
      backgroundColor: theme.colors.teal
    },
    showtimeFooter: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    priceText: {
      color: theme.colors.mutedLavender
    },
    priceTextValue: {
      color: theme.colors.black,
      fontWeight: 'bold',
      marginHorizontal: theme.spacing.xxxs,
      marginTop: 2
    },
    bottomContainer: {
      padding: 16,
      backgroundColor: theme.colors.white
    },
    selectSeatsButton: {
      borderRadius: 10,
      paddingVertical: 6,
      backgroundColor: theme.colors.skyBlue
    },
    selectSeatsButtonDisabled: {
      backgroundColor: theme.colors.gray
    },
    buttonText: {
      fontSize: 16,
      fontWeight: '600',
      color: theme.colors.white
    }
  });
};
