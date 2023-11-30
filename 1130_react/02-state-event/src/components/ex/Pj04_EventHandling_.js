import { useState } from "react";

function EventHandling() {
  const [msg, setMsg] = useState("안녕하세요");
  const [butt, setButt] = useState("사라져라");

  const handleOnClick = (e) => {
    console.log(e.target);

    if (msg === "안녕하세요") {
      setMsg("");
      setButt("보여라");
    } else {
      setMsg("안녕하세요");
      setButt("사라져라");
    }
  };

  return (
    <>
      <h3> event 핸들링 공부</h3>

      <div>{msg}</div>
      <button onClick={handleOnClick}>{butt}</button>
    </>
  );
}

export default EventHandling;
