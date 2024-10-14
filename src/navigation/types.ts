import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type StackNavigationProps =
  NativeStackNavigationProp<StackNavigationType>;

export type TabNavigationProps = BottomTabNavigationProp<
  RootNavigationType,
  'MainTabNavigator'
>;

export type RootNavigationType = {
  MainTabNavigator: NavigatorScreenParams<TabNavigationType>;
};

export type TabNavigationType = {
  HomeScreen: undefined;
  MoreMenuScreen: undefined;
};

export type StackNavigationType = {
  ProfileScreen: undefined;
  NotificationScreen: undefined;
};
