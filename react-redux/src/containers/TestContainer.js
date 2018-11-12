import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/testAction';
import Test from '../components/Test';

export class TestContainer extends React.Component {

  render() {
    console.log("Props: ", this.props)
    return (
      <Test name={"name"} {...this.props} />
    );
  }
}

TestContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  test: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  console.log("STATE RED: ", state)
  return {
    test: state.test
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestContainer);
