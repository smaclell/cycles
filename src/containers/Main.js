import React from 'react';
import {connect} from 'react-redux';
import {
  Navigator,
  BackAndroid
} from 'react-native';
import App from './App'
import Pray from './Pray'

let backNavigator;
BackAndroid.addEventListener('hardwareBackPress', () => {
    if (backNavigator && backNavigator.getCurrentRoutes().length > 1) {
        backNavigator.pop();
        return true;
    }
    return false;
});

const Container = () => (
  <Navigator
    ref={(nav) => { backNavigator = nav; }}
    initialRoute={{ title: 'Cycles' }}
    renderScene={(route, navigator) =>
      !!route.topicId ?
        <Pray topicId={route.topicId} onClickBack={() => navigator.pop()} /> :
        <App onTopicPress={topicId => navigator.push({topicId})} />
    }
  />
);

export default Container;
