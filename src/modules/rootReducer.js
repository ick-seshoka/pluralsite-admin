import { combineReducers } from "redux";

import coursesReducer from "./courses/reducer";
import authorsReducer from "./authors/reducer";
import apiCallStateReducer from "./apiCallStates/reducer";

const rootReducer = combineReducers({
  courses: coursesReducer,
  authors: authorsReducer,
  apiCallsInProgress: apiCallStateReducer,
});

export default rootReducer;
