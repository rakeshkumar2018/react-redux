
import * as ActionType from '../constants/actionTypes'
import axios from "axios";
import * as Test from '../url/url'


export function getTest() {
  console.log("HElllo test")
  // return function (dispatch) {
  return dispatch => {
    return dispatch({
      type: "TEST",
      testMsg: "This is test msg"
    });
  };

}

export function getUser() {
  return dispatch => {
    axios.get(Test.TEST_URL)
      .then(function (response) {
        // debugger
        return dispatch({
          type: ActionType.TEST_SUCCESS,
          payload: response.data.network.stations
        })
      })
      .catch(function (error) {
        debugger
        console.log(error);
        return dispatch({
          type: ActionType.TEST_ERROR,
          payload: "Data not found"
        })
      });
  }
}

