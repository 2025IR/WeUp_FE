import { fetchBoardList } from "@/apis/board/board";
import { FetchBoardListParams } from "@/types/board";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

export const useBoardList = (params: FetchBoardListParams) => {
  return useQuery({
    queryKey: ["boardList", params],
    queryFn: () => fetchBoardList(params),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60,
  });
};
