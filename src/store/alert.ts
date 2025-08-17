import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AlertState {
  unreadAlertCount: number;
}

const initialState: AlertState = {
  unreadAlertCount: 0,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlertCount: (state, action: PayloadAction<number>) => {
      state.unreadAlertCount = action.payload;
    },
    clearAlertCount: (state) => {
      state.unreadAlertCount = 0;
    },
  },
});

export const { setAlertCount, clearAlertCount } = alertSlice.actions;
export default alertSlice.reducer;
