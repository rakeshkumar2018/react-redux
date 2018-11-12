
import * as ActionType from '../constants/actionTypes'

const initialState = {
  testMsg: "",
  stud: [],
  errorMsg: ""
}
export default function testReducer(state = initialState, action) {

  switch (action.type) {

    case ActionType.STUD_SUCCESS:
      return {
        ...state,
        stud: action.payload
      }
    case ActionType.STUD_ERROR:
      return {
        ...state,
        errorMsg: action.payload
      }
    default:
      return state;
  }
}
