import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = 0;
const prodSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    addCount: (state, action: PayloadAction<number>) => {
      state += action.payload;
    },
  },
});
export const { addCount } = prodSlice.actions;
export default prodSlice.reducer;
