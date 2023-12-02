import ColorSelect from "/ColorSelect";
import { useState } from "React";

function Practice4() {
  const [fruit, setFruit] = useState("apple");
  const [bgcolor, setBgcolor] = useState("black");
  const [color, setColor] = useState("White");
  const [content, setContent] = useState("text");

  return (
    <>
      <label>과일</label>

      <select
        onChange={(e) => {
          setFruit(e.target.value);
        }}
      >
        <option value="apple">사과</option>
        <option value="banana">바나나</option>
        <option value="peach">복숭아</option>
        <option value="orange">오렌지</option>
      </select>
      <ColorSelect
        mode="배경"
        onChange={(e) => {
          setBgcolor(e.target.value);
        }}
      />
      <ColorSelect
        mode="글자"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <br />

      <label> 내용: </label>
      <input
        type="text"
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <img src={`/${fruit}.jpg`} width={200} />
      <div style={{ backgroundColor: bgcolor, color: color }}>{content}</div>
    </>
  );
}

export default Practice4;
