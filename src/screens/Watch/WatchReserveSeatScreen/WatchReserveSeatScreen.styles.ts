import { StyleSheet } from 'react-native';

import { useTheme } from '~/hooks/useTheme';

export const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.lightGray
    },
    bottomSection: {
      flex: 1,
      backgroundColor: theme.colors.white,
      paddingHorizontal: theme.spacing.s,
      paddingTop: theme.spacing.m
    },
    legendContainer: {
      marginBottom: theme.spacing.m
    },
    legendRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: theme.spacing.xs
    },
    legendItem: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1
    },
    legendIndicator: {
      width: 12,
      height: 12,
      borderRadius: 2,
      marginRight: theme.spacing.xxs
    },
    legendText: {
      fontSize: 14,
      color: theme.colors.mutedLavender,
      fontFamily: 'Poppins-Regular'
    },
    chipContainer: {
      marginBottom: theme.spacing.m
    },
    chipContainerContent: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: theme.spacing.xxs,
      alignItems: 'flex-start'
    },
    seatChip: {
      backgroundColor: theme.colors.lightGray1,
      borderRadius: 8
    },
    chipText: {
      fontSize: 12,
      color: theme.colors.black,
      fontFamily: 'Poppins-Medium'
    },
    paymentContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: theme.spacing.s,
      paddingBottom: theme.spacing.m,
      alignSelf: 'flex-end'
    },
    totalPriceContainer: {
      flex: 1
    },
    totalPriceLabel: {
      fontSize: 14,
      color: theme.colors.mutedLavender,
      fontFamily: 'Poppins-Regular',
      marginBottom: 4
    },
    totalPriceValue: {
      fontSize: 24,
      color: theme.colors.black,
      fontFamily: 'Poppins-SemiBold'
    },
    proceedButton: {
      backgroundColor: theme.colors.skyBlue,
      paddingHorizontal: theme.spacing.m,
      paddingVertical: theme.spacing.xs,
      borderRadius: 8,
      minWidth: 160
    },
    proceedButtonText: {
      fontSize: 16,
      color: theme.colors.white,
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'center'
    }
  });
};
