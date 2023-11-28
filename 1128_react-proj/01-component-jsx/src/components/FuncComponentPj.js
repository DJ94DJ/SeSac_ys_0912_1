// const FuncComponent = () => {
//   return <div>함수형 컴포넌트 입니다.</div>;
// };

function FuncComponentPj() {
  const underbar = {
    textDecoration: "underline",
  };

  const name1 = <span style={underbar}>수염이</span>;
  const animal = <span style={underbar}>얼굴에서 자라나는 반려체모</span>;

  const mathX = 3;
  const mathY = 5;
  const AnswerCheck = 8;

  const checkAnswer = () => {
    if (mathX + mathY === AnswerCheck) {
      return "정답! 맞습니다.";
    } else {
      return "오답! 아니에요.";
    }
  };

  const A = 30;
  const B = 5;

  const title = "Hello World";

  return (
    <>
      <h1>새로운 함수형 컴포넌트를 개설하여 작성합니다.</h1>
      <h1>jsx 실습 1</h1>
      <h2>
        제 반려 동물의 이름은 {name1}입니다.
        <br />
        {name1}는 {animal}입니다.
      </h2>
      <h1>jsx 실습 2</h1>
      {mathX}와 {mathY}를 더하면 {AnswerCheck}일까요?
      <h4>{checkAnswer()}</h4>
      <h1>jsx 실습 3</h1>
      <h4>
        A의 값은 {A}, B의 값은 {B}입니다. <br />
        {A > B && "A가 B보다 큽니다."}
        {B > A && "B가 A보다 큽니다."}
        {/* <h4>{A > B ? "A가 B보다 큽니다" : "B가 A보다 크거나 같습니다"}</h4> */}
      </h4>
      <h1>jsx 실습 4</h1>
      <div className="box-css">
        <div className="title-css">{title}</div>
        <form className="form-css">
          <br />
          <label htmlFor="id">아이디:</label>
          <input type="text" id="id" name="id" />
          <br />
          <br />
          <label htmlFor="pwd">비밀번호:</label>
          <input type="password" id="pwd" name="pwd" />
        </form>
      </div>
    </>
  );
}

export default FuncComponentPj;
