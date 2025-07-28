export type ChatMessageProps = {
  senderId: number;
  senderName: string;
  senderProfileImage: string;
  message: string;
  sentAt: string;
  isImage: boolean;
  displayType: "Default" | "SameSender" | "SameTime";
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

export type AiMessageResponse = {
  senderId: number;
  userInput: string;
  projectId: number;
};

export type ChatCardProps = ChatMessageProps & {
  isShowTime: boolean;
  isShowUserInfo: boolean;
};
