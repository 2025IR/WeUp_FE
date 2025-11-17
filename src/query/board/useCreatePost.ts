import { createPost } from "@/apis/board/board";
import { setApiMessage } from "@/store/alert";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useCreatePost = () => {
  const dispatch = useDispatch();
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
      formData.append("projectId", String(projectId));
      return await createPost(formData);
    },

    onSuccess: (res, { projectId }) => {
      console.log("createPost success:", res);
      queryClient.invalidateQueries({ queryKey: ["boardList", projectId] });
      dispatch(setApiMessage({ message: "게시글 등록 성공", type: "success" }));
      navigate(`/project/${projectId}/board`);
    },

    onError: (err: AxiosError<{ message: string }>) => {
      dispatch(
        setApiMessage({
          message: err.response?.data.message ?? "게시글 등록 실패",
          type: "error",
        })
      );
    },
  });
};
