import {View, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProps} from '../../navigation/types';

const Home = () => {
  const navigation = useNavigation<StackNavigationProps>();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Button
        title="Direct To Profile"
        onPress={() =>
          navigation.navigate('MainStackNavigator', {
            screen: 'ProfileScreen',
          })
        }
      />
    </View>
  );
};

export default Home;
