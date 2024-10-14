import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NotificationScreen} from '../../../screens';

const Stack = createNativeStackNavigator();

const NotificationNavigator = () => {
  return (
    <Stack.Group>
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
    </Stack.Group>
  );
};

export default NotificationNavigator;
