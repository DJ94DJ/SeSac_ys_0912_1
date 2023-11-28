import "./App.css";
import FuncComponent from "./components/FuncComponent";
import FuncComponentPj from "./components/FuncComponentPj";
import ClassComponent from "./components/ClassComponent";
import FuncPropsEx from "./components/FuncPropsEx";

function App() {
  return (
    <div>
      <ClassComponent />
      <ClassComponent></ClassComponent>

      <FuncComponent />
      <FuncComponentPj />
      {/* <FuncComponent></FuncComponent> */}
      <FuncPropsEx title="SeSAC" content="hello world" number={5} />
    </div>
  );
}

export default App;
