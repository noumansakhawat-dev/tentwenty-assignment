import { FC, useEffect } from 'react';
import { Platform, StatusBar } from 'react-native';

type AppStatusBarProps = {
  barStyle?: 'light-content' | 'dark-content';
};

export const AppStatusBar: FC<AppStatusBarProps> = ({ barStyle = 'dark-content' }) => {
  useEffect(() => {
    StatusBar.setBarStyle(barStyle);
    Platform.OS === 'ios' && StatusBar.setNetworkActivityIndicatorVisible(true);
    Platform.OS === 'android' && StatusBar.setTranslucent(true);
    Platform.OS === 'android' && StatusBar.setBackgroundColor('transparent');
  }, [barStyle]);
  return <StatusBar barStyle={barStyle} translucent animated />;
};
