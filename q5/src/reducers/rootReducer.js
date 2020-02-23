import { combineReducers } from "redux";
import level1Reducer from "./level1.reducer";
import level2Reducer from "./level2.reducer";
import level3Reducer from "./level3.reducer";
import level4Reducer from "./level4.reducer";
import level5Reducer from "./level5.reducer";

export default combineReducers({
  level1Reducer,
  level2Reducer,
  level3Reducer,
  level4Reducer,
  level5Reducer
});
