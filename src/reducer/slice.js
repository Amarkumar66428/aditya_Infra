import { createSlice } from '@reduxjs/toolkit';
import { storeLocalStorage } from '../helpers';

const appSlice = createSlice({
  name: 'appState',
  initialState: { theme: "dark" },
  reducers: {
    toggleTheme (state) {
      state.theme = state.theme === "dark" ? "light" : "dark";
      if(state.theme === "dark" || state.theme === "light"){
          storeLocalStorage("theme", state.theme);
          document.body.setAttribute("theme", state.theme);
      }
    },
  },
});

export const { toggleTheme } = appSlice.actions;
export default appSlice.reducer;
