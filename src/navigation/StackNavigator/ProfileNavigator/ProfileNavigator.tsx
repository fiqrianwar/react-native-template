import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileScreen} from '../../../screens';

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Group>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Group>
  );
};

export default ProfileNavigator;
