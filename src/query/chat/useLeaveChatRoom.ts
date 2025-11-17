import { useMutation } from "@tanstack/react-query";
import { leaveChatRoom } from "@/apis/chat/chat";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { setApiMessage } from "@/store/alert";

export const useLeaveChatRoom = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: (chatRoomId: number) => leaveChatRoom(chatRoomId),

    onSuccess: () => {
      dispatch(
        setApiMessage({
          message: "채팅방에서 나갔습니다",
          type: "success",
        })
      );
    },

    onError: (err: AxiosError<{ message: string }>) => {
      dispatch(
        setApiMessage({
          message: err.response?.data.message ?? "채팅방 나가기 실패",
          type: "error",
        })
      );
    },
  });
};
