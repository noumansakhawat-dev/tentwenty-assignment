import { FC, ReactNode } from 'react';
import { ImageBackground, StyleProp, useWindowDimensions, View, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type MovieDetailBackgroundImageProps = {
  imageUrl: string;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  header?: ReactNode;
};

export const MovieDetailBackgroundImage: FC<MovieDetailBackgroundImageProps> = ({
  imageUrl,
  children,
  style,
  contentContainerStyle,
  header
}) => {
  const { height } = useWindowDimensions();
  const inset = useSafeAreaInsets();
  return (
    <ImageBackground
      source={{ uri: imageUrl }}
      style={[{ flex: 1, width: '100%', height: height * 0.4 }, style]}
      resizeMode='cover'>
      {/* Gradient overlay at the bottom */}
      <LinearGradient
        colors={['transparent', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0.9)']}
        locations={[0, 0.3, 0.6, 0.8, 1]}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '90%'
        }}
      />
      <View style={{ paddingTop: inset.top }}>{header}</View>
      <View
        style={[
          {
            flex: 1,
            justifyContent: 'flex-end'
          },
          contentContainerStyle
        ]}>
        {children}
      </View>
    </ImageBackground>
  );
};
