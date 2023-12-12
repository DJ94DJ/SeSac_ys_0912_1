import "./App.css";
import { useDispatch, useSelector } from "react-redux";
// 리덕스 스토어 조회를 위한 함수

import { increase, decrease } from "./store/CalcReducer";
// 계산기능

import { Box1Container } from "./containers/BoxesContainer";
// 해당 요소에 적용되는 기능

// containers 폴더
// redux store에 직접적으로 접근하는 컴포넌트를 모아두기 위해서.

// components 폴더
// 보통 presentational 컴포넌트만 저장.
// redux store에 직접적으로 접근하지 않는 컴포넌트만를 모아둠.

function AppRedux3() {
  return (
    <div>
      <Box1Container />
    </div>
  );
}

export default AppRedux3;
