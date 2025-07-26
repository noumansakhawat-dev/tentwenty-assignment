import { StyleSheet } from 'react-native';

import { useTheme } from '~/hooks/useTheme';

export const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.lightGray
    }
  });
};
