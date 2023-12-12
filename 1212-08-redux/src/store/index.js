import { combineReducers } from "redux";
// 여러 리듀서를 컴바인 하는 기능
import counterReducer from "./counterReducer";
import isDataReducer from "./isDataReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  // 접근하기 위한 키가 추가됨요..
  isData: isDataReducer,
});

export default rootReducer;
