import { useState } from "react";

function EventFunc() {
  const [msg, setMsg] = useState("hi");

  const handleOnClick = (e) => {
    console.log(e.target);
    setMsg("bye");
  };

  function handleOnClickhello() {
    setMsg("hello~~");
  }

  const handleOnClicktest = (message) => {
    setMsg(message);
  };

  const [name, setName] = useState("");

  //엔터감지
  const handleEnter = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      console.log("엔터 눌림");
    }
  };

  return (
    <>
      <h3>함수형 컴포넌트 event 핸들링 공부</h3>
      <div>
        {msg}
        <button onClick={handleOnClick}>잘 가</button>
        <button onClick={handleOnClickhello}>안녕</button>

        {/* 함수에서 매개변수를 받고 싶다면? */}
        {/* sol1. 온클릭에서 익명함수를 선언하고 그 함부내에서 함수실행. */}
        <button
          onClick={() => {
            handleOnClicktest("안녕");
          }}
        >
          테스트
        </button>

        {/* sol2. 바인드bind 이용. */}
        {/* 바인드의 첫 매개변수는, 앞에 있는 함수(handleOnClicktest)의 this를 결정. */}
        {/* 앞에는 그 바꿀 대상을 잡아주는 건데 지금 굳이 잡아줄 필요가 없으니 null */}
        <button
          onClick={handleOnClicktest.bind(
            null,
            "아아아아악 졸려 귀찮아 그냥 똥싸면 돈나오게 해줘"
          )}
        >
          테스트뿅
        </button>
        <br />
        {/* 인풋태그에서 엔터를 누르면 함수가 실행되게 "엔터를 눌렀다" 문구 콘솔에 찍히게 */}
        <input
          type="text"
          value={name}
          onChange={(e) => {
            // console.log(e.target);
            console.log(e.target.value);
            setName();
          }}
          onKeyDown={handleEnter}
        />
      </div>
    </>
  );
}

export default EventFunc;
