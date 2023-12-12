import { Box2Container, Box4Container } from "../containers/BoxesContainer";

export function Box1({ number }) {
  return (
    <div className="box">
      <h3>box1 number: {number}</h3>
      <Box2Container />
    </div>
  );
}
// Box1는 AppRedux3(App.js)에서 불러오고 있어서 굳이 추출할 필요가 없다!

export function Box2({ number }) {
  return (
    <div className="box">
      <h3>box2 number: {number}</h3>
      <Box3 />
    </div>
  );
}

function Box3() {
  return (
    <div className="box">
      <Box4Container />
    </div>
  );
}

export function Box4(props) {
  const { number, isData, counterIncrease, counterDecrease, isDataChange } =
    props;
  return (
    <div className="box">
      <h3>box4 number: {number}</h3>
      <button onClick={counterIncrease}>plus</button>
      <button onClick={counterDecrease}>minus</button>

      <div>isData {`${isData}`}</div>
      <button onClick={isDataChange}>변경</button>
    </div>
  );
}

// 잘써도 껏다켜는 수밖에 없구나 ^^..
