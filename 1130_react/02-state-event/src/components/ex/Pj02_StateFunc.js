import { useState } from "react";

function Pj02_StateFunc() {
  const [Num, setNum] = useState(0);
  return (
    <>
      <h3>실습 2 State 실습 (함수형 컴포넌트) </h3>
      <div> 숫자 현황 {Num}</div>

      <button
        onClick={() => {
          setNum((prevNum) => prevNum + 1);
        }}
      >
        increase
      </button>
      <button
        onClick={() => {
          setNum((prevNum) => prevNum - 2);
        }}
      >
        decrease
      </button>
    </>
  );
}

export default Pj02_StateFunc;
