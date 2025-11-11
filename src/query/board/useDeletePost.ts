import { deletePost } from "@/apis/board/board";
import { setApiMessage } from "@/store/alert";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

export const useDeletePost = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: (postId: number) => deletePost(postId),
    onSuccess: () => {
      dispatch(setApiMessage({ message: "게시글 삭제 성공", type: "success" }));
    },
    onError: () => {
      dispatch(setApiMessage({ message: "게시글 삭제 실패", type: "error" }));
    },
  });
};
