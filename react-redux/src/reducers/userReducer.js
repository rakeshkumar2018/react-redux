import * as ActionType from '../constants/actionTypes'

const initialState = {
  testMsg: "",
  users: [],
  errorMsg: ""
}
export default function userReducer(state = initialState, action) {

  switch (action.type) {

    case ActionType.USER_SUCCESS:
      return {
        ...state,
        users: action.payload
      }
    case ActionType.USER_ERROR:
      return {
        ...state,
        errorMsg: action.payload
      }
    default:
      return state;
  }
}