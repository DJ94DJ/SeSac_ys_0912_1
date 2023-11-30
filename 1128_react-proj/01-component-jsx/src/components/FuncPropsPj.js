import PropTypes from "prop-types";

function FuncPropsPj({ food }) {
  return (
    <>
      <h1>props 실습 1</h1>
      <div>
        좋아하는 음식은 <span style={{ color: "red" }}>{food}</span>
      </div>
    </>
  );
}

FuncPropsPj.defaultProps = {
  food: "마롱글라세",
};

FuncPropsPj.propTypes = {
  food: PropTypes.string,
};

export default FuncPropsPj;
