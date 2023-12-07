import { useMemo, useState } from "react";

//useMemo 값을 기억하는 기능

// [before]
// count state가 변경되지 않아도, rendering 될때마다 다시 연산을 함. => q1T
// text state
// const calc = () => {
//
//
// };
// [after]
//useMemo(콜백함수, 의존성 배열)

// 컴포넌트 이름 무조건 대문자로
export default function UseMemoEx() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  //   const calc = useMemo(() => {
  //     console.log("calc.......");
  //     return count * 2;
  //   }, [count]);

  const calc = () => {
    console.log("계산 : ", count);
    return count * 2;
  };

  // [after]
  // useMemo(콜백함수, 의존성 배열)
  // useMemo : 불필요한 연산을 방지, 값을 기억 함. count의 변경이 있을 때만 다시 연산하여 calc에 담음

  return (
    <>
      <h1>useMemo test</h1>
      <div>
        count : {count}
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>

      <div>calc : {calc} </div>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}

// //예시코드
// import { useMemo, useState } from "react";

// // useMemo : Rendering 할 때, 불필요한 연산을 방지
// export default function UseMemoEx() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");
//   const [list, setList] = useState([]);

//   // [before]
//   // count state가 변경되지 않아도, rendering 될때마다 다시 연산을 함. => 비효율적
//   // => count 가 변경될때만 연산을 하도록 하고 싶음! => useMemo
//   //   const calc = () => {
//   //     console.log("calc.......");
//   //     return count * 2;
//   //   };

//   //   const calcValue = calc();

//   // [after]
//   // useMemo(콜백함수, 의존성 배열)
//   // useMemo :  불필요한 연산을 방지, 값을 기억 함. count의 변경이 있을 때만 다시 연산하여 calc에 담음
//   const calc = useMemo(() => {
//     console.log("calc.......");
//     return count * 2;
//   }, [count]);

//   return (
//     <>
//       <h3>useMemo 공부</h3>
//       <div>
//         count: {count} <button onClick={() => setCount(count + 1)}>+1</button>
//       </div>
//       {/* useMemo를 사용하지 않을 경우 */}
//       {/* <div>clac : {calcValue}</div> */}
//       {/* useMemo를 사용할 경우 */}
//       <div>clac : {calc}</div>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//     </>
//   );
