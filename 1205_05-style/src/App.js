import "./App.css";
import OriginCss from "./componets/OriginCss";
import CssModule from "./componets/CssModule";
import SassComponent from "./componets/SassComponent";
import StyledComponents from "./componets/StyledComponent";
import Pj01_Sass from "./componets/Pj01_Sass";
import Pj02_Scss from "./componets/Pj02_Scss";

function App() {
  return (
    <div className="App">
      <>
        <OriginCss />
        <hr />
        새방식
        <CssModule />
        <hr />
        Sass 컴포넌트
        <SassComponent />
        스타일드 컴포넌트
        <StyledComponents />
        <hr />
        리액트 styled Sass 실습 01
        <Pj01_Sass />
        <hr />
        리액트 styled Sass 실습 02
        <Pj02_Scss />
      </>
    </div>
  );
}

export default App;
