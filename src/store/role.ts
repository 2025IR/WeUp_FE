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
    updateRole(state, action: PayloadAction<RoleType>) {
      const { roleId, roleName, roleColor } = action.payload;
      const target = state.roles.find((r) => r.roleId === roleId);
      if (target) {
        target.roleName = roleName;
        target.roleColor = roleColor;
      }
    },
  },
});

export const { setRoles, resetRoles, updateRole } = roleSlice.actions;
export default roleSlice.reducer;
