import { FC, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useWatchScreen } from './hooks/useWatchScreen';

import { AppHeader, MovieCard } from '~/components';
import { useTheme } from '~/hooks/useTheme';
import { TabNavigatorParamList } from '~/navigation/tabNavigator';

type WatchScreenProps = NativeStackScreenProps<TabNavigatorParamList, 'WatchScreen'>;
export const WatchScreen: FC<WatchScreenProps> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const theme = useTheme();
  const { response, isLoading, isMoreLoading, loadMore, isPagesLoaded } = useWatchScreen();

  return (
    <View style={{ flex: 1,backgroundColor: theme.colors.lightGray }}>
      <AppHeader
        title='Watch'
        navigation={navigation as any}
        hideBackButton
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {isLoading && response.data.length === 0 ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator animating={true} color={theme.colors.primary} size={'large'} />
        </View>
      ) : (
        <FlatList
          data={response.data}
          style={{paddingTop: theme.spacing.m}}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          renderItem={({ item }) => (
            <MovieCard
              imageUrl={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
              title={item.title}
              style={{
                marginHorizontal: theme.spacing.m,
                marginBottom: theme.spacing.m
              }}
            />
          )}
          maxToRenderPerBatch={20}
          scrollEventThrottle={16}
          onEndReached={() => {
            if (isMoreLoading || isPagesLoaded) {
              return;
            }
            loadMore();
          }}
          onEndReachedThreshold={0}
          ListFooterComponent={
            isMoreLoading ? (
              <ActivityIndicator
                style={{
                  marginVertical: theme.spacing.m
                }}
                animating={true}
                color={theme.colors.primary}
                size={'large'}
              />
            ) : null
          }
        />
      )}
    </View>
  );
};
