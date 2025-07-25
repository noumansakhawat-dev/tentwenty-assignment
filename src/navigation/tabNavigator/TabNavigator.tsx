import { useTheme } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialBottomTabNavigator, TabNavigatorParamList } from './types';
import { TestScreen } from '~/screens';

const Tab: MaterialBottomTabNavigator<TabNavigatorParamList> = createMaterialBottomTabNavigator();

export const TabNavigator = ({}) => {
  const theme = useTheme();
  return (
    <Tab.Navigator lazy activeColor={theme.colors.primary} inactiveColor={theme.colors.inversePrimary}>
      <Tab.Screen
        name='TestScreen'
        component={TestScreen}
        options={{
          tabBarLabel: 'Test',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name='alpha-t' color={color} size={26} />
        }}
      />
    </Tab.Navigator>
  );
};
