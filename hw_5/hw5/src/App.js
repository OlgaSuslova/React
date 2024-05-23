import "./App.css";
import React from "react";
import { createStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { themeReducer } from "./ThemeReducer";

export const store = createStore(themeReducer);

function App() {
  return (
    <Provider store={store}>
      <div>
        <ThemeSwitcher />
      </div>
    </Provider>
  );
}

export default App;
