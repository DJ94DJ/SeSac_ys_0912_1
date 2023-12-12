import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <h1>happy coding!</h1>
      <div>
        <Box1 />
      </div>
    </>
  );
}

// function Box1() {
//   const [number, setnumber] = useState(100);
//   const increase = () => setnumber(number + 1);
//   const decrease = () => setnumber(number - 1);
//   return (
//     <>
//       <div className="box">
//         <h3>number: {number}</h3>
//         <Box2 number={number} decrease={decrease} increase={increase} />
//       </div>
//     </>
//   );
// }

// // REDUX가 없으면 안쓰는데도 불구하고 그냥 넘기기 위해 이런 코드를 제작해야 함
// function Box2(props) {
//   const { number, increase, decrease } = props;
//   return (
//     <div className="box">
//       <h3>number: {number}</h3>
//       <Box3 number={number} increase={increase} decrease={decrease} />
//     </div>
//   );
// }
// function Box3(props) {
//   return (
//     <div className="box">
//       <Box4
//         number={props.number}
//         increase={props.increase}
//         decrease={props.decrease}
//       />
//     </div>
//   );
// }

// function Box4({ number, increase, decrease }) {
//   return (
//     <div className="box">
//       <h3>number: {number}</h3>
//       <button onClick={increase}>plus</button>
//       <button onClick={decrease}>minus</button>
//     </div>
//   );
// }

export default App;
