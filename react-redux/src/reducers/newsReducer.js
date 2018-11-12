
import * as ActionType from '../constants/actionTypes'
const initialState = {
  testMsg: "",
  articles: [],
  errorMsg: "",
  isLoad: false
}
export default function newsReducer(state = initialState, action) {

  switch (action.type) {

    case ActionType.NEWS_SUCCESS:
      return {
        ...state,
        articles: action.payload,
        isLoad: true

      }
    case ActionType.NEWS_ERROR:
      return {
        ...state,
        errorMsg: action.payload
      }
    default:
      return state;
  }
}
