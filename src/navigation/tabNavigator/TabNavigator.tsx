import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabBar } from './BottomTabBar';
import { TabNavigatorParamList } from './types';

import { AppHeader } from '~/components';
import { DashboardScreen, MediaLibraryScreen, MoreScreen, WatchScreen } from '~/screens';

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

export const TabNavigator = ({}) => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />} initialRouteName='WatchScreen' detachInactiveScreens>
      <Tab.Screen
        name='DashboardScreen'
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Dashboard',
          header: ({ navigation }) => <AppHeader title='Dashboard' navigation={navigation} hideBackButton hideSearchButton />
        }}
      />
      <Tab.Screen
        name='WatchScreen'
        component={WatchScreen}
        options={{
          tabBarLabel: 'Watch',
          headerShown: false,
          header: ({ navigation }) => <AppHeader title='Watch' navigation={navigation} hideBackButton />
        }}
      />
      <Tab.Screen
        name='MediaLibraryScreen'
        component={MediaLibraryScreen}
        options={{
          tabBarLabel: 'Media Library',
          header: ({ navigation }) => <AppHeader title='Media Library' navigation={navigation} hideBackButton hideSearchButton />
        }}
      />
      <Tab.Screen
        name='MoreScreen'
        component={MoreScreen}
        options={{
          tabBarLabel: 'More',
          header: ({ navigation }) => <AppHeader title='More' navigation={navigation} hideBackButton hideSearchButton />
        }}
      />
    </Tab.Navigator>
  );
};
