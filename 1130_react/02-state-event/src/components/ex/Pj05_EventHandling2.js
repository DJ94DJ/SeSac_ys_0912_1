import { useState } from "react";

function EventHandling2() {
  const [msg, setMsg] = useState("검정색 글씨");
  const [col, setCol] = useState("black");

  const handleOnRed = () => {
    setMsg("빨간색 글씨");
    setCol("red");
  };
  const handleOnBlue = () => {
    setMsg("파란색 글씨");
    setCol("blue");
  };

  return (
    <>
      <h3> event 핸들링 공부</h3>

      <div style={{ color: col }}>{msg}</div>

      <button onClick={handleOnRed}>빨갛게</button>
      <button onClick={handleOnBlue}>파랗게</button>
    </>
  );
}

export default EventHandling2;
