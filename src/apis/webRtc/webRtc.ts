import instance from "../../utils/axios/axiosInstance";

// 참가 인원 수 조회
export const getMeetingCount = async (project_id: number) => {
  const res = await instance.get(`/meeting/count/${project_id}`, {});
  return res.data.data;
};

// 입장
export const enterMeeting = async (project_id: number): Promise<string> => {
  const res = await instance.post(`/meeting/enter/${project_id}`, {});
  return res.data.data;
};

// 퇴장
export const leaveMeeting = async (project_id: number) => {
  await instance.post(`/meeting/leave/${project_id}`, {});
};
