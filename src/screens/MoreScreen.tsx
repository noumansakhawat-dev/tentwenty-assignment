import { FC } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ComingSoon } from '~/components';
import { TabNavigatorParamList } from '~/navigation/tabNavigator';

type MoreScreenProps = NativeStackScreenProps<TabNavigatorParamList, 'MoreScreen'>;
export const MoreScreen: FC<MoreScreenProps> = ({}) => <ComingSoon />;
