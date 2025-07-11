import { AiMessageResponse, ChatApiResponse } from "@/types/chat";
import instance from "../../utils/axios/axiosInstance";

// 채팅 내역 조회
export const getChatHistory = async (
  roomId: number,
  page: number,
  size: number
): Promise<ChatApiResponse> => {
  const res = await instance.post(`/chat/messages/${roomId}`, { page, size });
  console.log(res.data.data);
  return res.data.data;
};

// 채팅 이미지 전송
export const sendImageMessage = async (data: FormData): Promise<void> =>
  await instance.post(`/send/image`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

// AI 채팅 전송
export const sendAiMessage = async (payload: AiMessageResponse) => {
  const { projectId } = payload;
  const res = await instance.post(`/ai/chat/${projectId}`, payload);
  return res.data;
};
