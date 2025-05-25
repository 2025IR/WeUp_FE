import { ChatApiResponse } from "@/types/chat";

// 채팅 내역 조회
export const getChatHistory = async (
  roomId: number,
  page: number,
  size: number
): Promise<ChatApiResponse> => {
  const res = await fetch(`/chat/messages/${roomId}?page=${page}&size=${size}`);
  return res.json();
};
