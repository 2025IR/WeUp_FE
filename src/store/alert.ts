import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AlertState {
  unreadAlertCount: number;
  alertMessage: string;
}

const initialState: AlertState = {
  unreadAlertCount: 0,
  alertMessage: "",
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
    setAlertMessage: (state, action: PayloadAction<string>) => {
      state.alertMessage = action.payload;
    },
    clearAlertMessage: (state) => {
      state.alertMessage = "";
    },
  },
});

export const {
  setAlertCount,
  incrementAlert,
  clearAlertCount,
  setAlertMessage,
  clearAlertMessage,
} = alertSlice.actions;
export default alertSlice.reducer;
