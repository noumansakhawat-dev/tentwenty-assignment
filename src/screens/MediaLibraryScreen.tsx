import { FC } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ComingSoon } from '~/components';
import { TabNavigatorParamList } from '~/navigation/tabNavigator';

type MediaLibraryScreenProps = NativeStackScreenProps<TabNavigatorParamList, 'MediaLibraryScreen'>;
export const MediaLibraryScreen: FC<MediaLibraryScreenProps> = ({}) => <ComingSoon />;
