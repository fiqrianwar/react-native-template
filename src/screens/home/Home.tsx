import {View, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProps} from '../../navigation/types';
import styles from './styles';

const Home = () => {
  const navigation = useNavigation<StackNavigationProps>();

  return (
    <View style={styles.container}>
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
