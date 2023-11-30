import { Component } from "react";

class Pj01_StateClass extends Component {
  state = {
    num: 0,
  };

  render() {
    return (
      <>
        <h3>실습 1 State 실습 (클래스형 컴포넌트) </h3>
        <div> 숫자 현황 {this.state.num}</div>
        <button
          onClick={() => {
            this.setState((prevState) => ({ num: prevState.num + 2 }));
          }}
        >
          +2
        </button>
        <button
          onClick={() => {
            this.setState((prevState) => ({ num: prevState.num - 1 }));
          }}
        >
          -1
        </button>
      </>
    );
  }
}

export default Pj01_StateClass;
