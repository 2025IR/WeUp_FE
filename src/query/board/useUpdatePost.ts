import { updatePost } from "@/apis/board/board";
import { useMutation } from "@tanstack/react-query";

export const useUpdatePost = () => {
  return useMutation({
    mutationFn: ({
      postId,
      formData,
    }: {
      postId: number;
      formData: FormData;
    }) => updatePost(postId, formData),
  });
};
