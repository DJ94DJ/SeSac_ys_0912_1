import { useEffect, useState } from "react";

function LifeCycle(props) {
  const { number } = props;
  const [text, setText] = useState("");

  // useEffect (콜백함수, 의존성 배열)

  // 1. 의존성 배열이 빈 배열일 경우, (mount)
  // 마운트 시 콜백함수 실행
  // 콜백함수 내부에서 return 뒤에 오는 함수를 unmount 시에 실행시킴

  useEffect(() => {
    // ❌🆗
    console.log("function component :⭕ mount ");

    return () => {
      console.log("function component :🫠 unmount ");
    };
  }, []);

  //2. 의존성 배열 미전달 시
  // 마운트/업데이트 시 콜백함수 실행
  useEffect(() => {
    console.log("function component :🆗 update ");
  });

  //3. 의존성 배열에 원소가 존재할 시
  // 해당 원소가 마운트/업데이트 될 때마다 콜백함수 실행시킴
  useEffect(() => {
    console.log("function component :💪 text update ");
  }, [text]);

  return (
    <>
      <h2> 함수형 컴포넌트 LifeCycle 공부</h2>
      <div>number: {number}</div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}
export default LifeCycle;
