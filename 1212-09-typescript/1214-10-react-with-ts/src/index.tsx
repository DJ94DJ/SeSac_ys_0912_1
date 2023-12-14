import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 타입 단원
// ts 컴파일러가 null, undefind가 가능하다고 해석하고 있고
// 우린 #root가 있다고 단언하는 상황
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
