import PropTypes from "prop-types";

function FuncPropsPj2({ title, author, price, type }) {
  return (
    <>
      <h1>props 실습 2</h1>
      <div className="FuncPropPj2___book">
        <h2 className="FuncPropPj2___bestseller">이번주 베스트셀러</h2>
        <img className="FuncPropPj2___bookimg" src="/book1.png" />
        <h2>{title}</h2>
        <h4 className="FuncPropPj2___content">
          저자: {author} <br />
          판매가: {price} <br />
          구분: {type} <br />
        </h4>
      </div>
    </>
  );
}

FuncPropsPj2.defaultProps = {
  title: "제목 미확인",
  author: "저자 미확인",
  price: "가격이 없습니다.",
  type: "미정",
};

FuncPropsPj2.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  price: PropTypes.string,
  type: PropTypes.string,
};

export default FuncPropsPj2;
