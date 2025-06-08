import { getPost } from "@/apis/board/board";
import { PostProps } from "@/types/board";
import { useQuery } from "@tanstack/react-query";

export const useGetPost = (boardId: number) => {
  return useQuery<PostProps>({
    queryKey: ["boardDetail", boardId],
    queryFn: () => getPost(boardId),
  });
};
