import React from 'react';
import {StackNavigationType} from '../types';
import {ProfileScreen} from '../../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<StackNavigationType>();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
