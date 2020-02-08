import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppNavigation = createStackNavigator();

import { Login } from './screens/login';

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <AppNavigation.Navigator>
        <AppNavigation.Screen component={Login} name="Login" />
      </AppNavigation.Navigator>
    </NavigationContainer>
  );
}
