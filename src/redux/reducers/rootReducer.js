import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { launchReducer } from "./launchReducer";
import { queryReducer } from "./queryReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  launches: launchReducer,
  query: queryReducer
});

export default rootReducer;
