import { ScheduleType } from "@/types/schedule";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const INITIAL_SCHEDULE = "0".repeat(252);

interface ScheduleState {
  schedule: ScheduleType[];
  mySchedule: string;
  tempMySchedule: string;
}

const initialState: ScheduleState = {
  schedule: [],
  mySchedule: INITIAL_SCHEDULE,
  tempMySchedule: INITIAL_SCHEDULE,
};

const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    setSchedule: (state, action: PayloadAction<ScheduleType[]>) => {
      state.schedule = action.payload;
    },
    // id, string 값으로 상태값 변경
    changeScedule: (
      state,
      action: PayloadAction<{ memberId: number; availableTime: string }>
    ) => {
      const target = state.schedule.find(
        (s) => s.memberId === action.payload.memberId
      );
      if (target) {
        target.availableTime = action.payload.availableTime;
      }
    },
    clearSchedule: (state) => {
      state.schedule = [];
    },
    setMySchedule: (state, action: PayloadAction<string>) => {
      state.mySchedule = action.payload;
    },
    clearMySchedule: (state) => {
      state.mySchedule = INITIAL_SCHEDULE;
    },
    setTempMySchedule: (state, action: PayloadAction<string>) => {
      state.tempMySchedule = action.payload;
    },
    clearTempMySchedule: (state) => {
      state.tempMySchedule = INITIAL_SCHEDULE;
    },
  },
});

export const {
  setSchedule,
  changeScedule,
  clearSchedule,
  setMySchedule,
  clearMySchedule,
  setTempMySchedule,
  clearTempMySchedule,
} = scheduleSlice.actions;
export default scheduleSlice.reducer;
