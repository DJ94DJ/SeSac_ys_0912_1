import "./App.css";
import OriginCss from "./componets/OriginCss";
import CssModule from "./componets/CssModule";
import SassComponent from "./componets/SassComponent";

function App() {
  return (
    <div className="App">
      <>
        <OriginCss></OriginCss>
        <hr />
        새방식
        <CssModule></CssModule>
        <hr />
        Sass 컴포넌트
        <SassComponent></SassComponent>
      </>
    </div>
  );
}

export default App;
