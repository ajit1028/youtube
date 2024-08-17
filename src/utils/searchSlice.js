import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload); //this will merge the payload as well as my state
    },
  },
});

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;
