import { RoleType } from "@/types/team";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RoleState {
  roles: RoleType[];
}

const initialState: RoleState = {
  roles: [],
};

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    setRoles(state, action: PayloadAction<RoleType[]>) {
      state.roles = action.payload;
    },
    resetRoles(state) {
      state.roles = [];
    },
  },
});

export const { setRoles, resetRoles } = roleSlice.actions;
export default roleSlice.reducer;
