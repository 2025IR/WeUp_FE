import { createChatRoom } from "@/apis/chat/chat";
import { CreateChatRoomPayload } from "@/types/chat";
import { useMutation } from "@tanstack/react-query";
import queryClient from "../reactQueryClient";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { setApiMessage } from "@/store/alert";

export const useCreateChat = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: (payload: CreateChatRoomPayload) => createChatRoom(payload),
    onSuccess: (_data, variables) => {
      dispatch(setApiMessage({ message: "채팅방 생성 성공", type: "success" }));

      queryClient.invalidateQueries({
        queryKey: ["chatRoomList", variables.projectId],
      });
    },

    onError: (err: AxiosError<{ message: string }>) => {
      dispatch(
        setApiMessage({
          message: err.response?.data.message ?? "채팅방 생성 실패",
          type: "error",
        })
      );
    },
  });
};
