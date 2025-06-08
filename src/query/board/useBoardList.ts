import { fetchBoardList } from "@/apis/board/board";
import { FetchBoardListParams } from "@/types/board";
import { useQuery } from "@tanstack/react-query";

export const useBoardList = (projectId: number, body: FetchBoardListParams) => {
  return useQuery({
    queryKey: ["boardList", projectId, body],
    queryFn: () => fetchBoardList(projectId, body),
  });
};
