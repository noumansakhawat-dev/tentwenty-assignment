import { FC, useState } from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppHeader, MovieCard } from '~/components';
import { TabNavigatorParamList } from '~/navigation/tabNavigator';

type WatchScreenProps = NativeStackScreenProps<TabNavigatorParamList, 'WatchScreen'>;
export const WatchScreen: FC<WatchScreenProps> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <AppHeader
        title='Watch'
        navigation={navigation as any}
        hideBackButton
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <MovieCard imageUrl='https://picsum.photos/800' title='Free Guy' />
    </View>
  );
};
