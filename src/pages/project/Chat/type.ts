export type ChatSendPayload = {
  senderId: number;
  message: string;
};

export interface ChatRoom {
  id: number;
  title: string;
  preview: string;
  unreadCount: number;
  members: string[];
}
