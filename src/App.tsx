import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { MD3LightTheme, PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DefaultTheme } from '@react-navigation/native';
import { TabNavigator } from './navigation/tabNavigator';
import { NavigationContainer } from './navigation';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent'
  }
};

const paperTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#0297A2',
    secondary: 'rgba(2, 151, 162, 0.7)'
  }
};

export const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepare = () => {
      setAppIsReady(true);
    };

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout
      setTimeout(async () => {
        // Hide splash screen logic here,
      }, 1000);
    }
  }, [appIsReady]);

  return (
    <PaperProvider theme={paperTheme}>
      <View style={{ flex: 1, backgroundColor: '#fff' }} onLayout={onLayoutRootView}>
        <SafeAreaProvider>
          <NavigationContainer theme={navTheme}>
            <TabNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </View>
    </PaperProvider>
  );
};
