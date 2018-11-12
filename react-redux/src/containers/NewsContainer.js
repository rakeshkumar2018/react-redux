import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as actions from '../actions/studAction';
import * as actions from '../actions/newsAction';
import News from '../components/News';
// import Student from '../components/Stud'

export class NewsContainer extends React.Component {

  render() {
    console.log('news= ', this.props)
    return (
      <News {...this.props} />
    );
  }
}

NewsContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  news: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  console.log("News REDUCERSSS: ", state)
  return {
    news: state.news
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
)(NewsContainer);
