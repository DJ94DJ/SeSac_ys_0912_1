import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
// 리듀서 적용

import { composeWithDevTools } from "redux-devtools-extension";
// 확장기능 연결

import rootReducer from "./store";
// 스토어 연결

const store = configureStore({ reducer: rootReducer }, composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
