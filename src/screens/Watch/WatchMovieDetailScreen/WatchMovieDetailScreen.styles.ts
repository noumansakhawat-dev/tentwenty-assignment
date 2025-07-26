import { StyleSheet } from 'react-native';

import { useTheme } from '~/hooks/useTheme';

export const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    container: {
      flex: 1
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    imageContainer: {
      padding: theme.spacing.l
    },
    movieTitle: {
      color: theme.colors.white,
      textAlign: 'center',
      marginBottom: theme.spacing.xxs
    },
    releaseDate: {
      color: theme.colors.white,
      textAlign: 'center',
      marginBottom: theme.spacing.xxs
    },
    buttonsContainer: {
      gap: theme.spacing.xs,
      marginHorizontal: theme.spacing.l
    },
    getTicketsButton: {
      borderRadius: theme.spacing.xs,
      backgroundColor: theme.colors.skyBlue
    },
    watchTrailerButton: {
      borderRadius: theme.spacing.xs,
      borderColor: theme.colors.skyBlue,
      borderWidth: 1
    },
    buttonText: {
      color: theme.colors.white,
      fontSize: 14,
      fontWeight: '600'
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      padding: theme.spacing.l
    },
    genresSection: {
      marginBottom: theme.spacing.m
    },
    genresTitle: {
      color: theme.colors.darkBlueGray,
      marginRight: theme.spacing.xs,
      marginBottom: theme.spacing.xxs
    },
    genresList: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: theme.spacing.xxxs
    },
    overviewSection: {
      marginBottom: theme.spacing.l
    },
    overviewTitle: {
      color: theme.colors.darkBlueGray,
      marginBottom: theme.spacing.xs
    },
    overviewText: {
      color: theme.colors.gray
    }
  });
};
