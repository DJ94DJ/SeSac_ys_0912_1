import { Component } from "react";

class EventClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "hello",
    };

    // 함수 선언문 사용시 메소드 만들때 내부에서 클래스의 this 사용 희망시 직접 bind해야함.
    // 생성자 내에서 this를 bind해서 진행
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  // 함수 선언문을 통해 메소드 정의하면.. = 내부에서 자체 this 생성
  // = this가 클래스의 this가 아니게 됨. (문제발생!)
  // sol1. 생성자 내부서 this를 원하는 것으로 바인딩
  // 동적 바인딩을 하니깐
  handleOnClick() {
    this.setState({ msg: "bye" });
  }

  //     handleOnClick2 = () => {
  //   console.log(this);
  //       this.setState({ msg: "bye" });
  //     };

  // sol2. 함수표현식을 쓴다 이건 바인딩 필요없듬
  // 이건 함수 선언될때 this를 결정지음 코드가 읽을 때 this가 결정됨.
  // 정적 바인딩을 하니깐
  handleOnClickhello = (e) => {
    console.log(e);
    this.setState({ msg: "hello!!" });
  };

  render() {
    return (
      <>
        <h3>클래스형 컴포넌트 event handling 공부</h3>

        {this.state.msg}
        <button onClick={this.handleOnClick}>잘 가</button>
        {/* handleOnClick() 안에 일케쓰면 안됨 */}
        <button onClick={this.handleOnClickhello}>정말?</button>

        <button
          //이벤트 객체를 받을 수 있기에, e에 로그를 찍어서 받아올수 있다!
          //e = 리액트 합성 이벤트 객체, 이벤트가 걸린 태그를 확인 할 수 있음.
          onClick={(e) => {
            console.log(e);
            console.log("타겟", e.target);
            console.log("타입", e.type);
          }}
        >
          test
        </button>
      </>
    );
  }
}

export default EventClass;
