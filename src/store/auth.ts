import { AuthStoreInfo } from "@/types/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthStoreInfo = {
  accessToken: null,
  userId: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (_, action: PayloadAction<AuthStoreInfo>) => action.payload,
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    clearAuth: () => ({ accessToken: null, userId: null }),
  },
});

export const { setAuth, setAccessToken, clearAuth } = authSlice.actions;
export default authSlice.reducer;
