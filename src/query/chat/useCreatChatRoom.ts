import { createChatRoom } from "@/apis/chat/chat";
import { CreateChatRoomPayload } from "@/types/chat";
import { useMutation } from "@tanstack/react-query";
import queryClient from "../reactQueryClient";
import { AxiosError } from "axios";

export const useCreateChat = () => {
  return useMutation({
    mutationFn: (payload: CreateChatRoomPayload) => createChatRoom(payload),
    onSuccess: (data, variables) => {
      console.log("채팅방이 성공적으로 생성되었습니다!");
      console.log("채팅방 생성 성공:", data);

      queryClient.invalidateQueries({
        queryKey: ["chatRoomList", variables.projectId],
      });
    },

    onError: (error: AxiosError<{ message: string }>) => {
      console.log(error);
      console.error("채팅방 생성 오류:", error);
    },
  });
};
