import { FC } from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import dayjs from 'dayjs';
import { useStyles } from './WatchReserveSeatScreen.styles';

import { AppHeader } from '~/components';
import { WatchStackParamList } from '~/navigation/stack';

type WatchReserveSeatScreenProps = NativeStackScreenProps<WatchStackParamList, 'WatchReserveSeatScreen'>;
export const WatchReserveSeatScreen: FC<WatchReserveSeatScreenProps> = ({ navigation, route }) => {
  const { movieTitle, date, time, cinema } = route.params;
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <AppHeader
        variant='center'
        navigation={navigation as any}
        title={movieTitle}
        description={`${dayjs(date).format('MMM D, YYYY')} ${time} | ${cinema}`}
      />
    </View>
  );
};
