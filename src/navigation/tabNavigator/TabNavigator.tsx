import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabBar } from './BottomTabBar';
import { TabNavigatorParamList } from './types';

import { DashboardScreen, MediaLibraryScreen, MoreScreen, WatchScreen } from '~/screens';

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

export const TabNavigator = ({}) => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />} initialRouteName='DashboardScreen' detachInactiveScreens>
      <Tab.Screen
        name='DashboardScreen'
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Dashboard'
        }}
      />
      <Tab.Screen
        name='WatchScreen'
        component={WatchScreen}
        options={{
          tabBarLabel: 'Watch'
        }}
      />
      <Tab.Screen
        name='MediaLibraryScreen'
        component={MediaLibraryScreen}
        options={{
          tabBarLabel: 'Media Library'
        }}
      />
      <Tab.Screen
        name='MoreScreen'
        component={MoreScreen}
        options={{
          tabBarLabel: 'More'
        }}
      />
    </Tab.Navigator>
  );
};
