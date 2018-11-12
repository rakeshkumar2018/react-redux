import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/weatherAction';
// import Test from '../components/Test';
import Weather from '../components/CityWeather'

export class WeatherContainer extends React.Component {

  render() {
    console.log(" weather Props: ", this.props)
    return (
      <Weather  {...this.props} />
    );
  }
}

WeatherContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  weather: PropTypes.object.isRequired
};
//data comes from reducer
function mapStateToProps(state) {
  console.log("Weather REDUCER: ", state)
  return {
    weather: state.weather
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
)(WeatherContainer);

// WeatherrContainer 