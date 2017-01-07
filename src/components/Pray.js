import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
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
    flex: 0,
    color: 'snow',
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#111111',
    fontSize: 32,
  },
  background: {
    flex: 1
  },
  prayerContainer: {
    flex: 0,
    backgroundColor: '#111111',
    marginVertical: 20,
    marginHorizontal: 80,
  },
  prayerText: {
    color: 'snow',
    textAlign: 'center',
    padding: 5,
    fontSize: 20,
  },
});

const Pray = ({id, title, background: {url, width, height}}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Image source={{uri: url}} style={{flex:1, width, height}}>
      <View style={{flex: 1}} />
      <TouchableOpacity activeOpacity={0.6} style={styles.prayerContainer}>
          <Text style={styles.prayerText}>Pray</Text>
      </TouchableOpacity>
    </Image>
  </View>
);

Pray.propTypes = {
  id: React.PropTypes.number.isRequired,
  title: React.PropTypes.string.isRequired,
  background: React.PropTypes.object.isRequired,
};

export default Pray;
