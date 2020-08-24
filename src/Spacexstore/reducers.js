import { combineReducers } from "redux";
import { spacex_filters } from "../features/Filters/REDUX";
import {
  spacex_launches,
  spacex_launches_loading,
} from "../features/Launches/REDUX";

export const rootReducer = combineReducers({
  spacex_filters,
  spacex_launches,
  spacex_launches_loading,
});
