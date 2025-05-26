import { fetchBoardList } from "@/apis/board/board";
import { FetchBoardListParams } from "@/types/board";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

export const useBoardList = (projectId: number, body: FetchBoardListParams) => {
  return useQuery({
    queryKey: ["boardList", projectId, body],
    queryFn: () => fetchBoardList(projectId, body),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60,
  });
};
