import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111111',
  },
  title: {
    color: 'snow',
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#11111144',
  }
});

const Topic = ({onPress, id, title, background: {url, width, height}}) => (
  <TouchableHighlight style={styles.container} onPress={onPress}>
    <View>
      <Image source={{uri: url}} style={{width, height}} />
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableHighlight>
);

Topic.propTypes = {
  id: React.PropTypes.number.isRequired,
  title: React.PropTypes.string.isRequired,
  background: React.PropTypes.object.isRequired,
  onPress: React.PropTypes.func.isRequired,
};

export default Topic;
