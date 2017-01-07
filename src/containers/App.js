import React, { Component } from 'react';
import {connect} from 'react-redux';
import App from '../components/App'

const Container = props => (
  <App {...props} />
);

const mapStateToProps = state => {
  return {
    topics: state.lists.default.map(id => ({
      id,
      ...state.topics[id]
    })),
  };
};

export default connect(mapStateToProps)(Container);
