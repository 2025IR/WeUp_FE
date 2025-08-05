// @/hooks/chat/useInviteMembers.ts
import { editChatRoomTitle } from "@/apis/chat/chat";
import { useMutation } from "@tanstack/react-query";

interface Params {
  chatRoomId: number;
  chatRoomName: string;
}

export const useEditChatRoomTitle = () => {
  return useMutation({
    mutationFn: ({ chatRoomId, chatRoomName }: Params) =>
      editChatRoomTitle(chatRoomId, chatRoomName),

    onSuccess: () => {
      console.log("변경 성공!");
    },

    onError: (error) => {
      console.error("변경 실패:", error);
    },
  });
};
