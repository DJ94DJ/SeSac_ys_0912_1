import { useRef } from "react";

function FuncRef() {
  const input = useRef();

  //변수로 쓸때 초기값 담을 수 있음
  const localVar = useRef(0);
  //   const localVar = 0;

  const focusInput = () => {
    input.current.focus();
  };

  const plusLocalVar = () => {
    localVar.current++;
    console.log(localVar.current);
  };

  return (
    <>
      <input type="text" ref={input} />
      <button type="button" onClick={focusInput}>
        버튼
      </button>
      <div>{localVar.current}</div>
      <button type="button" onClick={plusLocalVar}>
        버튼ll
      </button>
    </>
  );
}

export default FuncRef;
