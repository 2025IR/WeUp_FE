import { useMutation } from "@tanstack/react-query";
import { leaveChatRoom } from "@/apis/chat/chat";
import { AxiosError } from "axios";

export const useLeaveChatRoom = () => {
  return useMutation({
    mutationFn: (chatRoomId: number) => leaveChatRoom(chatRoomId),

    onSuccess: () => {
      console.log("채팅방 나가기 성공!");
    },

    onError: (error: AxiosError<{ message: string }>) => {
      console.error(
        "채팅방 나가기 실패:",
        error.response?.data.message ?? error.message
      );
    },
  });
};
