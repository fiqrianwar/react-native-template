import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type StackNavigationProps = NativeStackNavigationProp<
  RootNavigationType,
  'MainStackNavigator'
>;

export type TabNavigationProps = BottomTabNavigationProp<
  RootNavigationType,
  'MainTabNavigator'
>;

export type RootNavigationType = {
  MainTabNavigator: NavigatorScreenParams<TabNavigationType>;
  MainStackNavigator: NavigatorScreenParams<StackNavigationType>;
};

export type TabNavigationType = {
  HomeScreen: undefined;
  MoreMenuScreen: undefined;
};

export type StackNavigationType = {
  ProfileScreen: undefined;
};
