import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WatchStackParamList } from './types';

import { WatchDashboardScreen, WatchSearchScreen } from '~/screens/Watch';

const Stack = createNativeStackNavigator<WatchStackParamList>();
export const WatchStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='WatchDashboardScreen' component={WatchDashboardScreen} />
      <Stack.Screen name='WatchSearchScreen' component={WatchSearchScreen} />
    </Stack.Navigator>
  );
};
