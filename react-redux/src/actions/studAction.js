import * as ActionType from '../constants/actionTypes'
import * as Stud from '../url/url'
import axios from 'axios';

export function getStud() {
  return dispatch => {
    axios.get(stud.STUD_URL)
      .then(function (response) {
        // debugger
        return dispatch({
          type: ActionType.STUD_SUCCESS,
          payload: response.data
        })
      })
      .catch(function (error) {
        debugger
        console.log(error);
        return dispatch({
          type: ActionType.STUD_ERROR,
          payload: "Data not found"
        })
      });
  }
}
