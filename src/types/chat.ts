export type ChatMessageProps = {
  senderId: number;
  senderName: string;
  senderProfileImage: string;
  message: string;
  sentAt: string;
  isImage: boolean;
  displayType: "DEFAULT" | "SAME_SENDER" | "SAME_TIME";
  senderType: "MEMBER" | "AI" | "SYSTEM" | "WITHDRAW";
  originalSenderName: string;
  originalMessage: string;
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
