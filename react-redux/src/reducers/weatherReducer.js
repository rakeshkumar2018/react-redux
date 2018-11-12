import * as ActionType from '../constants/actionTypes'


const initialState = {
  testMsg: "",
  weather: {},
  errorMsg: ""
}
export default function weatherReducer(state = initialState, action) {

  switch (action.type) {

    case ActionType.WEATHER_SUCCESS:
      return {
        ...state,
        weather: action.payload
      }
    case ActionType.WEATHER_ERROR:
      return {
        ...state,
        errorMsg: action.payload
      }
    default:
      return state;
  }
}
