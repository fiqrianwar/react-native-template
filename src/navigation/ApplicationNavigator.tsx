import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainTabNavigator from './TabNavigator/MainTabNavigator';
import {RootNavigationType} from './types';
import {NotificationNavigator, ProfileNavigator} from './StackNavigator';

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
        {NotificationNavigator()}
        {ProfileNavigator()}
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
