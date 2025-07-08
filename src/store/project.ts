import { ProjectStoreInfo } from "@/types/project";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ProjectStoreInfo = {
  id: null,
  projectName: "",
  projectImage: "",
  description: "",
  projectCreatedTime: "",
  revealedNumber: false,
  leader: false,
  status: false,
};

const projectSlice = createSlice({
  name: "selectedProject",
  initialState,
  reducers: {
    setProject(state, action: PayloadAction<Partial<ProjectStoreInfo>>) {
      return { ...state, ...action.payload };
    },
    resetProject() {
      return initialState;
    },
    setLeader(state, action: PayloadAction<boolean>) {
      state.leader = action.payload;
    },
  },
});

export const { setProject, resetProject, setLeader } = projectSlice.actions;
export default projectSlice.reducer;
