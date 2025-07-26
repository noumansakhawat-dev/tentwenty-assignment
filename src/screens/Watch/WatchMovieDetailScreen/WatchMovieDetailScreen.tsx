import { FC } from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { WatchStackParamList } from '~/navigation/stack';

type WatchMovieDetailScreenProps = NativeStackScreenProps<WatchStackParamList, 'WatchMovieDetailScreen'>;
export const WatchMovieDetailScreen: FC<WatchMovieDetailScreenProps> = ({}) => {
  return <View />;
};
