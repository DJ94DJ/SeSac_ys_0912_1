import PropTypes from "prop-types";

function Section({ title, children }) {
  return (
    <>
      <div className="Section___section">
        <h3 className="Section___title">{title}</h3>
        <div>{children}</div>
        {/* app.js에 기입한 부분이 특정 컴포넌트의 자식과 연결 가능 */}
      </div>
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
