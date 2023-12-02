// import React, { Component } from "react";
import { Component, createRef } from "react";

class ClassRef extends Component {
  focusInput = () => {
    this.input.focus();
  };

  // 콜백 함수 이용하여 REF를 지정시, REF변수 사용법
  input2 = createRef();
  focusInput2 = () => {
    this.input2.current.focus();
  };

  render() {
    return (
      <>
        {/* 콜백함수 이용하여 REF지정 */}
        <input
          type="text"
          ref={(ref) => {
            // ref에 콜백함수를 넘길 때 첫번째 매개변수는
            // ref 걸려 있는 요소를 담고 있다.
            this.input = ref;
          }}
        />
        <button type="button" onClick={this.focusInput}>
          버튼
        </button>

        <input type="text" ref={this.input2} />
        <button type="button" onClick={this.focusInput2}>
          버튼
        </button>
      </>
    );
  }
}
export default ClassRef;
