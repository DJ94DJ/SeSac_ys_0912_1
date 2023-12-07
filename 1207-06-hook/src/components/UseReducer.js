import { useReducer, useState, useCallback } from "react";

const initialValue = { value: 0 };
const reducer = (prevState, action) => {
  switch (action.type) {
    case "PLUS":
      return { value: prevState.value + 1 };
    case "MINUS":
      return { value: prevState.value - 1 };
    case "RESET":
      return initialValue;
    case "MULTIFLY":
      return { value: prevState.value * action.number };
    case "DIVIDE":
      return { value: prevState.value / action.number };
    default:
      return { value: prevState.value };
  }
};

// state: 상태
// dispatch: 액션을 발생시키는 함수
// reducer: 실질적으로 상태를 업데이트 하는 함수(실무자) (결국 dispatch가 지시-실행하는 함수)

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const [number, setNumber] = useState(0);

  const handleOnChangeNumber = useCallback(
    (e) => setNumber(e.target.value),
    []
  );

  //리듀서가 저 액션값을 받아서 조건에 따른 처리를 진행한다.
  const plus = () => dispatch({ type: "PLUS" });
  const minus = () => dispatch({ type: "MINUS" });
  const reset = () => dispatch({ type: "RESET" });
  const multifly = () => dispatch({ type: "MULTIFLY", number: number });
  const divide = () => dispatch({ type: "DIVIDE", number: number });

  //만약 useState로 한다면...
  // 지금은 +- 초기화만 하고 있지만,
  // 만약에 곱하기, 나누기 등등 더 많은 연산을 이용한다고 하면?
  // 또 컴포넌트 자체가 복잡해져서 코드가 길어진다
  // state의 변화를 추적하고 싶음 => setState를 일일이 찾아가면서 +1도 되구나,,, -1도 되구나,,, 알기 어려웁
  // reducer를 사용한다면? => 좀더 +1 할수 있고, -1 할수 있고
  // const [state, setState] = useState(initialValue);
  //   const [state, setState] = useState(initialValue);
  //   const plus = () => setState({ value: state.value + 1 });
  //   const minus = () => setState({ value: state.value - 1 });
  //   const reset = () => setState(initialValue);

  return (
    <>
      <h1>useReducer 공부</h1>
      <div>
        {state.value}
        <button onClick={plus}>+1</button>
        <button onClick={minus}>-1</button>
        <button onClick={reset}>리셋</button>

        <input type="number" value={number} onChange={handleOnChangeNumber} />
        <button onClick={multifly}>곱하기</button>
        <button onClick={divide}>나누기</button>
      </div>
    </>
  );
}
