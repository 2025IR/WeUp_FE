import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProjectState {
  id: number | null;
  name: string;
  image: string;
  isContactVisible: boolean;
  status: "active" | "completed";
}

const initialState: ProjectState = {
  id: null,
  name: "",
  image: "",
  isContactVisible: false,
  status: "active",
};

const projectSlice = createSlice({
  name: "selectedProject",
  initialState,
  reducers: {
    setProject(state, action: PayloadAction<ProjectState>) {
      return action.payload;
    },
    resetProject() {
      return initialState;
    },
  },
});

export const { setProject, resetProject } = projectSlice.actions;
export default projectSlice.reducer;
