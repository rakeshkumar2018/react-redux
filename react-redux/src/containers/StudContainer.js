import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/studAction';
import Student from '../components/Stud'

export class StudContainer extends React.Component {

  render() {
    console.log('Student= ', this.props)
    return (
      <Student {...this.props} />
    );
  }
}

StudContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  stud: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  console.log("STATE REDUCERSSS: ", state)
  return {
    stud: state.stud
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
)(StudContainer);
