import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainTabNavigator from './MainTabNavigator/MainTabNavigator';
import {RootNavigationType} from './types';
import MainStackNavigator from './MainStackNavigator/MainStackNavigator';

const ApplicationNavigator = () => {
  const Root = createNativeStackNavigator<RootNavigationType>();

  return (
    <NavigationContainer>
      <Root.Navigator
        initialRouteName="MainTabNavigator"
        screenOptions={{
          headerShown: false,
        }}>
        <Root.Screen name="MainTabNavigator" component={MainTabNavigator} />
        <Root.Screen name="MainStackNavigator" component={MainStackNavigator} />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
