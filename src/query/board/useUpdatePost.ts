import { updatePost } from "@/apis/board/board";
import { setApiMessage } from "@/store/alert";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";

export const useUpdatePost = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: ({
      postId,
      formData,
    }: {
      postId: number;
      formData: FormData;
    }) => updatePost(postId, formData),
    onSuccess: () => {
      dispatch(setApiMessage({ message: "게시글 수정 성공", type: "success" }));
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
