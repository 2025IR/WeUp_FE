import { ProjectStoreInfo } from "@/types/project";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ProjectStoreInfo = {
  id: null,
  name: "",
  image: "",
  description: "",
  isContactVisible: false,
  isLeader: false,
  status: false,
};

const projectSlice = createSlice({
  name: "selectedProject",
  initialState,
  reducers: {
    setProject(state, action: PayloadAction<ProjectStoreInfo>) {
      return action.payload;
    },
    resetProject() {
      return initialState;
    },
  },
});

export const { setProject, resetProject } = projectSlice.actions;
export default projectSlice.reducer;
