export type ChatMessageProps = {
  senderId: number;
  senderName: string;
  senderProfileImage: string;
  message: string;
  sentAt: string;
  isImage: boolean;
  displayType: "Default" | "SameSender" | "SameTime";
  senderType: "MEMBER" | "AI" | "SYSTEM" | "WITHDRAW";
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

export type CreateChatRoomPayload = {
  chatRoomName: string;
  projectId: number;
  chatRoomMemberId: number[];
};

export type ChatRoomItem = {
  chatRoomId: number;
  chatRoomMemberId: number;
  chatRoomName: string;
  chatRoomMemberNames: string[];
  isBasic: boolean;
};

export type InvitableMember = {
  memberId: number;
  memberName: string;
  profileImage: string;
};
