import React, { Component } from 'react';
import {connect} from 'react-redux';
import Pray from '../components/Pray'

const Container = props => (
  <Pray {...props} />
);

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.topicId,
  ...state.topics[ownProps.topicId],
});

export default connect(mapStateToProps)(Container);
