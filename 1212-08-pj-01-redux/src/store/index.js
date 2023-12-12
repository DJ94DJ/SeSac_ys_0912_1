import { combineReducers } from "redux";

// 여러 리듀서를 컴바인 하는 기능
import CalcReducer from "./CalcReducer";

const rootReducer = combineReducers({
  counter: CalcReducer,
  // 접근하기 위한 키가 추가됨요..
});

export default rootReducer;
