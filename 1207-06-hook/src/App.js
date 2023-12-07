import { useState } from "react";
import "./App.css";
import UseMemoEx from "./components/UseMemoEx";
import UseCallbackEx from "./components/UseCallback";
import UseCallbackEx2 from "./components/UseCallback2";
import UseReducer from "./components/UseReducer";
import CustomHooksEx from "./components/CustomHooksEx";
import UseMemoHook from "./components/Pj01_useMemoHook";

function App() {
  const [postId, setPostId] = useState(1);
  return (
    <>
      <UseMemoEx />
      <hr />
      <UseCallbackEx />
      <hr />
      <UseCallbackEx2 postId={postId} />
      <button onClick={() => setPostId(postId + 1)}>+1</button>
      <hr />
      <UseReducer />
      <hr />
      <CustomHooksEx />
      <hr />
      <UseMemoHook />
    </>
  );
}

export default App;
