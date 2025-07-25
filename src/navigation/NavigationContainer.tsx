import React, { useRef } from 'react';
import {
  createNavigationContainerRef,
  DocumentTitleOptions,
  NavigationContainer as NavigationContainerBase,
  NavigationContainerProps,
  Theme
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef<any>();

type ContainerProps = NavigationContainerProps & {
  theme?: Theme;
  fallback?: React.ReactNode;
  documentTitle?: DocumentTitleOptions;
  onReady?: () => void;
};

type Props = React.PropsWithChildren<{}> & ContainerProps;

export const NavigationContainer: React.FC<Props> = ({ children, ...props }) => {
  const routeNameRef = useRef<string>('');

  return (
    <NavigationContainerBase
      ref={navigationRef}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef?.getCurrentRoute()?.name;

        if (previousRouteName !== currentRouteName) {
          console.info('current route:', currentRouteName);
        }

        // Save the current route name for later comparison
        routeNameRef.current = currentRouteName ?? '';
      }}
      {...props}>
      {children}
    </NavigationContainerBase>
  );
};
