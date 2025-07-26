import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import BootSplash from 'react-native-bootsplash';
import FlashMessage from 'react-native-flash-message';
import { configureFonts, MD3LightTheme, PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DefaultTheme } from '@react-navigation/native';
import { PaperFontConfig } from './config/fonts';
import { TabNavigator } from './navigation/tabNavigator';
import { NavigationContainer } from './navigation';

import { useTheme } from '@tentwenty-tech/theme';

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
    ...MD3LightTheme.colors
  },
  fonts: configureFonts({ config: PaperFontConfig, isV3: true })
};

export const App = () => {
  const theme = useTheme();
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
        await BootSplash.hide({ fade: true });
      }, 1000);
    }
  }, [appIsReady]);

  return (
    <PaperProvider theme={{ ...paperTheme, colors: { ...paperTheme.colors, primary: theme.colors.primary } }}>
      <View style={{ flex: 1, backgroundColor: '#fff' }} onLayout={onLayoutRootView}>
        <SafeAreaProvider>
          <NavigationContainer theme={navTheme}>
            <TabNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </View>
      <FlashMessage position='top' />
    </PaperProvider>
  );
};
