import axios from 'axios';
import * as ActionType from '../constants/actionTypes';
// import Weather from '../url/url';
import * as weather from '../url/url';

export function getData() {
  return dispatch => {
    axios.get(weather.WEATHER_URL)
      .then(function (response) {
        // debugger
        return dispatch({
          type: ActionType.WEATHER_SUCCESS,
          payload: response.data
        })
      })
      .catch(function (error) {
        //debugger
        console.log(error);
        return dispatch({
          type: ActionType.WEATHER_ERROR,
          payload: "Data not found"
        })
      });
  }
}
