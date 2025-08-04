import { useQuery } from "@tanstack/react-query";
import { getInvitableMembers } from "@/apis/chat/chat";

export const useGetInvitableMembers = (chatRoomId: number) => {
  return useQuery({
    queryKey: ["invitableMembers", chatRoomId],
    queryFn: () => getInvitableMembers(chatRoomId),
    enabled: !!chatRoomId,
  });
};
