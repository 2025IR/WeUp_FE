import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const INITIAL_SCHEDULE = "0".repeat(252);

interface ScheduleState {
  schedule: string;
  tempSchedule: string;
}

const initialState: ScheduleState = {
  schedule: INITIAL_SCHEDULE,
  tempSchedule: INITIAL_SCHEDULE,
};

const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    setSchedule: (state, action: PayloadAction<string>) => {
      state.schedule = action.payload;
    },
    clearSchedule: (state) => {
      state.schedule = INITIAL_SCHEDULE;
    },
    setTempSchedule: (state, action: PayloadAction<string>) => {
      state.tempSchedule = action.payload;
    },
    clearTempSchedule: (state) => {
      state.tempSchedule = INITIAL_SCHEDULE;
    },
  },
});

export const {
  setSchedule,
  clearSchedule,
  setTempSchedule,
  clearTempSchedule,
} = scheduleSlice.actions;
export default scheduleSlice.reducer;
