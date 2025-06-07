import { ScheduleType } from "@/types/schedule";
import instance from "../axiosInstance";

// 일정 불러오기
export const getSchedules = async (
  projectId: number
): Promise<ScheduleType[]> => {
  const response = await instance.post(`/schedule/${projectId}`);
  return response.data.data;
};

// 일정 수정
export const editSchedule = async (
  projectId: number,
  availableTime: string
) => {
  await instance.put(
    `/schedule/edit/${projectId}`,
    { availableTime },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
