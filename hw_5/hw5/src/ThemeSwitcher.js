import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleTheme } from "./Actions";

export const ThemeSwitcher = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>ThemeSwitcher {theme}</h1>
      <button onClick={() => dispatch(toggleTheme())}>
        Переключить на {theme === "dark" ? "Light" : "Dark"}
      </button>
    </div>
  );
};
