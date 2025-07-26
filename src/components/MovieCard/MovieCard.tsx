import { FC } from 'react';
import { ImageBackground, StyleProp, useWindowDimensions, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Text } from 'react-native-paper';

import { useTheme } from '@tentwenty-tech/theme';

type MovieCardProps = {
  style?: StyleProp<ViewStyle>;
  imageUrl: string;
  title: string;
};

export const MovieCard: FC<MovieCardProps> = ({ style, imageUrl, title }) => {
  const { height } = useWindowDimensions();
  const theme = useTheme();
  return (
    <ImageBackground
      source={{ uri: imageUrl }}
      style={[{ width: '100%', height: height * 0.2, borderRadius: theme.spacing.xs }, style]}
      borderRadius={theme.spacing.xs}>
      {/* Gradient shadow overlay at the bottom */}
      <LinearGradient
        colors={['transparent', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.6)']}
        locations={[0, 0.4, 0.7, 0.8, 1]}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '50%',
          borderBottomLeftRadius: theme.spacing.xs,
          borderBottomRightRadius: theme.spacing.xs
        }}
      />
      <Text
        style={{
          color: theme.colors.white,
          paddingHorizontal: theme.spacing.m,
          paddingVertical: theme.spacing.s,
          position: 'absolute',
          bottom: 0
        }}
        variant='titleMedium'>
        {title}
      </Text>
    </ImageBackground>
  );
};
