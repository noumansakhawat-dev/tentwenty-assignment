import { StyleSheet } from 'react-native';

import { useTheme } from '~/hooks/useTheme';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
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
    seatButton: {
      padding: 6
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
};
