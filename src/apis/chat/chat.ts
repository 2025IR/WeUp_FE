import { ChatApiResponse } from "@/types/chat";
import instance from "../axiosInstance";

// 채팅 내역 조회
export const getChatHistory = async (
  roomId: number,
  page: number,
  size: number
): Promise<ChatApiResponse> => {
  const res = await fetch(`/chat/messages/${roomId}?page=${page}&size=${size}`);
  return res.json();
};

// 채팅 이미지 전송
export const sendImageMessage = async (data: FormData): Promise<void> =>
  await instance.post(`/send/image`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
