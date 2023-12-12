import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

function AppRedux1() {
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
  const number = useSelector((state) => state.number);
  // state에 저장된 number를 추출
  return (
    <div className="box">
      <h3>number: {number}</h3>
      <Box2 />
    </div>
  );
}

function Box2() {
  const number = useSelector((state) => state.number);
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
  const number = useSelector((state) => state.number);
  const dispatch = useDispatch();
  return (
    <div className="box">
      <h3>number: {number}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>plus</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>minus</button>
      <Box5 />
    </div>
  );
}

function Box5() {
  return <div className="box">{/* <h3>number: {number}</h3> */}</div>;
}
export default AppRedux1;
