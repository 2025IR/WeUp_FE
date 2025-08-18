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
    incrementAlert: (state) => {
      state.unreadAlertCount++;
    },
    clearAlertCount: (state) => {
      state.unreadAlertCount = 0;
    },
  },
});

export const { setAlertCount, incrementAlert, clearAlertCount } =
  alertSlice.actions;
export default alertSlice.reducer;
