import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, MoreMenuScreen} from '../../screens';
import {TabNavigationType} from '../types';

const Tab = createBottomTabNavigator<TabNavigationType>();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="MoreMenuScreen" component={MoreMenuScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
