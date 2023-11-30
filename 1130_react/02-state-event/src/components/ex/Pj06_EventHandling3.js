import { useState } from "react";

function EventHandling3() {
  const [col, setCol] = useState("white");
  const [col2, setCol2] = useState("black");
  const [inputText, setInputText] = useState("텍스트를 입력하세요");
  const [FruitSel, setFruitSel] = useState("/fruitimg/apple.jpg");

  const handleOnFruitChange = (e) => {
    const fruit = e.target.value;
    switch (fruit) {
      case "apple":
        setFruitSel("/fruitimg/apple.jpg");
        break;
      case "banana":
        setFruitSel("/fruitimg/banana.jpg");
        break;
      case "peach":
        setFruitSel("/fruitimg/peach.jpg");
        break;
      case "orange":
        setFruitSel("/fruitimg/orange.jpg");
        break;
      default:
        setFruitSel("/fruitimg/apple.jpg");
    }
  };

  const handleOnCol2Change = (e) => {
    const backdrop = e.target.value;
    switch (backdrop) {
      case "black":
        setCol2("black");
        break;
      case "white":
        setCol2("white");
        break;
      case "red":
        setCol2("red");
        break;
      case "orange":
        setCol2("orange");
        break;
      case "yellow":
        setCol2("yellow");
        break;
      case "green":
        setCol2("green");
        break;
      case "blue":
        setCol2("blue");
        break;
      case "pink":
        setCol2("pink");
        break;
      default:
        setCol2("black");
    }
  };

  const handleOnColChange = (e) => {
    const backdrop = e.target.value;
    switch (backdrop) {
      case "black":
        setCol("black");
        break;
      case "white":
        setCol("white");
        break;
      case "red":
        setCol("red");
        break;
      case "orange":
        setCol("orange");
        break;
      case "yellow":
        setCol("yellow");
        break;
      case "green":
        setCol("green");
        break;
      case "blue":
        setCol("blue");
        break;
      case "pink":
        setCol("pink");
        break;
      default:
        setCol("black");
    }
  };

  return (
    <>
      <h3> event 핸들링 종합</h3>

      <div
        style={{
          width: "500px",
          height: "400px",
          padding: "20px",
          margin: "50px",
          border: "solid black 1px",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <form action="#">
          <label for="fruit">과일 :</label>
          <select name="fruits" id="fruit" onChange={handleOnFruitChange}>
            <option value="apple">사과</option>
            <option value="banana">바나나</option>
            <option value="peach">복숭아</option>
            <option value="orange">오렌지</option>
          </select>

          <label for="backdrop">배경색 :</label>
          <select name="backdrops" id="backdrop" onChange={handleOnCol2Change}>
            <option value="black">검정</option>
            <option value="white">하양</option>
            <option value="red">빨강</option>
            <option value="orange">주황</option>
            <option value="yellow">노랑</option>
            <option value="green">초록</option>
            <option value="blue">파랑</option>
            <option value="pink">분홍</option>
          </select>

          <label for="textcol">글자색 :</label>
          <select name="textcols" id="textcol" onChange={handleOnColChange}>
            <option value="black">검정</option>
            <option value="white">하양</option>
            <option value="red">빨강</option>
            <option value="orange">주황</option>
            <option value="yellow">노랑</option>
            <option value="green">초록</option>
            <option value="blue">파랑</option>
            <option value="pink">분홍</option>
          </select>
          <br />
          <br />
          <input
            type="text"
            placeholder="텍스트를 입력하세요"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
        </form>
        <br />

        <img style={{ height: "200px" }} src={FruitSel} />

        <div
          style={{
            width: "300px",
            background: col2,
            fontWeight: "bold",
            color: col,
            padding: "20px",
            margin: "auto",
          }}
        >
          {inputText}
        </div>
      </div>
    </>
  );
}

export default EventHandling3;
