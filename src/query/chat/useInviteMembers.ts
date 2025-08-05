// @/hooks/chat/useInviteMembers.ts
import { inviteMembers } from "@/apis/chat/chat";
import { useMutation } from "@tanstack/react-query";

interface Params {
  chatRoomId: number;
  inviteMemberIds: number[];
}

export const useInviteMembers = () => {
  return useMutation({
    mutationFn: ({ chatRoomId, inviteMemberIds }: Params) =>
      inviteMembers(chatRoomId, inviteMemberIds),

    onSuccess: () => {
      console.log("초대 성공!");
    },

    onError: (error) => {
      console.error("초대 실패:", error);
    },
  });
};
