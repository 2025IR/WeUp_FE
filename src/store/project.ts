import { ProjectStoreInfo } from "@/types/project";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ProjectStoreInfo = {
  id: null,
  projectName: "",
  projectImage: "",
  description: "",
  revealedNumber: false,
  isLeader: false,
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
  },
});

export const { setProject, resetProject } = projectSlice.actions;
export default projectSlice.reducer;
