import { deletePost } from "@/apis/board/board";
import { useMutation } from "@tanstack/react-query";

export const useDeletePost = () => {
  return useMutation({
    mutationFn: (postId: number) => deletePost(postId),
  });
};
