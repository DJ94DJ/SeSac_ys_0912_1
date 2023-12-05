import { Component } from "react";

// 앞에 소개한 모든 메서드를 완벽히 알아야 하는 것은 아님
// • 심지어 이제는 클래스형 컴포넌트를 사용하지 않음..
// •실제로 공식 문서에서도 자주 사용되는 메서드와 자주 사용하지 않는 메서드를 구분하고 있음
// •자주 사용하는 메서드
// useEffect나 공부하자
// • componentDidMount
// • componentDidUpdate
// • componentWillUnmount

class LifeCycleClass extends Component {
  state = { text: "" };

  // 1. 컴포넌트 마운트 시
  componentDidMount() {
    console.log("class component :⭕ mount  ");
  }

  // 2. 컴포넌트 업데이트 시
  componentDidUpdate(prevProps, prevState) {
    console.log("class component :🆗 update ");

    // text state가 변경될때 if if문 안에 있는 코드 실행
    if ((prevState.text = this.state.text))
      console.log("function component :💪 text update ");
  }

  // 3. 컴포넌트 언마운트 시
  componentWillUnmount() {
    console.log("class component :🫠 unmount ");
  }

  render() {
    return (
      <>
        <h2> 클래스형 컴포넌트 LifeCycle 공부</h2>
        <div>number: {this.props.number}</div>
        <input
          type="text"
          value={this.state.text}
          onChange={(e) => this.setState({ text: e.target.value })}
        />
      </>
    );
  }
}

export default LifeCycleClass;
