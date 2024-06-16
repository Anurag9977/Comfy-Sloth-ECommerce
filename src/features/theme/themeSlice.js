import { createSlice } from "@reduxjs/toolkit";
import { themes } from "../../utils/constants";

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("app-theme") || themes.light;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const defaultState = {
  theme: getThemeFromLocalStorage(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState: defaultState,
  reducers: {
    toggleTheme: (state, action) => {
      const newTheme =
        state.theme === themes.light ? themes.dark : themes.light;
      document.documentElement.setAttribute("data-theme", newTheme);
      state.theme = newTheme;
      localStorage.setItem("app-theme", newTheme);
    },
  },
});

export default themeSlice.reducer;

export const { toggleTheme } = themeSlice.actions;
