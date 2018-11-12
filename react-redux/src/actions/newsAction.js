import axios from 'axios';
import * as  ActionType from '../constants/actionTypes';
import * as News from '../url/url'

export function getHeadlines() {
  return dispatch => {
    axios.get(News.NEWS_URL)
      .then(function (response) {
        // debugger
        return dispatch({
          type: ActionType.NEWS_SUCCESS,
          payload: response.data.articles,

        })
        // debugger
        console.log("Response data= ", response.data)

      })
      .catch(function (error) {
        debugger
        console.log(error);
        return dispatch({
          type: ActionType.NEWS_ERRO,
          payload: "Data not found"
        })
      });
  }
}
