// 원래라면 써야할 코드 원래: 로 기입.
//원래: import { useReducer, useState, useCallback } from "react";
import useToggle from "../hooks/useToggle";

export default function CustomHooksEx() {
  //원래:   const [value, setValue] = useState(false);
  //원래:   const toggle = () => {
  //원래:   setValue(!value);
  //원래:   };

  const [isPopup, togglePopup] = useToggle(false);
  return (
    <>
      <h1>CustomHook 공부</h1>
      {isPopup && <div>보여요</div>}
      <button onClick={togglePopup}>토글</button>
    </>
  );
}
