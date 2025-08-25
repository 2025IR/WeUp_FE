import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeOptions } from "react-toastify";

interface AlertState {
  unreadAlertCount: number;
  alertMessage: string;

  apiMessage: string;
  apiMessageType: TypeOptions | null;
}

const initialState: AlertState = {
  unreadAlertCount: 0,
  alertMessage: "",
  apiMessage: "",
  apiMessageType: null,
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

    setApiMessage: (
      state,
      action: PayloadAction<{
        message: string;
        type: "success" | "error";
      }>
    ) => {
      state.apiMessage = action.payload.message;
      state.apiMessageType = action.payload.type;
    },
    clearApiMessage: (state) => {
      state.apiMessage = "";
      state.apiMessageType = null;
    },
  },
});

export const {
  setAlertCount,
  incrementAlert,
  clearAlertCount,
  setAlertMessage,
  clearAlertMessage,

  setApiMessage,
  clearApiMessage,
} = alertSlice.actions;
export default alertSlice.reducer;
