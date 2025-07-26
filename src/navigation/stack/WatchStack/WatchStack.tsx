import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WatchStackParamList } from './types';

import { AppHeader } from '~/components';
import { VideoPlayerScreen, WatchDashboardScreen, WatchMovieDetailScreen, WatchSearchScreen } from '~/screens/Watch';

const Stack = createNativeStackNavigator<WatchStackParamList>();
export const WatchStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='WatchDashboardScreen' component={WatchDashboardScreen} />
      <Stack.Screen name='WatchSearchScreen' component={WatchSearchScreen} />
      <Stack.Screen
        name='WatchMovieDetailScreen'
        component={WatchMovieDetailScreen}
        options={{
          headerShown: false,
          header: ({ navigation }) => <AppHeader title='Watch' hideSearchButton navigation={navigation as any} />
        }}
      />
      <Stack.Screen
        name='VideoPlayerScreen'
        component={VideoPlayerScreen}
        options={{
          headerShown: false,
          presentation: 'fullScreenModal',
          gestureEnabled: false
        }}
      />
    </Stack.Navigator>
  );
};
