import {View, Button, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProps} from '../../navigation/types';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store/store';
import {decrement, increment} from '../../redux/features/counter/counterSlice';
import {useGetPokemonByNameQuery} from '../../services/pokemon/pokomen';

const Home = () => {
  const navigation = useNavigation<StackNavigationProps>();
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  const {data} = useGetPokemonByNameQuery('');

  return (
    <View style={styles.container}>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button
        title="Direct To Profile"
        onPress={() => navigation.navigate('ProfileScreen')}
      />
      <Text
        style={{
          textAlign: 'center',
        }}>
        {count}
      </Text>
      <View>
        {data?.results.map((item, i) => (
          <Text key={i}>{item.name}</Text>
        ))}
      </View>
    </View>
  );
};

export default Home;
