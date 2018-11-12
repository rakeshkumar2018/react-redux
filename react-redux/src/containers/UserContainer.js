import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/userAction'
import UserApi from '../components/UserApi'

export class UserContainer extends React.Component {

  render() {
    console.log("Props: ", this.props)
    return (
      <UserApi  {...this.props} />
    );
  }
}

UserContainer.propTypes = {
  // user: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  console.log("USER REDUCER: ", state)
  return {
    user: state.user
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
)(UserContainer);
