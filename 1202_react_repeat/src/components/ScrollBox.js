import { useRef } from "react";

function ScrollBox() {
  const box = useRef();
  const ScrollTop = () => {
    box.current.scrollTop = 0;
    // scrollTop (기능이라 카멜케이스로)
  };

  return (
    <>
      <div className="scroll-box" ref={box}>
        <h1>화장실 가고싶다</h1>
        <h1>한시간 존버하면된다</h1>
        <h1>할수있다</h1>
        <h1>hljk</h1>
        <h1>hljk</h1>
        <h1>hljk</h1>
        <h1>hljk</h1>
        <h1>hljk</h1>
      </div>

      <button onClick={ScrollTop}>위로</button>
    </>
  );
}
export default ScrollBox;
