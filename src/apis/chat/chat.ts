import {
  AiMessageResponse,
  ChatApiResponse,
  ChatRoomItem,
  CreateChatRoomPayload,
  InvitableMember,
} from "@/types/chat";
import instance from "../../utils/axios/axiosInstance";

// 채팅방 생성
export const createChatRoom = async (payload: CreateChatRoomPayload) => {
  const res = await instance.post("/chat/create", payload);
  return res.data.data;
};

// 채팅방 초대
export const inviteMembers = async (
  chatRoomId: number,
  inviteMemberIds: number[]
) => {
  const res = await instance.post(`/chat/invite/${chatRoomId}`, {
    inviteMemberIds,
  });
  return res.data.data;
};

// 채팅방 초대 가능 인원 목록 조회
export const getInvitableMembers = async (
  chatRoomId: number
): Promise<InvitableMember[]> => {
  const res = await instance.post(`/chat/list/member/${chatRoomId}`);
  return res.data.data;
};

// 채팅방 이름 변경
export const editChatRoomTitle = async (
  chatRoomId: number,
  chatRoomName: string
) => {
  const res = await instance.post(`/chat/edit/${chatRoomId}`, { chatRoomName });
  return res.data.data;
};

// 채팅방 목록 조회
export const getChatRoomList = async (
  projectId: number
): Promise<ChatRoomItem[]> => {
  const res = await instance.post(`/chat/list/${projectId}`);
  return res.data.data;
};

// 채팅방 나가기
export const leaveChatRoom = async (chatRoomId: number) => {
  const res = await instance.put(`/chat/leave/${chatRoomId}`);
  return res.data.data;
};

// 채팅 내역 조회
export const getChatHistory = async (
  roomId: number,
  page: number,
  size: number
): Promise<ChatApiResponse> => {
  const res = await instance.post(`/chat/messages/${roomId}`, { page, size });
  return res.data.data;
};

// 채팅 이미지 전송
export const sendImageMessage = async (
  data: FormData,
  roomId: number
): Promise<void> =>
  await instance.post(`/chat/send/image/${roomId}`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

// AI 채팅 전송
export const sendAiMessage = async (
  roomId: number,
  body: AiMessageResponse
) => {
  const res = await instance.post(`/ai/chat/${roomId}`, body);
  return res.data;
};
