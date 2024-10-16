/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-devsettings';
import ApplicationNavigator from './navigation/ApplicationNavigator';
import {Provider} from 'react-redux';
import {store} from './redux/store/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <ApplicationNavigator />
    </Provider>
  );
}

export default App;
