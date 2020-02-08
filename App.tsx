import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Fonts from 'expo-font';
import { Login } from 'screens/login';
import { Dashboard } from 'screens/dashboard';
import { AppNavigationParamList } from 'paramLists';
import { virginFetch } from 'helpers';

const AppNavigation = createStackNavigator<AppNavigationParamList>();

export default function App(): JSX.Element {
  const [authToken, setAuthToken] = useState<string | undefined>();
  const [fontsReady, setFontsReady] = useState(false)

  useEffect(() => {
    (async (): Promise<void> => {
      await Fonts.loadAsync({
        InterRegular: require('./assets/fonts/Inter-Regular.otf'),
        InterBold: require('./assets/fonts/Inter-Bold.otf'),
        InterSemiBold: require('./assets/fonts/Inter-SemiBold.otf'),
      });
      setFontsReady(true);
    })();
  }, []);

  const login = async (username: string, password: string): Promise<void> => {
    const resp: { access_token: string } = await virginFetch(
      'https://hal.virginactive.com.au/token',
      'POST',
      `username=${username}&password=${password}&grant_type=password`,
    );
    setAuthToken(resp?.access_token);
  };

  return fontsReady && (
    <NavigationContainer>
      <AppNavigation.Navigator headerMode="none">
        {!authToken ? (
          <AppNavigation.Screen
            initialParams={{ login }}
            component={Login}
            name="Login"
          />
        ) : (
          <AppNavigation.Screen component={Dashboard} name="Dashboard" />
        )}
      </AppNavigation.Navigator>
    </NavigationContainer>
  );
}
