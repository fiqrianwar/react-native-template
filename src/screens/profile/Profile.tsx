import {View, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TabNavigationProps} from '../../navigation/types';
import styles from './styles';

const Profile = () => {
  const navigation = useNavigation<TabNavigationProps>();

  return (
    <View style={styles.container}>
      <Button
        title="Direct To More Menu"
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
