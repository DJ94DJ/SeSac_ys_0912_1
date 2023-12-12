import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./store/counterReducer";
import "./App.css";

// containters 폴더
// redux store에 직접적으로 접근하는 컴포넌트 모아두기 위함.

// components 폴더
// 보통 presentational 컴포넌트만 저장.
// redux store에 직접적으로 접근하지 않는 컴포넌트만을 모아둠.

function AppRedux3() {
  return (
    <>
      <h1>happy coding!</h1>

      <div>
        <Box1 />
      </div>
    </>
  );
}

function Box1() {
  const number = useSelector((state) => state.counter.number);
  // state에 저장된 number를 추출
  return (
    <div className="box">
      <h3>number: {number}</h3>
      <Box2 />
    </div>
  );
}

function Box2() {
  const number = useSelector((state) => state.counter.number);
  return (
    <div className="box">
      <h3>number: {number}</h3>
      <Box3 />
    </div>
  );
}

function Box3() {
  return (
    <div className="box">
      <Box4 />
    </div>
  );
}

function Box4() {
  const number = useSelector((state) => state.counter.number);
  const isData = useSelector((state) => state.isData);
  const dispatch = useDispatch();

  return (
    <div className="box">
      <h3>number: {number}</h3>

      {/* <button onClick={() => dispatch({ type: "INCREMENT" })}>plus</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>minus</button> */}
      <button onClick={() => dispatch(increase())}>plus</button>
      <button onClick={() => dispatch(decrease())}>minus</button>

      <div>isData {`${isData}`}</div>
      <button onClick={() => dispatch({ type: "CHANGE" })}>change(변경)</button>
      <Box5 />
    </div>
  );
}

function Box5() {
  return <div className="box">{/* <h3>number: {number}</h3> */}</div>;
}
export default AppRedux3;
