import { Routes } from '@/routes';
import { View } from 'react-native';
import React, { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { SessionProvider } from '@/contexts/SessionContext';
import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts,
  Ubuntu_700Bold,
  Ubuntu_500Medium,
  Ubuntu_400Regular,
} from '@expo-google-fonts/ubuntu';

function App() {
  const [fontsLoaded, fontError] = useFonts({
    Ubuntu_700Bold,
    Ubuntu_500Medium,
    Ubuntu_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <Routes />
      </View>
    </NavigationContainer>
  );
}
export default () => (
  <SessionProvider>
    <App />
  </SessionProvider>
);
