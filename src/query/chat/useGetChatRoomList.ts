import { useQuery } from "@tanstack/react-query";
import { getChatRoomList } from "@/apis/chat/chat";

export const useChatRoomList = (projectId: number) => {
  return useQuery({
    queryKey: ["chatRoomList", projectId],
    queryFn: () => getChatRoomList(projectId),
    enabled: !!projectId,
  });
};
