// @/hooks/chat/useInviteMembers.ts
import { changeChatRoomTitle } from "@/apis/chat/chat";
import { useMutation } from "@tanstack/react-query";

interface Params {
  chatRoomId: number;
  chatRoomName: string;
}

export const useInviteMembers = () => {
  return useMutation({
    mutationFn: ({ chatRoomId, chatRoomName }: Params) =>
      changeChatRoomTitle(chatRoomId, chatRoomName),

    onSuccess: () => {
      console.log("변경 성공!");
    },

    onError: (error) => {
      console.error("변경 실패:", error);
    },
  });
};
