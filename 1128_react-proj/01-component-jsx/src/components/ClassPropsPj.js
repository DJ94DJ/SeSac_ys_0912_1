import { Component } from "react";
import PropTypes from "prop-types";

class ClassPropsPj extends Component {
  render() {
    return (
      <>
        <h1>Props 실습 3</h1>
        <div>텍스트: {this.props.text}</div>
        <button
          type="button"
          onClick={() => {
            this.props.valid();
          }}
        >
          valid 콘솔 메시지
        </button>
      </>
    );
  }

  static defaultProps = {
    text: "이건 기본 text props입니다.",
  };

  static propTypes = {
    text: PropTypes.string.isRequired,
  };
}

export default ClassPropsPj;
