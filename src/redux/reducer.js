import { combineReducers } from "redux";
export function DataReducer(state = {}, action) {
  switch (action.type) {
    case "GET_HOME_DATA":
      return {
        ...state,
        homeData: action.payload,
        temp: action.payload
      };
    case "FILTER_DATA":
      const data = action.payload ? {
        ...state.homeData, bredds: state.temp.bredds.filter(item => {
          return item.name.toLowerCase().includes(action.payload.toLowerCase())
        })
      } : state.temp
      console.log(data, "state");

      return {
        ...state,
        homeData: data
      }
    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload
      }
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  DataReducer
})