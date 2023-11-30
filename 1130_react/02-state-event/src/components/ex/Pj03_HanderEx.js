import { Component } from "react";

class HandlerEx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: "Hello World!",
    };
  }

  handleOnClickBye = (e) => {
    console.log(e);
    this.setState({ state: "Goodbye World!" });
  };

  render() {
    return (
      <>
        <div>{this.state.state}</div>
        <button onClick={this.handleOnClickBye}>빠이</button>
      </>
    );
  }
}

export default HandlerEx;
