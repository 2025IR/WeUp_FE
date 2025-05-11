import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: null as string | null,
  reducers: {
    setAccessToken: (_, action: PayloadAction<string>) => action.payload,
    clearAccessToken: () => null,
  },
});

export const { setAccessToken, clearAccessToken } = authSlice.actions;
export default authSlice.reducer;
