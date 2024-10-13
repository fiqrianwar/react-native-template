import {View, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TabNavigationProps} from '../../navigation/types';

const Profile = () => {
  const navigation = useNavigation<TabNavigationProps>();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Button
        title="Direct To Home"
        onPress={() =>
          navigation.navigate('MainTabNavigator', {
            screen: 'MoreMenuScreen',
          })
        }
      />
    </View>
  );
};

export default Profile;
