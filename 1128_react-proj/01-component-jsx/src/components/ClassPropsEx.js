import { Component } from "react";
import PropTypes from "prop-types";

class ClassPropsEx extends Component {
  render() {
    return (
      <>
        <div>클래스형 컴포넌트를 이용 (Props)</div>
        <div>
          제목은 {this.props.title}, 내용은 {this.props.content}, 숫자는:{" "}
          {this.props.number}
        </div>
      </>
    );
  }

  static defaultProps = {
    name: "코딩온",
  };

  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string.isRequired,
    number: PropTypes.number,
  };
}

// 클래스 이름으로 접근이 가능하니 이렇게도 된다?
// ClassPropsEx.defaultProps = {
//   name: "코딩온",
// };

// ClassPropsEx.propTypes = {
//   title: PropTypes.string,
//   content: PropTypes.string.isRequired,
//   number: PropTypes.number,
// };

export default ClassPropsEx;
