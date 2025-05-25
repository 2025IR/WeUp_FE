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
  content: ChatMessageProps[];
  last: boolean;
  number: number;
};
