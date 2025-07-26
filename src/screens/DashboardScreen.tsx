import { FC } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ComingSoon } from '~/components';
import { TabNavigatorParamList } from '~/navigation/tabNavigator';

type DashboardScreenProps = NativeStackScreenProps<TabNavigatorParamList, 'DashboardScreen'>;
export const DashboardScreen: FC<DashboardScreenProps> = ({}) => <ComingSoon />;
