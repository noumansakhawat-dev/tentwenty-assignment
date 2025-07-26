import { FC } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Text } from 'react-native-paper';

import { useTheme } from '~/hooks/useTheme';

type GenreTagProps = {
  title: string;
  color: string;
  style?: StyleProp<ViewStyle>;
};

export const GenreTag: FC<GenreTagProps> = ({ title, color, style }) => {
  const theme = useTheme();

  return (
    <View
      style={[
        {
          backgroundColor: color,
          paddingHorizontal: theme.spacing.xs,
          paddingVertical: theme.spacing.xxxs,
          borderRadius: theme.spacing.s,
          alignSelf: 'flex-start'
        },
        style
      ]}>
      <Text
        variant='labelMedium'
        style={{
          color: theme.colors.white,
          fontWeight: '600'
        }}>
        {title}
      </Text>
    </View>
  );
};
