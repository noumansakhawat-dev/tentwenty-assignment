import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { IconDashboard, IconMediaLibrary, IconMore, IconWatch } from '@tentwenty-tech/icons';

import { useTheme } from '~/hooks/useTheme';

export const BottomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.lightGray }]}>
      <View style={[styles.tabContainer, { backgroundColor: theme.colors.primary }]}>
        {state.routes.map((route, index) => {
          console.log('Route:', route);
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel ?? options.title ?? route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key
            });
          };

          const iconColor = isFocused ? theme.colors.white : theme.colors.mutedLavender;

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole='button'
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tab}
              activeOpacity={0.7}>
              <View style={[styles.tabContent]}>
                {route.name === 'DashboardScreen' && <IconDashboard color={iconColor} size='sss' />}
                {route.name === 'MediaLibraryScreen' && <IconMediaLibrary color={iconColor} size='sss' />}
                {route.name === 'MoreScreen' && <IconMore color={iconColor} size='sss' />}
                {route.name === 'WatchScreen' && <IconWatch color={iconColor} size='sss' />}
                <Text style={[styles.label, { color: iconColor }]} variant='bodySmall'>
                  {typeof label === 'string' ? label : 'Tab'}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 8
  },
  tabContainer: {
    flexDirection: 'row',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4
  },
  tab: {
    flex: 1
  },
  tabContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 16,
    minHeight: 56
  },
  label: {
    fontSize: 11,
    marginTop: 4,
    textAlign: 'center'
  }
});
