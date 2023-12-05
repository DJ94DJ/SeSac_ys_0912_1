import { useState } from "react";
import "./App.css";
import LifeCycle from "./components/LifeCycleFunc";
import LifeCycleClass from "./components/LifeCycleClass";
import PostList from "./components/Pr01PostList";

function App() {
  const [number, SetNumber] = useState(0);
  const [isShow, setIsShow] = useState(true);

  return (
    <div>
      {/* isShow가 상태를 반대로 바꿈 */}

      <button onClick={() => SetNumber(number + 1)}>plus</button>

      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? "OFF" : "ON"}
      </button>

      {/* 함수형 */}
      {isShow && <LifeCycle number={number} />}

      {/* 클래스형 */}
      {/* <div>{isShow && <LifeCycleClass number={number} />}</div> */}

      {/* 실습 1 */}
      <div>
        <h1>함수형 컴포넌트 LifeCycle 실습</h1>
        <PostList />
      </div>

      <div></div>
    </div>
  );
}

export default App;
