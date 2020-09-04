/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Route from './src/route';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './redux';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={'#009666'} />
        <Route />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
