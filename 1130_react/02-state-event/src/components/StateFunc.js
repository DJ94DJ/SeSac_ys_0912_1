import { useState } from "react";

function StateFunc() {
  //  useState = 배열반환 > 해당 배열 구조분해 하여 number, setnumber 선언
  // [state 변수, state 변경시키는 함수] 를 return = useState(초기값)

  // 이런 식이다
  // const [a, b, c] = ["aaa", "bbb","ccc"]
  // console.log(a)
  // // aaa
  // console.log(b)
  // // bbb
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("배고프다 위장에 뭘 넣고싶다");

  return (
    <>
      <h3>함수형 컴포넌트 state 공부</h3>
      <div>
        number state value {number}{" "}
        <button
          onClick={() => {
            // setNumber(number + 1);

            setNumber((prevNumber) => prevNumber + 1);
            setNumber((prevNumber) => prevNumber + 1);
          }}
        >
          +2
        </button>
      </div>
      <button
        onClick={() => {
          setText((prevText) => prevText + "햄버거");
          setText((prevText) => prevText + "피자");
        }}
      >
        햄버거
      </button>
      <div>{text}</div>
    </>
  );
}

export default StateFunc;
