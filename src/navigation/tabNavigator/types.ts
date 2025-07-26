/**
 * As createMaterialBottomTabNavigator from react-native-paper doesn't support
 * typescript, we need to define the types manually
 * @see https://github.com/callstack/react-native-paper/issues/4572#issuecomment-2558782323
 */
import { MaterialBottomTabNavigationEventMap, MaterialBottomTabNavigationOptions } from 'react-native-paper';
import { MaterialBottomTabNavigatorProps } from 'react-native-paper/lib/typescript/react-navigation/navigators/createMaterialBottomTabNavigator';
import {
  DefaultNavigatorOptions,
  EventMapBase,
  NavigationState,
  ParamListBase,
  RouteConfig,
  RouteGroupConfig,
  TabNavigationState
} from '@react-navigation/native';

type LegacyTypedNavigator<
  ParamList extends ParamListBase,
  State extends NavigationState,
  ScreenOptions extends {},
  EventMap extends EventMapBase,
  Navigator extends React.ComponentType<any>
> = {
  Navigator: React.ComponentType<
    Omit<React.ComponentProps<Navigator>, keyof DefaultNavigatorOptions<any, any, any, any, any, any>> &
      DefaultNavigatorOptions<ParamList, any, State, ScreenOptions, EventMap, any>
  >;
  Group: React.ComponentType<RouteGroupConfig<ParamList, ScreenOptions, any>>;
  Screen: <RouteName extends keyof ParamList>(_: RouteConfig<ParamList, RouteName, State, ScreenOptions, EventMap, any>) => null;
};

export type MaterialBottomTabNavigator<T extends ParamListBase> = LegacyTypedNavigator<
  T,
  TabNavigationState<ParamListBase>,
  MaterialBottomTabNavigationOptions,
  MaterialBottomTabNavigationEventMap,
  (_: MaterialBottomTabNavigatorProps) => React.JSX.Element
>;

/**
 * Types for the TabNavigator
 */
export type TabNavigatorParamList = {
  DashboardScreen: undefined;
  MediaLibraryScreen: undefined;
  MoreScreen: undefined;
  WatchScreen: undefined;
};
