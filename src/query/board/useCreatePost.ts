import { createPost } from "@/apis/board/board";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useCreatePost = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      projectId,
      formData,
    }: {
      projectId: number;
      formData: FormData;
    }) => {
      return await createPost(projectId, formData);
    },

    onSuccess: (res, { projectId }) => {
      console.log("✅ 게시글 등록 성공", res);
      queryClient.invalidateQueries({ queryKey: ["boardList", projectId] });
      navigate(`/project/${projectId}/board`);
    },

    onError: (error) => {
      console.error("❌ 게시글 등록 실패", error);
    },
  });
};
