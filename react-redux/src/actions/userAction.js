import axios from 'axios';
import * as ActionType from '../constants/actionTypes';
import User from '../url/url'

export function getUser() {
  return dispatch => {
    axios.get(User.USER_URL)
      .then(function (response) {
        // debugger
        return dispatch({
          type: ActionType.USER_SUCCESS,
          payload: response.data
        })
      })
      .catch(function (error) {
        debugger
        console.log(error);
        return dispatch({
          type: ActionType.USER_ERROR,
          payload: "Data not found"
        })
      });
  }
}