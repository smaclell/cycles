import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import Topic from './Topic';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111111',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ddd',
    flex: 0,
  },
  topics: {
    flex: 1,
  },
});

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Cycles!
        </Text>
        <ScrollView style={styles.topics}>
          {this.props.topics.map(t => <Topic key={t.id} {...t} />)}
        </ScrollView>
      </View>
    );
  }
}

App.propTypes = {
  topics: React.PropTypes.array.isRequired,
};

export default App;
