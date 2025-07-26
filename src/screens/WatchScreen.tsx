import { FC } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ComingSoon } from '~/components';
import { TabNavigatorParamList } from '~/navigation/tabNavigator';

type WatchScreenProps = NativeStackScreenProps<TabNavigatorParamList, 'WatchScreen'>;
export const WatchScreen: FC<WatchScreenProps> = ({}) => <ComingSoon />;
