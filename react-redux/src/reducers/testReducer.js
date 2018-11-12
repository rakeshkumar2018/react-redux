import * as ActionType from '../constants/actionTypes'


const initialState = {
  testValue: "lorem",
  testMsg: "",
  stations: [],
  errorMsg: ""
}
export default function testReducer(state = initialState, action) {

  switch (action.type) {
    case "TEST":
      return {
        ...state,
        testMsg: action.testMsg
      }
    case ActionType.TEST_SUCCESS:
      return {
        ...state,
        stations: action.payload
      }
    case ActionType.TEST_ERROR:
      return {
        ...state,
        errorMsg: action.payload
      }
    default:
      return state;
  }
}
