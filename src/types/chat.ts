export type ChatMessageProps = {
  senderId: number;
  senderName: string;
  senderProfileImage: string;
  message: string;
  sentAt: string;
  isImage: boolean;
};

export type ChatSendProps = {
  senderId: number;
  message: string;
};

export type ChatApiResponse = {
  messageList: ChatMessageProps[];
  lastPage: boolean;
  page: number;
};
