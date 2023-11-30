import { Component } from "react";

class StateClass extends Component {
  // 예전 방식 - 이걸 적어야 한다.
  //   constructor(props) {
  //     super(props);
  //     // super() 부모 클래스의 생성자 : 실행 시켜야 this 객체 사용

  //     this.state = {
  //       number: 0,
  //       text: "hello",
  //     };
  //   }
  // 생성자 미구현시 위의 기본 생성자 자동 실행되어 이행

  state = {
    number: 0,
    text: "hello",
  };

  render() {
    // const {number} = this.state;
    return (
      <>
        <div> props 예시 {this.props.name}</div>
        <h3>클래스형 컴포넌트 state 공부</h3>
        <div>number state value {this.state.number}</div>

        {/* state를 변경시키기 컴포넌트에서 제공하는 기능함수 줌*/}
        <button
          onClick={() => {
            // 보통 일반 변수 변경처럼 재할당 하는게 아닌,
            // 직접 state를 변경하는 함수 사용 = 클래스형 컴포넌트에서 setState 메소드 제공
            // this.setState({ number: this.state.number + 1 });
            // 연달아서 처리를 하고 싶다면?
            // this.setState({ number: this.state.number + 1 });
            // this.setState({ number: this.state.number + 1 });
            // 이렇게 하나 더 얹으면 +2 되겠지? = 응 아냐 비동기라서 동시에 실행됨~
            // 어찌하냐 그럼

            this.setState((prevState) => {
              return { number: prevState.number + 1 };
            });
            this.setState((prevState) => ({ number: prevState.number + 1 }));
          }}
        >
          +2
        </button>
      </>
    );
  }
}

//이거 둘은 같은 코드
//
// const getNumber = () => {
//     return 5;
// }
//
// const getNumber1 = () => 5;

export default StateClass;
