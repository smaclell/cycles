/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Provider } from 'react-redux'
import configureStore from './src/configureStore';
import Main from './src/containers/Main';

const store = configureStore();
class cycles extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('cycles', () => cycles);
