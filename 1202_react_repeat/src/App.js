import "./App.css";
import ListMap from "./components/ListMap";
import ListContact from "./components/pj01Map";
import ListWrite from "./components/pj02Map";
import FuncRef from "./components/FuncRef";
import ClassRef from "./components/ClassRef";
import ScrollBox from "./components/ScrollBox";

function App() {
  return (
    <div className="App">
      <ListMap />
      <ListContact />
      <ListWrite />
      <FuncRef />
      <ClassRef />
      <ScrollBox />
    </div>
  );
}

export default App;
