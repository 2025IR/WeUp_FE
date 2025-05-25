import { getChatHistory } from "@/apis/chat/chat";
import { ChatApiResponse } from "@/types/chat";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useGetChat = (roomId: number, size: number = 20) => {
  return useInfiniteQuery<ChatApiResponse>({
    queryKey: ["chatMessages", roomId],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) =>
      getChatHistory(roomId, pageParam as number, size),
    getNextPageParam: (lastPage) =>
      lastPage.last ? undefined : lastPage.number,
  });
};
