import { createPost } from "@/apis/board/board";
import { useMutation } from "@tanstack/react-query";

export const useCreatePost = () => {
  return useMutation({
    mutationFn: ({
      projectId,
      formData,
    }: {
      projectId: number;
      formData: FormData;
    }) => {
      createPost(projectId, formData);
    },
  });
};
