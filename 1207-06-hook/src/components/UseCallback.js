import { useCallback, useState } from "react";

//useCallback : 함수를 기억함.
//컴포넌트가 렌더링시, 컴포넌트 내부에 있는 함수도 재선언하게됨.
// 다시 선언할 필요가 없는 함수 대신 이전 미리 선언 함수 활용 기능 = Callback

export default function UseCallbackEx() {
  const [text, setText] = useState("");

  // 이전
  //   const handleOnChange = (e) => {
  //     setText(e.Target.value);
  //   };

  // 의존성 배열이 빈값일 경우, 처음 마운트 될 때 선언된 함수를 계속 기억하고 있다가,
  // update 될 때 다시 선언하지 않고 기억하고 있는 함수를 사용함.
  // 컴포넌트 내부서 변경가능한 값 = state, props
  // handleOnChange 함수에서는 = UseCallbackEx 컴포넌트에서 유일하게 변경가능한 text를 미활용중. = 변하는 함수가 아니다.
  const handleOnChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <>
      <h1>useCallback 공부 </h1>

      <input type="text" value={text} onChange={handleOnChange} />
    </>
  );
}
