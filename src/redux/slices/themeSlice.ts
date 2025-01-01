import { createSlice } from "@reduxjs/toolkit";

interface themeProp {
  dark: boolean;
}

const initialState: themeProp = {
  dark: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, action: { payload: boolean }) => {
      state.dark = !action.payload;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
