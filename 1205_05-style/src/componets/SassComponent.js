import "../styles/original.scss";

function SassComponent() {
  return (
    <>
      <div className="origin-sass">
        <div className="box red"></div>
        <div className="box orange"></div>
        <div className="box yellow"></div>
        <div className="box green"></div>
        <div className="box blue"></div>
        <div className="box purple"></div>
        <div className="box cream"></div>
        <div className="box lightblue"></div>
        <div className="box pink"></div>
      </div>

      <div className="scss-parents">
        <div className="box o"></div>
        안녕하세요
        <ul>hi</ul>
      </div>
      <div className="box1"></div>
      <div className="box2"></div>

      <div className="box red"></div>
      <div className="box orange"></div>
      <div className="box yellow"></div>
      <div className="box"></div>
      <div className="box"></div>

      <button className="btn">버튼</button>

      <button className="btn-primary">강조 버튼</button>
    </>
  );
}

export default SassComponent;
